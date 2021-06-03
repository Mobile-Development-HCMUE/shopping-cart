import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "components/ColorButton";
import { themeOptions } from "reduxs";

const Stack = createStackNavigator();

const ThemeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.Setting}>
                <Card>
                    <Text>Choose your theme</Text>
                    <View style={styles.containerButton}>
                        {Object.keys(themeOptions).map((item, i) => {
                            return (
                                <Button
                                    key={i}
                                    color={themeOptions[item].TAB}
                                    style={styles.buttonStyle}
                                />
                            );
                        })}
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    containerButton: {
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
});

export default ThemeScreen;
