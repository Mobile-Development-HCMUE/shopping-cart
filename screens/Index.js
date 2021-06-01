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
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import HomeScreen from "./Home";
import NotifyScreen from "./Notify";
import MeScreen from "./Me";
import SettingScreen from "./Me/Setting";
import RightButton from "../components/RightButton";

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
