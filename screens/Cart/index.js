import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  return <View />;
};

const Cart = ({ navigation }) => {
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  return (
    <Layout style={styles.tabContainer} level="1">
      <View
        style={{ height: "50%", justifyContent: "flex-end", marginBottom: 20 }}
      >
        <Text style={{}} category="h6">
          Chưa có gì trong giỏ hàng :(
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

export default Cart;
