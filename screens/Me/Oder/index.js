import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon, Layout, Text, Button } from "@ui-kitten/components";
import HomeScreen from "../../Home/index";
import { View } from "react-native";
import data from "./NoneOrder/data";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SceneMap } from "react-native-tab-view";
import ScrollviewTab from "components/ScrollviewTab";

const OneTab = () => {
  return (
    <Layout style={styles.tabContainer} level="1">
      <Text category="h6">Chưa có đơn hàng</Text>
      <Button />
    </Layout>
  );
};

const renderScene = SceneMap({
  one: OneTab,
  two: OneTab,
  three: OneTab,
  four: OneTab,
  five: OneTab,
});

const OrderScreen = () => {
  const navigation = useNavigation();
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  const backgroundTab = useSelector((state) => state.theme.theme.TAB);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(data);

  return (
    <View style={{ height: "100%", flex: 1 }}>
      <ScrollviewTab
        index={index}
        routes={routes}
        setIndex={setIndex}
        renderScene={renderScene}
      ></ScrollviewTab>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default OrderScreen;
