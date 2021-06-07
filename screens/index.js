import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import HomeScreen from "./Home";
import NotifyScreen from "./Notify";
import MeScreen from "./Me";
import SettingScreen from "./Me/Setting";
import ThemeScreen from "./Me/Theme";
import RightButton from "../components/RightButton";
import ProfileScreen from "./Me/Profile";
import AddressScreen from "./Me/Address";
import HelpScreen from "./Me/Help";
import StNotifyScreen from "./Me/Setting-Notify";
import PrivacyScreen from "./Me/Privacy";
import LanguageScreen from "./Me/Language";
import IntroduceScreen from "./Me/Introduce";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const RootTabScreen = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
        navigation.setOptions({
            headerRight: (props) => {
                switch (routeName) {
                    case "Me":
                        return <RightButton />;
                    default:
                        return;
                }
            },
        });
    }, [navigation, route]);

    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    const tabActiveColor = useSelector((state) => state.theme.theme.TAB_ACTIVE);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: tabActiveColor,
            }}
            barStyle={{ backgroundColor: backgroundColor }}
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

const RootStackScreen = () => {
    const leftHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const headerTitleColor = useSelector(
        (state) => state.theme.theme.HEADER_TITLE
    );
    const backButtonColor = useSelector(
        (state) => state.theme.theme.BACK_BUTTON
    );
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackground: () => (
                    <LinearGradient
                        colors={[leftHeaderColor, rightHeaderColor]}
                        style={{ flex: 1 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                ),
                headerTitleStyle: { color: headerTitleColor },
                headerBackImage: ({ size }) => (
                    <Icon
                        name="arrow-back-circle-outline"
                        type="ionicon"
                        size={size}
                        color={backButtonColor}
                    />
                ),
            }}
        >
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
                }}
            />
            <Stack.Screen
                name="Theme"
                component={ThemeScreen}
                options={{
                    title: "Chế độ màu",
                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Hồ sơ của tôi",
                }}
            />
            <Stack.Screen
                name="Address"
                component={AddressScreen}
                options={{
                    title: "Địa chỉ",
                }}
            />
            <Stack.Screen
                name="Setting-Notify"
                component={StNotifyScreen}
                options={{
                    title: "Cài đặt thông báo",
                }}
            />
            <Stack.Screen
                name="Privacy"
                component={PrivacyScreen}
                options={{
                    title: "Cài đặt quyền riêng tư",
                }}
            />
            <Stack.Screen
                name="Language"
                component={LanguageScreen}
                options={{
                    title: "Ngôn ngữ",
                }}
            />
            <Stack.Screen
                name="Help"
                component={HelpScreen}
                options={{
                    title: "Trung tâm hỗ trợ",
                }}
            />
            <Stack.Screen
                name="Introduce"
                component={IntroduceScreen}
                options={{
                    title: "Giới thiệu",
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
