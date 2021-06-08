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
    const [loading, setLoading] = useState(false);
    const buttonLogoutColor = useSelector((state) => state.theme.TAB);
    const [image, setImage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const user = React.useContext(UserContext);
    const [avatar, setAvatar] = useState(null);
    // console.log(avatar);
    useEffect(() => {
        (async () => {
            const ref = firebase.storage().ref("avatar/" + user.id);
            const url = await ref.getDownloadURL();
            setAvatar(url);
        })();
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
            quality: 0.25,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const uploadImageAsync = async (uri) => {
        // const ref = firebase.storage().ref().child(uuid.v4());

        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase
            .storage()
            .ref()
            .child("avatar/" + user.id);
        const snapshot = await ref.put(blob);
        const remoteUri = await snapshot.ref.getDownloadURL();
        // when we're done sending it, close and release the blob
        blob.close();

        // return the result, eg. remote URI to the image
        return remoteUri;
    };
    const uploadImage = async () => {
        try {
            setLoading(true);
            const res = await uploadImageAsync(image);
            console.log(avatar != res ? "true" : "false");
            setAvatar(res);
            setLoading(false);
            setVisible(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setVisible(false);
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
                            onPress={() => {
                                setLoading(false);
                                uploadImage();
                                setVisible(false);
                            }}
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
                        <Avatar src={avatar}></Avatar>
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
