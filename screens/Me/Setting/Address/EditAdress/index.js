import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import data from "../data";
import EditAddress from "../../../../../components/ListAdress/EditAdress/index";

const EditScreen = () => {
    return <EditAddress ListData={data} />;
};

const styles = StyleSheet.create({
    card: {},
    container: {
        flexDirection: "row",
        borderRadius: 16,
        justifyContent: "space-between",
    },
});

export default EditScreen;
