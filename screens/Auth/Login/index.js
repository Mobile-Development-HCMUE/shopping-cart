import React, { useState, createRef } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Icon } from "@ui-kitten/components";
import { Text } from "react-native-elements";
import Button from "components/MainButton";
import Loader from "../../Loader";

const useInputState = (initialValue = "") => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const LoginScreen = ({ navigation }) => {
    const userEmail = useInputState();
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState("");
    const passwordInputRef = createRef();

    const [userPassword, setUserPassword] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
        </TouchableWithoutFeedback>
    );

    const handleSubmitPress = () => {
        setErrortext("");
        if (!userEmail.value) {
            alert("Vui lòng nhập Email");
            return;
        }
        if (!userPassword) {
            alert("Vui lòng nhập mật khẩu");
            return;
        }
        setLoading(true);
        let dataToSend = { email: userEmail.value, password: userPassword };
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(
            "https://60bbaca242e1d00017620f70.mockapi.io/user?" +
                new URLSearchParams({
                    email: userEmail.value,
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
                //Hide Loader
                setLoading(false);
                // If server response message same as Data Matched
                // console.log(data[0]);
                if (statusCode === 200 && typeof data[0] != "undefined") {
                    if (data[0].password == userPassword) {
                        AsyncStorage.setItem("user_id", data[0].email);
                        navigation.replace("DrawerNavigationRoutes");
                    }
                } else {
                    setErrortext("Vui lòng kiểm tra lại tài khoản mật khẩu!");
                    console.log("Please check your email id or password");
                }
            })
            .catch((error) => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
    };

    return (
        <View style={styles.mainBody}>
            <Loader loading={loading} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <View>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={require("assets/aboutreact.png")}
                            style={{
                                width: "50%",
                                height: 200,
                                resizeMode: "contain",
                            }}
                        />
                    </View>
                    <KeyboardAvoidingView
                        enabled
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <View style={styles.SectionStyle}>
                            <Input
                                style={styles.inputStyle}
                                status="primary"
                                placeholder="Nhập Email"
                                {...userEmail}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <Input
                                style={styles.inputStyle}
                                status="primary"
                                placeholder="Nhập mật khẩu" //12345
                                //caption={renderCaption}
                                accessoryRight={renderIcon}
                                secureTextEntry={secureTextEntry}
                                onChangeText={(nextValue) =>
                                    setUserPassword(nextValue)
                                }
                            />
                        </View>
                        {errortext != "" ? (
                            <Text style={styles.errorTextStyle}>
                                {errortext}
                            </Text>
                        ) : null}
                        <Button
                            styleContainer={styles.styleContainer}
                            styleButton={styles.styleButton}
                            title="ĐĂNG NHẬP"
                            onPress={handleSubmitPress}
                        />
                        <Text
                            style={styles.registerTextStyle}
                            onPress={() => {
                                console.log("Click register");
                                navigation.navigate("RegisterScreen");
                            }}
                            keyboardShouldPersistTaps="handled"
                        >
                            Chưa có tài khoản? Đăng ký
                        </Text>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignContent: "center",
    },
    SectionStyle: {
        flexDirection: "row",
        height: 30,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    styleContainer: {
        borderRadius: 20,
        minHeight: 40,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
        height: 40,
    },
    styleButton: {},
    buttonTextStyle: {
        color: "#000",
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        margin: 2,
    },
    registerTextStyle: {
        color: "#000",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        alignSelf: "center",
        padding: 10,
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
});
