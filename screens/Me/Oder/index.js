import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
  Tab,
  TabView,
  Text,
  Button,
} from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Home/index";
import { View } from "react-native";
import data from "./NoneOrder/data";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
const Stack = createStackNavigator();

const OrderScreen = () => {
  const navigation = useNavigation();
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <>
      <TabView
        tabBarStyle={{ height: 50 }}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {data.map((u, i) => {
          return (
            <Tab key={i} title={u.nhan}>
              <Layout style={styles.tabContainer} level="1">
                <Text category="h6">Chưa có đơn hàng</Text>
                <Button></Button>
              </Layout>
            </Tab>
          );
        })}
      </TabView>
    </>
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
