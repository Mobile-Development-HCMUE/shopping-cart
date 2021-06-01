import { StatusBar } from "expo-status-bar";
import React from "react";
import List from "../../../components/ListOptions/index";
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";
import { Button, Card } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import {ListData3, ListData4, ListData5} from "./data.js";

const Stack = createStackNavigator();

const SettingScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Card>
                    <Card.Title>Tài khoản</Card.Title>
                    <Card style={styles.Setting}>
                        <List listData={ListData3}/>
                    </Card>
                </Card>
                <Card>
                    <Card.Title style={{margin: 8}}>Cài đặt</Card.Title>
                    <Card style={styles.Setting}>
                        <List listData={ListData4}/>
                    </Card>
                </Card>
                <Card>
                    <Card.Title style={{margin: 8}}>Hỗ trợ</Card.Title>
                    <Card style={styles.Setting}>
                        <List listData={ListData5}/>
                    </Card>
                </Card>
                    <Button
                        title="ĐĂNG XUẤT"
                        style={{}}
                    />
            </ScrollView>
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
