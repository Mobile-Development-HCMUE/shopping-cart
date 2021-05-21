import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Ionicons } from "react-native-vector-icons/Ionicons";
import MainScreen from "./screens/Index";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return <MainScreen></MainScreen>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
