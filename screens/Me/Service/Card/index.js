import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";
import data from "./data";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SceneMap } from "react-native-tab-view";
import ScrollviewTab from "components/ScrollviewTab";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, Card, Avatar } from "react-native-elements";
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

const TwoTab = () => {
  const navigation = useNavigation();
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  return (
    <Layout style={styles.tabContainer} level="1">
      <Text style={{ margin: 10 }}>Chọn loại mạng: </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Avatar
          containerStyle={{
            elevation: 2,
            marginLeft: 10,
            marginRight: 10,
          }}
          size="medium"
          source={{
            uri: "https://thanhtra.com.vn/data/images/0/2021/01/07/congdinh/logo-moi-cua-viettel.jpg?dpi=150&quality=100&w=630&mode=crop&anchor=topcenter&scale=both",
          }}
        ></Avatar>
        <Avatar
          containerStyle={{
            elevation: 5,
            marginLeft: 10,
            marginRight: 10,
          }}
          size="medium"
          source={{
            uri: "https://www.dmspro.vn/wp-content/uploads/2017/07/partner-bg-mobiphone-350x204-300x175.jpg",
          }}
        ></Avatar>
        <Avatar
          containerStyle={{
            elevation: 5,
            marginLeft: 10,
            marginRight: 10,
          }}
          size="medium"
          source={{
            uri: "http://vinaphoneonline.vn/wp-content/uploads/VNPT-Vinaphone2.jpg",
          }}
        ></Avatar>
        <Avatar
          containerStyle={{
            elevation: 5,
            marginLeft: 10,
            marginRight: 10,
          }}
          size="medium"
          source={{
            uri: "https://nosomovo.xyz/wp-content/uploads/2018/02/vietnamobile.jpg",
          }}
        ></Avatar>
      </View>

      <View style={{ width: "100%", marginBottom: 10 }}>
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
      <View style={{ width: "100%" }}>
        <Text
          style={{ marginTop: 20, marginLeft: 10, fontSize: 15 }}
          category="h6"
        >
          Nhập số điện thoại:
        </Text>
        <Input placeholder="Vui lòng nhập đúng số điện thoại"></Input>
      </View>

      <View style={{ width: "100%" }}>
        <Text style={{ marginLeft: 10, fontSize: 15 }} category="h6">
          Nhập email của bạn để nhận mã:
        </Text>
        <Input placeholder="Vui lòng nhập đúng định dạng email"></Input>
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
  two: TwoTab,
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
