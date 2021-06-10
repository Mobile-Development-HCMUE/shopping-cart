import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, SearchBar } from "react-native-elements";

const SeachBar = (props) => {
    return (
        <SearchBar
            style={{ flex: 1 }}
            placeholder="Tìm kiếm thương hiệu, sản phẩm ở đây..."
            onChangeText={(text) => props.searchFunciton(text)}
            onClear={(text) => props.searchFunciton("")}
            lightTheme
            round
            inputContainerStyle={{ maxHeight: 50 }}
            searchIcon={{ size: 24 }}
            value={props.search}
        />
    );
};

export default SeachBar;
