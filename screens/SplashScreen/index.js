import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { firebase } from "../../firebase/config"; // add this code to your project to reset all timeouts
import { Platform, InteractionManager } from "react-native";
import { change_id, change_name, change_avatar } from "../../redux/ducks";
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
const SplashScreen = ({ navigation }) => {
    //State for ActivityIndicator animation
    const [user, setUser] = useState(null);
    const [animating, setAnimating] = useState(true);
    const backgroundColor = useSelector(
        (state) => state.theme.theme.TOP_PROFILE
    );
    const dispatch = useDispatch();
    useEffect(() => {
        const usersRef = firebase.firestore().collection("users");
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data();
                        setUser(userData);
                        dispatch(change_id(userData.id));
                        dispatch(change_name(userData.name));
                        const local = "avatar/" + userData.id;
                        const ref = firebase.storage().ref(local);
                        ref.getDownloadURL().then((url) => {
                            dispatch(change_avatar(url));
                        });
                        navigation.replace("DrawerNavigationRoutes", userData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                navigation.replace("Auth");
            }
        });
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
