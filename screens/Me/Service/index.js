import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
  Tab,
  TabView,
  Text,
} from "@ui-kitten/components";
import { View } from "react-native";

const ServiceScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <TabView
      tabBarStyle={{ height: 50 }}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab title="Chưa thanh toán">
        <Layout style={styles.tabContainer} level="1">
          <Text category="h6">Chưa có đơn hàng</Text>
        </Layout>
      </Tab>
      <Tab title="Đã thanh toán">
        <Layout style={styles.tabContainer}>
          <Text category="h6">Chưa có đơn hàng</Text>
        </Layout>
      </Tab>
      <Tab title="Đã hoàn thành">
        <Layout style={styles.tabContainer}>
          <Text category="h6">Chưa có đơn hàng</Text>
        </Layout>
      </Tab>
      <Tab style={{}} title="Đã hủy">
        <Layout style={styles.tabContainer}>
          <Text category="h6">Chưa có đơn hàng</Text>
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ServiceScreen;
