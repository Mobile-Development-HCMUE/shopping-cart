import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import HomeScreen from "./Home/index.js";
import NotifyScreen from "./Notify/index.js";
import MeScreen from "./Me/";
import SettingScreen from "./Me/Setting/";
import RightButton from "../components/RightButton/";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const RootTabScreen = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
        navigation.setOptions({
            headerRight: (props) =>
                routeName === "Me" ? <RightButton /> : null,
        });
    }, [navigation, route]);

    return (
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
                name="Notify"
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
    );
};

const getHeaderTitle = (route, navigation) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    switch (routeName) {
        case "Home":
            return "Home";
        case "Notify":
            return "Thông báo";
        case "Me":
            return "Tôi";
    }
};

const getRightButton = (route, color) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    switch (routeName) {
        case "Home":
            return <RightButton color={color} />;
        case "Notify":
            return <RightButton color={color} />;
        case "Me":
            return <RightButton color={color} />;
    }
};

const RootStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeTab"
                component={RootTabScreen}
                options={({ route, navigation }) => ({
                    headerTitle: getHeaderTitle(route, navigation),
                })}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    title: "Cài đặt",
                    headerBackImage: ({ size }) => (
                        <Icon
                            name="arrow-back-circle-outline"
                            type="ionicon"
                            size={size}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
};

export default Main;
