import React from "react";
import { StyleSheet, Dimensions, FlatList, View } from "react-native";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const DetailScreeen = () => {
    return (
        <View>
            <FlatList></FlatList>
        </View>
    );
};

export default DetailScreeen;
