import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "./Home/Index.js";
import NotifyScreen from "./Notify/Index.js";
import MeScreen from "./Me/Index.js";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: "#fff",
                }}
                barStyle={{ backgroundColor: "#2E8364" }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Trang chủ",
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name="home"
                                type="ionicon"
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Details"
                    component={NotifyScreen}
                    options={{
                        title: "Thông báo",
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name="notifications"
                                type="ionicon"
                                color={color}
                                size={24}
                            />
                        ),
                        tabBarBadge: 0,
                    }}
                />
                <Tab.Screen
                    name="Me"
                    component={MeScreen}
                    options={{
                        title: "Tôi",
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name="person"
                                type="ionicon"
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Main;
