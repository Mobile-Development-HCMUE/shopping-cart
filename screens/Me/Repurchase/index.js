import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import ListProduct from "components/ListProduct";
import users from "./data";

const RepurchaseScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListProduct ListData={users} />
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

export default RepurchaseScreen;
