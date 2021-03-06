import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MenuGroupsShowcase from "../../../components/MenuProduct/index";

const List = ({ navigation }) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
      }}
    >
      <MenuGroupsShowcase />
    </View>
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

export default List;
