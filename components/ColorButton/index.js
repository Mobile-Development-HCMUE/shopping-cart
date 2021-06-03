// In App.js in a new project

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ColorButton = ({ color, style }) => {
    return (
        <Button
            containerStyle={styles.containerStyle}
            buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: color },
                style,
            ]}
            onPress={() => console.log("work")}
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
