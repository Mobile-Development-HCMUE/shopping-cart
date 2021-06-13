import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon, Layout, Text } from "@ui-kitten/components";
import HomeScreen from "../../Home/index";
import { View } from "react-native";
import data from "./data";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SceneMap } from "react-native-tab-view";
import ScrollviewTab from "components/ScrollviewTab";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";

const OneTab = () => {
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  const navigation = useNavigation();
  return (
    <Layout style={styles.tabContainer} level="1">
      <View
        style={{ height: "50%", justifyContent: "flex-end", marginBottom: 20 }}
      >
        <Text style={{}} category="h6">
          Chưa có đơn nạp thẻ nào :(
        </Text>
      </View>
      <View style={{ height: "50%" }}>
        <Button
          // onPress={toggleOverlay}
          containerStyle={styles.ButtonContainerStyles}
          buttonStyle={styles.ButtonStyles}
          title="Mua ngay thôi!!!"
          onPress={() => navigation.navigate("Home")}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [leftBackgroundButton, rightBackgroundButton],
            style: { flex: 1 },
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0 },
          }}
        ></Button>
      </View>
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

const ServiceScreen = () => {
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
    alignContent: "center",
  },
  ButtonContainerStyles: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 20,
    minHeight: 40,
  },
  ButtonStyles: {
    minHeight: 40,
    borderRadius: 20,
  },
});
export default ServiceScreen;
