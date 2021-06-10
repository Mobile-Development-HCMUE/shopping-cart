import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Button, Card, Icon, Avatar } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { List } from "components/ListOptions/index.js";
import { SafeAreaView } from "react-native-safe-area-context";

const users = [
    {
        name: "Nguyễn Văn Phong",
        avatar: "https://scontent.fsgn12-1.fna.fbcdn.net/v/t1.6435-9/136064155_167450921803187_6870146644278943650_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9UQEdKkG8DIAX9xSF8t&_nc_ht=scontent.fsgn12-1.fna&oh=695b9fe06dcc020da45836b6f4a88f55&oe=60E219EE",
    },
    {
        name: "Trịnh Thị Phương Vi",
        avatar: "https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.6435-9/151005895_1098715097300472_3217899909379657841_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CPLlfDke4fAAX97iVzB&_nc_ht=sconthttps://scontent.fsgn6-2.fna.fbcdn.net/v/t1.6435-9/151005895_1098715097300472_3217899909379657841_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CPLlfDke4fAAX97iVzB&_nc_ht=scontent.fsgn6-2.fna&oh=7de6ab901cbe34d215e0e7109d0e38f9&oe=60E592D4ent.fsgn6-2.fna&oh=7de6ab901cbe34d215e0e7109d0e38f9&oe=60E592D4",
    },
    {
        name: "Nguyễn Danh Trung",
        avatar: "https://scontent.fsgn12-1.fna.fbcdn.net/v/t1.6435-9/65375728_1267171063446594_8768789863567720448_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PqmQJgY8NPAAX-ka8fe&_nc_ht=scontent.fsgn12-1.fna&oh=d8005e7600c64210046e4b5eba5335fa&oe=60E2B703",
    },
    {
        name: "Trần Lê Chánh Hạnh",
        avatar: "https://scontent.fsgn12-1.fna.fbcdn.net/v/t1.6435-9/44939850_2157970527753309_3441001607121076224_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=h9I2vOSzh0cAX-Zk7pU&_nc_ht=scontent.fsgn12-1.fna&oh=9d02ff2ee3ea82b63132ad63ff0c1328&oe=60E1B92E",
    },
];

const IntroduceScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Card containerStyle={styles.card}>
                    <Card.Title>
                        Phần mềm được thực hiện bởi: Team-IT
                    </Card.Title>
                    {users.map((u, i) => {
                        return (
                            <View
                                key={i}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    margin: 10,
                                }}
                            >
                                <Avatar
                                    rounded
                                    size="large"
                                    title="LW"
                                    source={{
                                        uri: u.avatar,
                                    }}
                                    activeOpacity={0.7}
                                    containerStyle={styles.Avatar}
                                />
                                <Text style={styles.name}>{u.name}</Text>
                                <Card.Divider />
                            </View>
                        );
                    })}
                </Card>
                <View></View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        justifyContent: "center",
        alignContent: "center",
    },
    Avatar: {
        elevation: 9,
    },
});

export default IntroduceScreen;
