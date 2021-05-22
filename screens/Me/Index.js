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
import {
    Button,
    Icon,
    Image,
    Text,
    Divider,
    ListItem,
} from "react-native-elements";

import SettingScreen from "./Setting/index.js";
import RightButton from "../../components/RightButton";
import Avatar from "../../components/Avatar";
import { LinearGradient } from "expo-linear-gradient";
import { Title } from "react-native-paper";
import styles from "./style";
const Stack = createStackNavigator();
// a5e1ad;
const list = [
    { title: "Đơn mua", icon: "av-timer" },
    { title: "Đơn nạp thẻ và dịch vụ", icon: "flight-takeoff" },
    { title: "Mua lại", icon: "" },
    { title: "Đã thích", icon: "" },
    { title: "Đánh giá của tôi", icon: "" },
    { title: "Thiết lập tài khoản", icon: "" },
];

const isIos = Platform.OS === "ios";
const SPACER_SIZE = 1000; //arbitrary size
const TOP_COLOR = "white";
const BOTTOM_COLOR = "papayawhip";
const MeScreen = ({ navigation }) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <LinearGradient
                style={styles.container}
                colors={["#a9f1df", "#fff"]}
            >
                <View style={styles.Body}>
                    <View style={styles.Cart}>
                        <Avatar src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/136064155_167450921803187_6870146644278943650_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QgXcIlZMH-wAX8I6HBB&_nc_ht=scontent.fsgn5-5.fna&oh=1df37565cbc5984183f0d2ba642726ee&oe=60CE536E" />
                        <View style={{ flexDirection: "row" }}>
                            <Button
                                title="CHỈNH SỬA"
                                containerStyle={styles.ContainerButton}
                                buttonStyle={{
                                    backgroundColor: "#ff7b54",
                                    borderRadius: 10,
                                    width: 110,
                                }}
                            />
                            <Button
                                title="NHẮN TIN"
                                containerStyle={styles.ContainerButton}
                                buttonStyle={{
                                    backgroundColor: "#11cdef",
                                    borderRadius: 10,
                                    width: 110,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <View style={styles.Info}>
                                <Text h4>10</Text>
                                <Text>Đơn hàng</Text>
                            </View>
                            <View style={styles.Info}>
                                <Text h4>13</Text>
                                <Text>Đang theo dõi</Text>
                            </View>
                            <View style={styles.Info}>
                                <Text h4>20</Text>
                                <Text>Theo dõi</Text>
                            </View>
                        </View>
                        <Text h3 style={{ margin: 10 }}>
                            Nguyễn Văn Phong
                        </Text>
                        <Divider
                            style={{
                                backgroundColor: "blue",
                                height: 1,
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                            }}
                        />
                        <Text>Hello</Text>
                        <View style={{ marginBottom: 60 }}>
                            {list.map((item, i) => (
                                <ListItem
                                    containerStyle={{ minWidth: 280 }}
                                    key={i}
                                    bottomDivider
                                >
                                    <Icon name={item.icon} />
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {item.title}
                                        </ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            ))}
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

const Me = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Me"
                component={MeScreen}
                options={{
                    headerRight: ({ color }) => <RightButton color={color} />,
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
