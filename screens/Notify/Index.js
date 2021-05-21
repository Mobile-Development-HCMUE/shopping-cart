import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

const NotifyScreen = () => {
    return <Text>Notify page</Text>;
};

const Notify = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={NotifyScreen}></Stack.Screen>
        </Stack.Navigator>
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

export default Notify;
