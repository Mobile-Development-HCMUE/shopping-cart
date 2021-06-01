import { StatusBar } from "expo-status-bar";
import React from "react";
import List from "../../../components/ListOptions/index";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import {ListData3, ListData4} from "./data.js";

const Stack = createStackNavigator();

const SettingScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{margin: 8}}>Tài khoản</Text>
                <View style={styles.Setting}>
                    <List listData={ListData3}/>
                </View>
                <Text style={{margin: 8}}>Cài đặt</Text>
                <View style={styles.Setting}>
                    <List listData={ListData4}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SettingScreen;
