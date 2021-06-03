import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import MainScreen from "./screens";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "reduxs";
const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <MainScreen></MainScreen>
            </ApplicationProvider>
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
