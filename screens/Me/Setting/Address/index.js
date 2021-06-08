import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import data from "./data";
import ListAdress from "components/ListAdress/index";

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
