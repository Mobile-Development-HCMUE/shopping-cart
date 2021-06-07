import React, { useState, createRef } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
} from "react-native";
import ButtonMain from "components/MainButton";
import { Text } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { Input, Icon, Button } from "@ui-kitten/components";

import Loader from "../../Loader";

const useInputState = (initialValue = "") => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const RegisterScreen = (props) => {
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    const userName = useInputState();
    const userEmail = useInputState();
    const [userPassword, setUserPassword] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState("");
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

    const [reUserPassword, setReUserPassword] = React.useState("");
    const [reSecureTextEntry, setReSecureTextEntry] = React.useState(true);

    const handleSubmitButton = () => {
        setErrortext("");
        if (!userName.value) {
            alert("Vui lòng điền tên");
            return;
        }
        if (!userEmail.value) {
            alert("Vui lòng đièn Email");
            return;
        }
        if (!userPassword) {
            alert("Vui lòng nhập mật khẩu");
            return;
        }
        if (!reUserPassword) {
            alert("Vui lòng nhập lại mật khẩu");
            return;
        }
        //Show Loader
        setLoading(true);
        var dataToSend = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword,
        };
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch("https://60bbaca242e1d00017620f70.mockapi.io/user", {
            method: "POST",
            body: formBody,
            headers: {
                //Header Defination
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        })
            .then((response) => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);
            })
            .then(([statusCode, data]) => {
                //Hide Loader
                setLoading(false);
                console.log(data);
                // If server response message same as Data Matched
                if (statusCode === 201) {
                    setIsRegistraionSuccess(true);
                    console.log("Đăng ký thành công! Vui lòng đăng nhập.");
                } else {
                    setErrortext(
                        "Đăng ký không thành công! Không biết lỗi tại sao"
                    );
                }
            })
            .catch((error) => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
    };
    if (isRegistraionSuccess) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <Image
                    source={require("assets/complete.png")}
                    style={{
                        height: 150,
                        resizeMode: "contain",
                        alignSelf: "center",
                    }}
                />
                <Text style={styles.successTextStyle}>
                    Registration Successful
                </Text>
                <Button
                    onPress={() => props.navigation.navigate("LoginScreen")}
                    style={styles.button}
                    appearance="outline"
                    status="danger"
                >
                    ĐĂNG NHẬP NGAY
                </Button>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Loader loading={loading} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
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
                            placeholder="Nhập tên"
                            {...userName}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Input
                            style={styles.inputStyle}
                            status="primary"
                            placeholder="Nhập email"
                            {...userEmail}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Input
                            style={styles.inputStyle}
                            status="primary"
                            placeholder="Nhập mật khẩu"
                            //caption={renderCaption}
                            accessoryRight={(props) => (
                                <TouchableWithoutFeedback
                                    onPress={() =>
                                        setSecureTextEntry(!secureTextEntry)
                                    }
                                >
                                    <Icon
                                        {...props}
                                        name={
                                            secureTextEntry ? "eye-off" : "eye"
                                        }
                                    />
                                </TouchableWithoutFeedback>
                            )}
                            secureTextEntry={secureTextEntry}
                            onChangeText={(nextValue) =>
                                setUserPassword(nextValue)
                            }
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Input
                            style={styles.inputStyle}
                            status="primary"
                            placeholder="Nhập lại mật khẩu"
                            accessoryRight={(props) => (
                                <TouchableWithoutFeedback
                                    onPress={() =>
                                        setReSecureTextEntry(!reSecureTextEntry)
                                    }
                                >
                                    <Icon
                                        {...props}
                                        name={
                                            reSecureTextEntry
                                                ? "eye-off"
                                                : "eye"
                                        }
                                    />
                                </TouchableWithoutFeedback>
                            )}
                            secureTextEntry={reSecureTextEntry}
                            onChangeText={(nextValue) =>
                                setReUserPassword(nextValue)
                            }
                        />
                    </View>
                    {errortext != "" ? (
                        <Text style={styles.errorTextStyle}>{errortext}</Text>
                    ) : null}
                    <ButtonMain
                        styleContainer={styles.styleContainer}
                        styleButton={styles.styleButton}
                        title="ĐĂNG KÍ"
                        onPress={handleSubmitButton}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
export default RegisterScreen;

const styles = StyleSheet.create({
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
        color: "#FFFFFF",
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        margin: 2,
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
    successTextStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        padding: 30,
    },
    button: {
        margin: 20,
    },
});
