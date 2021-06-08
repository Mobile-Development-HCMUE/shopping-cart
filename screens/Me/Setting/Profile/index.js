import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Overlay, Image } from "react-native-elements";
import List from "components/ListOptions/index.js";
import { ListData3, ListData4 } from "./data.js";
import Avatar from "components/Avatar";
import { ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { Text, Button as ButtonKitten } from "@ui-kitten/components";
import { UserContext } from "contexts";
import { firebase } from "../../../../firebase/config";
import * as ImagePicker from "expo-image-picker";
import Loader from "components/Loader";

const ProfileScreen = () => {
    const buttonLogoutColor = useSelector((state) => state.theme.TAB);
    const [image, setImage] = useState(null);
    const [visible, setVisible] = useState(false);
    const userID = React.useContext(UserContext);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "Sorry, we need camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <SafeAreaView>
            <Loader loading={loading} />
            <View style={styles.Setting}>
                <Overlay
                    visible={visible}
                    overlayStyle={{
                        flexDirection: "row",
                        borderRadius: 20,
                        height: 400,
                        width: 300,
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1,
                        }}
                    >
                        <Text style={{}}>Chọn ảnh để upload</Text>
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{
                                    margin: 20,
                                    width: 200,
                                    height: 200,
                                }}
                            />
                        )}

                        <ButtonKitten
                            appearance="outline"
                            status="warning"
                            onPress={() => pickImage()}
                            style={styles.button}
                        >
                            CHỌN LẠI
                        </ButtonKitten>
                        <ButtonKitten
                            appearance="outline"
                            status="success"
                            onPress={() => setVisible(false)}
                            style={styles.button}
                        >
                            TẢI LÊN
                        </ButtonKitten>
                    </View>
                </Overlay>
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
                            onPress={() => {
                                setVisible(true);
                                pickImage();
                            }}
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
    button: {
        width: "100%",
        margin: 5,
        borderRadius: 20,
    },
});

export default ProfileScreen;
