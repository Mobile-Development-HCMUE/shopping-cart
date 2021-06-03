import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "components/ColorButton";

const Stack = createStackNavigator();

const ThemeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.Setting}>
                <Card>
                    <Text>Choose your theme</Text>
                    <Button color="#aaaaaa" />
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
});

export default ThemeScreen;
