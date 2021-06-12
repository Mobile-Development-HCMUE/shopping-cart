import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, Button } from "react-native-elements";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const FreeshipScreen = () => {
  const [isPress, setIsPress] = React.useState(true);
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  const TOP_PROFILEE = useSelector((state) => state.theme.theme.TOP_PROFILE);

  return (
    <View style={styles.outcard}>
      <View style={styles.incard}>
        <LinearGradient
          colors={[leftBackgroundButton, rightBackgroundButton]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              width: "100%",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "The-Wild-Thing",
                fontWeight: "bold",
                color: "#fff",
                fontSize: 30,
                fontStyle: "italic",
                width: "100%",
              }}
            >
              Miễn phí vận chuyển
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View style={{ width: "100%", height: "75%", marginTop: 10 }}>
        <View style={styles.styleViewSale}>
          <View
            style={{
              width: "30%",
              backgroundColor: leftBackgroundButton,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>TEAM-IT</Text>
          </View>
          <View
            style={{
              width: "70%",
              elevation: 1,
              borderColor: "#000",
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                justifyContent: "center",
                marginTop: 10,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Miễn phí ship cho đơn từ 0đ
            </Text>
            <Button
              buttonStyle={
                isPress
                  ? { backgroundColor: leftBackgroundButton }
                  : { backgroundColor: "#999" }
              }
              title={isPress ? "Lưu" : "Hết mã :("}
              onPress={() => {
                setIsPress(!isPress);
              }}
              containerStyle={{
                flex: 1,
                justifyContent: "flex-end",
                marginLeft: "20%",
                marginRight: "20%",
                marginBottom: "5%",
              }}
            ></Button>
          </View>
        </View>
        <View style={styles.styleViewSale}>
          <View
            style={{
              width: "30%",
              backgroundColor: leftBackgroundButton,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>TEAM-IT</Text>
          </View>
          <View
            style={{
              width: "70%",
              elevation: 1,
              borderColor: "#000",
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                justifyContent: "center",
                marginTop: 10,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Miễn phí 30k phí ship đơn từ 100k
            </Text>
            <Button
              buttonStyle={
                isPress
                  ? { backgroundColor: leftBackgroundButton }
                  : { backgroundColor: "#999" }
              }
              title={isPress ? "Lưu" : "Hết mã :("}
              onPress={() => {
                setIsPress(!isPress);
              }}
              containerStyle={{
                flex: 1,
                justifyContent: "flex-end",
                marginLeft: "20%",
                marginRight: "20%",
                marginBottom: "5%",
              }}
            ></Button>
          </View>
        </View>
        <View style={styles.styleViewSale}>
          <View
            style={{
              width: "30%",
              backgroundColor: leftBackgroundButton,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>TEAM-IT</Text>
          </View>
          <View
            style={{
              width: "70%",
              elevation: 1,
              borderColor: "#000",
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                justifyContent: "center",
                marginTop: 10,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Miễn phí ship 100% đơn từ 150k
            </Text>
            <Button
              buttonStyle={
                isPress
                  ? { backgroundColor: leftBackgroundButton }
                  : { backgroundColor: "#999" }
              }
              title={isPress ? "Lưu" : "Hết mã :("}
              onPress={() => {
                setIsPress(!isPress);
              }}
              containerStyle={{
                flex: 1,
                justifyContent: "flex-end",
                marginLeft: "20%",
                marginRight: "20%",
                marginBottom: "5%",
              }}
            ></Button>
          </View>
        </View>
        <View style={styles.styleViewSale}>
          <View
            style={{
              width: "30%",
              backgroundColor: leftBackgroundButton,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>TEAM-IT</Text>
          </View>
          <View
            style={{
              width: "70%",
              elevation: 1,
              borderColor: "#000",
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                justifyContent: "center",
                marginTop: 10,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Miễn phí ship 100% đơn từ 100k
            </Text>
            <Button
              buttonStyle={
                isPress
                  ? { backgroundColor: leftBackgroundButton }
                  : { backgroundColor: "#999" }
              }
              title={isPress ? "Lưu" : "Hết mã :("}
              onPress={() => {
                setIsPress(!isPress);
              }}
              containerStyle={{
                flex: 1,
                justifyContent: "flex-end",
                marginLeft: "20%",
                marginRight: "20%",
                marginBottom: "5%",
              }}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const Freeship = ({ navigation }) => {
  return <FreeshipScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  incard: {
    width: "100%",
    height: "25%",
    backgroundColor: "#fff",
  },
  outcard: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    marginTop: 1,
  },
  styleViewSale: {
    backgroundColor: "#fff",
    height: "22%",
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
  },
});

export default Freeship;
