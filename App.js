import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Text,
    IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import thunk from "redux-thunk";
import { reducers } from "./redux/ducks";
const store = createStore(reducers);
import Auth from "./screens/Auth";
import SplashScreen from "./screens/SplashScreen";
import DrawerNavigationRoutes from "./screens/DrawerScreens";
import { useDispatch } from "react-redux";
import { change_theme } from "./redux/ducks/";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

const App0 = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        AsyncStorage.getItem("@theme")
            .then((value) => {
                value = value == null ? "default" : value;
                value = value.replace(/[^a-zA-Z ]/g, "");
                console.log(value);
                dispatch(change_theme(value));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SplashScreen">
                        {/* SplashScreen which will come once for 5 Seconds */}
                        <Stack.Screen
                            name="SplashScreen"
                            component={SplashScreen}
                            // Hiding header for Splash Screen
                            options={{ headerShown: false }}
                        />
                        {/* Auth Navigator: Include Login and Signup */}
                        <Stack.Screen
                            name="Auth"
                            component={Auth}
                            options={{ headerShown: false }}
                        />
                        {/* Navigation Drawer as a landing page */}
                        <Stack.Screen
                            name="DrawerNavigationRoutes"
                            component={DrawerNavigationRoutes}
                            // Hiding header for Navigation Drawer
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        </>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <App0 />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
