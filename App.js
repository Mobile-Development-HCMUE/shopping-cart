import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
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
import { SafeAreaProvider } from "react-native-safe-area-context";

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
import { Platform, InteractionManager } from "react-native";

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === "android") {
    // Work around issue `Setting a timer for long time`
    // see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = "_lt_" + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = (id) => {
        if (typeof id === "string" && id.startsWith("_lt_")) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}

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
                <SafeAreaProvider>
                    <StatusBar />
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
                </SafeAreaProvider>
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
