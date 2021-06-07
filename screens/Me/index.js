// In App.js in a new project

import * as React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Image } from "react-native-elements";
import { Text, Button } from "@ui-kitten/components";

import SettingScreen from "./Setting/index.js";

import Avatar from "../../components/Avatar";
import List from "../../components/ListOptions/index";
import { LinearGradient } from "expo-linear-gradient";
import { Title } from "react-native-paper";
import styles from "./style";
import { ListData1, ListData2 } from "./data.js";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

const MeScreen = ({ navigation }) => {
    const [userID, setUserID] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [userAvatarUrl, setUserAvatarUrl] = React.useState("");
    const topProfileColor = useSelector((state) => state.theme.TOP_PROFILE);
    const bottomProfileColor = useSelector(
        (state) => state.theme.BOTTOM_PROFILE
    );
    async function getUserID() {
        const ID = await AsyncStorage.getItem("user_id")
        setUserID(ID);
    }
    getUserID();
    // console.log(userID);

    fetch(
        "https://60bbaca242e1d00017620f70.mockapi.io/user?" +
            new URLSearchParams({
                email: userID,
            }),
        {
            method: "GET",
            headers: {
                //Header Defination
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        }
    )
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([statusCode, data]) => {
            // If server response message same as Data Matched
            // console.log(data[0]);
            if (statusCode === 200 && typeof data[0] != "undefined") {
                setUserName(data[0].name);
                setUserAvatarUrl(data[0].avatar);
            } else {
                console.log("Fail to get user data");
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <LinearGradient
                style={styles.container}
                colors={[topProfileColor, bottomProfileColor]}
            >
                <View style={styles.Body}>
                    <View style={styles.Card}>
                        <Avatar src={userAvatarUrl} />
                        <View style={{ flexDirection: "row" }}>
                            <Button
                                style={styles.Button}
                                size="small"
                                status="success"
                            >
                                Theo dõi
                            </Button>
                            <Button
                                style={styles.Button}
                                size="small"
                                appearance="outline"
                            >
                                Nhắn tin
                            </Button>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <View style={styles.Info}>
                                <Text category="h4">10</Text>
                                <Text>Đơn hàng</Text>
                            </View>
                            <View style={styles.Info}>
                                <Text category="h4">13</Text>
                                <Text>Đang theo dõi</Text>
                            </View>
                            <View style={styles.Info}>
                                <Text category="h4">20</Text>
                                <Text>Theo dõi</Text>
                            </View>
                        </View>
                        <Text category="h3" style={{ margin: 10 }}>
                            {userName}
                        </Text>
                        <Text style={{ margin: 10 }}>Intro</Text>
                    </View>
                    <View style={styles.Setting}>
                        <List listData={ListData1} />
                    </View>
                    <View style={styles.Setting}>
                        <List listData={ListData2} />
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

const Me = ({ navigation }) => {
    return <MeScreen />;
};

export default Me;
