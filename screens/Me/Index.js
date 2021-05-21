// In App.js in a new project

import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Icon, Avatar, Image } from "react-native-elements";

import SettingScreen from "./Setting/Index.js";
import RightButton from "../../components/RightButton/Index";
import color from "color";
import { LinearGradient } from "expo-linear-gradient";
import { Title } from "react-native-paper";
import styles from "./Style";
const Stack = createStackNavigator();

const MeScreen = ({ navigation }) => {
    return (
        <LinearGradient
            style={styles.container}
            colors={["#a5e1ad", "#a9f1df"]}
        >
            <View style={styles.Body}>
                <View style={styles.Cart}>
                    <Avatar
                        rounded
                        size="large"
                        title="LW"
                        source={{
                            uri: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/136064155_167450921803187_6870146644278943650_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QgXcIlZMH-wAX8I6HBB&_nc_ht=scontent.fsgn5-5.fna&oh=1df37565cbc5984183f0d2ba642726ee&oe=60CE536E",
                        }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={styles.Avatar}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            title="Chỉnh sửa"
                            ViewComponent={LinearGradient} // Don't forget this!
                            linearGradientProps={{
                                colors: ["red", "#ff7b54"],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                            }}
                            buttonStyle={styles.ContainerButton}
                        />
                        <Button
                            title="Nhắn tin"
                            containerStyle={styles.ContainerButton}
                            buttonStyle={{
                                backgroundColor: "#11cdef",
                                borderRadius: 10,
                            }}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const Me = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Me"
                component={MeScreen}
                options={{
                    headerRight: () => <RightButton color={color} />,
                }}
            ></Stack.Screen>
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
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

export default Me;
