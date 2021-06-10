import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CardListHome from "../../components/CardListHome/index";
import data from "./data";

const NotifyScreen = () => {
    return <CardListHome listButton={data}></CardListHome>;
};

const Notify = ({ navigation }) => {
    return <NotifyScreen />;
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
