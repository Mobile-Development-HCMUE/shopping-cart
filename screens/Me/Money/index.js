import React from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { Button, Card, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@ui-kitten/components";

const MoneyScreen = () => {
  const topProfileColor = useSelector((state) => state.theme.theme.TOP_PROFILE);
  const bottomProfileColor = useSelector(
    (state) => state.theme.theme.BOTTOM_PROFILE
  );
  const [value, setValue] = React.useState("");
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontStyle: "italic",
            marginLeft: 20,
            marginTop: 10,
            fontSize: 25,
            color: "#fff00f",
          }}
        >
          Napas
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 25, marginTop: 5 }}>
            **** **** **** ****
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Họ và tên
          </Text>
          <Text
            style={{
              color: "#fff",
              marginRight: 10,
              marginTop: 10,
              fontSize: 13,
            }}
          >
            Ngày kết nối
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#fff00f",
              fontStyle: "italic",
              marginLeft: 30,
              marginTop: 5,
            }}
          >
            Họ và tên
          </Text>
          <Text
            style={{
              color: "#fff00f",
              fontStyle: "italic",
              marginRight: 30,
              marginTop: 5,
            }}
          >
            MM/YY
          </Text>
        </View>
      </View>
      <Card containerStyle={{ borderRadius: 16, marginBottom: 15 }}>
        <View style={styles.stylesView}>
          <Text
            style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
            category="h6"
          >
            Số thẻ:
          </Text>
          <Input
            style={styles.styleInput}
            placeholder="Vui lòng nhập đúng số thẻ"
            value={value}
            onChangeText={(nextValue) => setValue(nextValue)}
          ></Input>
        </View>
        <View style={styles.stylesView}>
          <Text
            style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
            category="h6"
          >
            Họ và tên:
          </Text>
          <Input
            style={styles.styleInput}
            placeholder="Vui lòng nhập đúng họ và tên"
          ></Input>
        </View>
        <View style={styles.stylesView}>
          <Text
            style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
            category="h6"
          >
            Ngày kết nối:
          </Text>
          <Input style={styles.styleInput} placeholder="MM/YY"></Input>
        </View>
      </Card>
      <Button
        // onPress={toggleOverlay}
        containerStyle={styles.ButtonContainerStyles}
        buttonStyle={styles.ButtonStyles}
        title="Lưu tài khoản"
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [leftBackgroundButton, rightBackgroundButton],
          style: { flex: 1 },
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    height: "30%",
    marginBottom: 10,
    backgroundColor: "#03256c",
    marginRight: "5%",
    marginLeft: "5%",
  },
  stylesView: {
    width: "100%",
    backgroundColor: "#fff",
  },
  styleInput: {
    marginLeft: 10,
    maxWidth: "85%",
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
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
  },
});

export default MoneyScreen;
