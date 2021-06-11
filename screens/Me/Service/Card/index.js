import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";
import data from "./data";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SceneMap } from "react-native-tab-view";
import ScrollviewTab from "components/ScrollviewTab";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const OneTab = () => {
  const navigation = useNavigation();
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  return (
    <Layout style={styles.tabContainer} level="1">
      <View style={{ width: "100%" }}>
        <Text style={{ margin: 10, fontSize: 15 }} category="h6">
          Bạn muốn nạp vào số điện thoại:
        </Text>
        <Input placeholder="Vui lòng nhập đúng số điện thoại"></Input>
      </View>

      <View style={{ width: "100%", marginBottom: 5 }}>
        <Text style={{ margin: 10, fontSize: 15 }} category="h6">
          Nhập email của bạn:
        </Text>
        <Input placeholder="Vui lòng nhập đúng định dạng email"></Input>
      </View>
      <View style={{ width: "100%", marginBottom: 5 }}>
        <Text style={{ margin: 10, fontSize: 15 }} category="h6">
          Chọn giá tiền cần nạp:
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Card
            containerStyle={{
              width: "40%",
            }}
            wrapperStyle={{
              alignItems: "center",
            }}
          >
            <Text>10.000</Text>
          </Card>
          <Card
            containerStyle={{
              width: "40%",
            }}
            wrapperStyle={{
              alignItems: "center",
            }}
          >
            <Text>20.000</Text>
          </Card>
          <Card
            containerStyle={{
              width: "40%",
            }}
            wrapperStyle={{
              alignItems: "center",
            }}
          >
            <Text>50.000</Text>
          </Card>
          <Card
            containerStyle={{
              width: "40%",
            }}
            wrapperStyle={{
              alignItems: "center",
            }}
          >
            <Text>100.000</Text>
          </Card>
          <Card
            containerStyle={{
              width: "40%",
            }}
            wrapperStyle={{
              alignItems: "center",
            }}
          >
            <Text>200.000</Text>
          </Card>
          <Card
            containerStyle={{
              width: "40%",
            }}
            wrapperStyle={{
              alignItems: "center",
            }}
          >
            <Text>500.000</Text>
          </Card>
        </View>
      </View>

      <Button
        // onPress={toggleOverlay}
        containerStyle={styles.ButtonContainerStyles}
        buttonStyle={styles.ButtonStyles}
        title="Nạp tiền"
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [leftBackgroundButton, rightBackgroundButton],
          style: { flex: 1 },
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
        }}
      ></Button>
    </Layout>
  );
};

const renderScene = SceneMap({
  one: OneTab,
  two: OneTab,
  three: OneTab,
});

const CardScreen = () => {
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
  ButtonContainerStyles: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 20,
    minHeight: 40,
  },
  ButtonStyles: {
    minHeight: 40,
    borderRadius: 20,
    minWidth: 120,
  },
});
export default CardScreen;
