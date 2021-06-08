import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createStackNavigator();

const Auth = () => {
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    const headerTitleColor = useSelector(
        (state) => state.theme.theme.HEADER_TITLE
    );
    const leftHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const backButtonColor = useSelector(
        (state) => state.theme.theme.BACK_BUTTON
    );
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerBackground: () => (
                    <LinearGradient
                        colors={[leftHeaderColor, rightHeaderColor]}
                        style={{ flex: 1 }}
                        start={{ x: 0, y: -1 }}
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
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    title: "Register", //Set Header Title
                    headerTintColor: "#fff", //Set Header text color
                    headerTitleStyle: {
                        fontWeight: "bold", //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default Auth;
