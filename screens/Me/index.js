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
const Stack = createStackNavigator();

const MeScreen = ({ navigation }) => {
    const topProfileColor = useSelector((state) => state.theme.TOP_PROFILE);
    const bottomProfileColor = useSelector(
        (state) => state.theme.BOTTOM_PROFILE
    );
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
                        <Avatar src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/136064155_167450921803187_6870146644278943650_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QgXcIlZMH-wAX8I6HBB&_nc_ht=scontent.fsgn5-5.fna&oh=1df37565cbc5984183f0d2ba642726ee&oe=60CE536E" />
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
                            Nguyễn Văn Phong
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
