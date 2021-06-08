import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Text } from "react-native-elements";
import List from "components/ListOptions/index.js";
import { ListData3, ListData4 } from "./data.js";
import Avatar from "components/Avatar";
import { ImageBackground } from "react-native";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
    const buttonLogoutColor = useSelector((state) => state.theme.TAB);
    return (
        <SafeAreaView>
            <View style={styles.Setting}>
                <Card containerStyle={styles.card1} wrapperStyle={{}}>
                    <View
                        style={{
                            marginTop: 30,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Avatar src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/136064155_167450921803187_6870146644278943650_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QgXcIlZMH-wAX8I6HBB&_nc_ht=scontent.fsgn5-5.fna&oh=1df37565cbc5984183f0d2ba642726ee&oe=60CE536E"></Avatar>
                        <Button
                            containerStyle={styles.container}
                            buttonStyle={styles.Style}
                            title="Chỉnh sửa"
                        />
                    </View>
                </Card>
                <Card containerStyle={styles.card2}>
                    <View style={styles.Setting}>
                        <List listData={ListData3}></List>
                        <List listData={ListData4}></List>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card1: {
        height: 180,
        borderRadius: 16,
        justifyContent: "center",
        alignContent: "center",
        elevation: 10,
    },
    card2: {
        borderRadius: 16,
        elevation: 7,
    },
    container: {
        marginTop: 20,
        borderRadius: 20,
    },
    Style: {
        backgroundColor: "#fd3a69",
        borderRadius: 20,
        height: 30,
        width: 100,
    },
});

export default ProfileScreen;
