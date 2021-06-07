import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Overlay } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Button as Buttonn, Layout } from "@ui-kitten/components";
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
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
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
                onPress={toggleOverlay}
                containerStyle={styles.ButtonContainerStyles}
                buttonStyle={styles.ButtonStyles}
                title="ĐĂNG XUẤT"
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: [leftBackgroundButton, rightBackgroundButton],
                    style: { flex: 1 },
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 0 },
                }}
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text style={{ fontWeight: "bold" }}>
                    Bạn có chắc chắn muốn đăng xuất?
                </Text>
                <Layout style={styles.container2} level="1">
                    <Buttonn style={styles.button2} appearance="filled">
                        CÓ
                    </Buttonn>
                    <Buttonn style={styles.button2} appearance="outline">
                        KHÔNG
                    </Buttonn>
                </Layout>
            </Overlay>
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
    ButtonContainerStyles: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 10,
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 20,
        minHeight: 40,
    },
    ButtonStyles: {
        minHeight: 40,
        borderRadius: 20,
    },
    container1: {
        justifyContent: "space-between",
        marginBottom: 6,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 8,
        borderRadius: 8,
    },
    container2: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,
        borderRadius: 8,
    },
    button2: {
        margin: 2,
        width: 100,
    },
    styles1: { borderRadius: 8 },
});

export default SettingScreen;
