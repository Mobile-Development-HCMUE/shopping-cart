import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";

const SplashScreen = ({ navigation }) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);
    const backgroundColor = useSelector((state) => state.theme.TAB);
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            //Check if user_id is set or not
            //If not then send for Authentication
            //else send to Home Screen
            AsyncStorage.getItem("user_id").then((value) =>
                navigation.replace(
                    value === null ? "Auth" : "DrawerNavigationRoutes"
                )
            );
        }, 2000);
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Image
                source={require("assets/aboutreact.png")}
                style={{ width: "90%", resizeMode: "contain", margin: 30 }}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#307ecc",
    },
    activityIndicator: {
        alignItems: "center",
        height: 80,
    },
});
