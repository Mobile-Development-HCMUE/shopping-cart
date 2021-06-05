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
        <Card containerStyle={styles.card}>
          <Card.Title style={{ marginTop: 1, marginBottom: 70 }}>
            Địa chỉ 1
          </Card.Title>
          <Button
            type="outline"
            containerStyle={styles.buttoncontainer}
            buttonStyle={styles.buttonstyles}
            title="Chỉnh sửa"
          />
        </Card>
        <Card containerStyle={styles.card}>
          <Card.Title style={{ marginTop: 1, marginBottom: 70 }}>
            Địa chỉ 2
          </Card.Title>
          <Button
            type="outline"
            containerStyle={styles.buttoncontainer}
            buttonStyle={styles.buttonstyles}
            title="Chỉnh sửa"
          />
        </Card>
        <Card containerStyle={styles.card}>
          <Card.Title style={{ marginTop: 1, marginBottom: 70 }}>
            Địa chỉ 3
          </Card.Title>
          <Button
            type="outline"
            containerStyle={styles.buttoncontainer}
            buttonStyle={styles.buttonstyles}
            title="Chỉnh sửa"
          />
        </Card>
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
    minHeight: 50,
    borderRadius: 20,
  },
  buttoncontainer: {
    justifyContent: "flex-end",
    //marginBottom: 1,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 10,
    minHeight: 40,
  },
  buttonstyles: {
    borderRadius: 10,
    minHeight: 30,
  },
});

export default AddressScreen;
