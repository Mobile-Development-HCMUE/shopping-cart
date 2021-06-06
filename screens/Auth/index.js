import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Login";
import RegisterScreen from "./Register";

const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
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
                    headerStyle: {
                        backgroundColor: "#307ecc", //Set Header color
                    },
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
