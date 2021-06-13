import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CardListHome from "../../components/CardListHome/index";

const CartScreen = () => {
  return <View />;
};

const Cart = ({ navigation }) => {
  return <CartScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
