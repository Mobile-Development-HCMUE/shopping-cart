// In App.js in a new project

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { change_theme } from "reduxs";
const ColorButton = ({ color, style, title }) => {
    const dispatch = useDispatch();
    const backgroundColor = useSelector((state) => state.theme.TAB);
    return (
        <Button
            containerStyle={styles.containerStyle}
            buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: color },
                style,
            ]}
            onPress={() => {
                console.log(backgroundColor, title, "before");
                dispatch(change_theme(title));
                console.log(backgroundColor, title, "after");
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
