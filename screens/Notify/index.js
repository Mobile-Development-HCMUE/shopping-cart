import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContentLoader from "../../components/ContentLoader/Notify";

const NotifyScreen = () => {
  return (
    <View>
      <ContentLoader />
    </View>
  );
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
