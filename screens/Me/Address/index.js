import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { List } from "../../../components/ListOptions/index.js";

const AddressScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Card containerStyle={styles.card}></Card>
        <Card containerStyle={styles.card}></Card>
        <Card containerStyle={styles.card}></Card>
        <Button
          containerStyle={styles.container}
          buttonStyle={styles.Style}
          title="Thêm địa chỉ mới"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    borderRadius: 16,
    // alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 20,
    minHeight: 40,
    marginTop: 100,
  },
  Style: {
    backgroundColor: "#fd3a69",
    minHeight: 40,
    borderRadius: 20,
  },
});

export default AddressScreen;
