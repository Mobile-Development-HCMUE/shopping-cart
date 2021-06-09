// In App.js in a new project

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { change_theme } from "reduxs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ColorButton = ({ color, style, title }) => {
    const dispatch = useDispatch();
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);

    const storeData = async (name, value) => {
        try {
            console.log(value);
            await AsyncStorage.setItem(name, value);
            return;
        } catch (error) {
            console.log(error);
        }
    };
    const changeTheme = (color) => {
        dispatch(change_theme(color));
        storeData("@theme", color)
            .then(() => {
                console.log(color);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Button
            containerStyle={styles.containerStyle}
            buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: color },
                style,
            ]}
            onPress={() => {
                // console.log(backgroundColor, title, "before");
                changeTheme(title);
                // console.log(backgroundColor, title, "after");
            }}
        />
    );
};
export default ColorButton;

const styles = StyleSheet.create({
    containerStyle: {},
    buttonStyle: {
        backgroundColor: "#000",
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});
