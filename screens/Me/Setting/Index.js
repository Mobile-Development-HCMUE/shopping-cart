import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@ui-kitten/components";
import ListData from "./data.js";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
    const navigation = useNavigation();
    const buttonLogoutColor = useSelector((state) => state.theme.TAB);
    const leftBackgroundButton = useSelector(
        (state) => state.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.HEADER_RIGHT
    );
    let count = 0;
    ListData.map((item, i) => {
        item.content.map((items, j) => {
            items.COLOR1 = useSelector((state) => state.theme[count].COLOR1);
            items.COLOR2 = useSelector((state) => state.theme[count].COLOR2);
            items.COLOR3 = useSelector((state) => state.theme[count].COLOR3);
            count++;
        });
    });
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                flexDirection: "column",
            }}
        >
            {ListData.map((item, i) => {
                return (
                    <Card
                        key={i}
                        containerStyle={{
                            borderRadius: 10,
                            justifyContent: "center",
                            elevation: 7,
                        }}
                    >
                        <Card.Title>{item.title}</Card.Title>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                marginTop: 5,
                            }}
                        >
                            {item.content.map((jtem, j) => {
                                return (
                                    <View
                                        key={j}
                                        style={{
                                            flex: 1,
                                            alignItems: "center",
                                            marginLeft: 10,
                                            marginRight: 10,
                                        }}
                                    >
                                        <Button
                                            onPress={() => {
                                                if (
                                                    typeof jtem.link ===
                                                    "undefined"
                                                ) {
                                                    console.log("Null");
                                                } else
                                                    navigation.navigate(
                                                        jtem.link
                                                    );
                                            }}
                                            buttonStyle={[
                                                styles.button,
                                                {
                                                    backgroundColor:
                                                        jtem.COLOR2,
                                                },
                                            ]}
                                            containerStyle={[
                                                styles.containerStyle,
                                                {
                                                    borderColor: jtem.COLOR3,
                                                },
                                            ]}
                                            icon={
                                                <Icon
                                                    name={jtem.icon}
                                                    type={jtem.type}
                                                    color={jtem.COLOR1}
                                                    size={20}
                                                />
                                            }
                                        />
                                        <Text
                                            status="basic"
                                            style={styles.text}
                                        >
                                            {jtem.title}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </Card>
                );
            })}
            <Button
                containerStyle={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom: 10,
                    marginLeft: 80,
                    marginRight: 80,
                    borderRadius: 20,
                    minHeight: 40,
                }}
                buttonStyle={{
                    backgroundColor: buttonLogoutColor,
                    minHeight: 40,
                    borderRadius: 20,
                }}
                title="ĐĂNG XUẤT"
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: [leftBackgroundButton, rightBackgroundButton],
                    style: { flex: 1 },
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 0 },
                }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6155a6",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#FFE3EF",
        borderRadius: 23,
        width: 46,
        height: 46,
    },
    containerStyle: {
        borderWidth: 8,
        borderColor: "#FFF6FA",
        borderStyle: "solid",
        borderRadius: 31,
    },
    text: {
        textAlign: "center",
        maxHeight: 55,
        minWidth: 80,
    },
});

export default SettingScreen;
