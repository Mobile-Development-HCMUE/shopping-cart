import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const FreeshipScreen = () => {
  const leftBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const rightBackgroundButton = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );

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
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#ff5",
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
      <View>
        <View></View>
        <View></View>
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
});

export default Freeship;
