import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { View, Text } from "react-native";
const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const OrderScreen = () => {
  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
      <BottomNavigationTab title="Chờ xác nhận"></BottomNavigationTab>
      <BottomNavigationTab title="Đang giao" />
      <BottomNavigationTab title="Đã giao" />
      <BottomNavigationTab title="Đã hủy" />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
export default OrderScreen;
