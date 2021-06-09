import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import ListProduct from "components/ListProduct";
import users from "./data";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const LikedScreen = () => {
  const topProfileColor = useSelector((state) => state.theme.theme.TOP_PROFILE);
  const bottomProfileColor = useSelector(
    (state) => state.theme.theme.BOTTOM_PROFILE
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{ height: "100%" }}
        colors={[topProfileColor, bottomProfileColor]}
      >
        <ListProduct ListData={users} />
      </LinearGradient>
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

export default LikedScreen;
