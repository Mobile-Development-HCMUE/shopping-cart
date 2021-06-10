import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import data from "./data";
import ListAdress from "components/ListAdress/index";
import { SafeAreaView } from "react-native-safe-area-context";

const AddressScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ListAdress ListData={data} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {},
    container: {
        flexDirection: "row",
        borderRadius: 16,
        justifyContent: "space-between",
    },
});

export default AddressScreen;
