import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-elements";
import {
    Text,
    Card,
    Layout,
    Input,
    Icon,
    Button as button,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const PassScreen = () => {
    const [value, setValue] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
        </TouchableWithoutFeedback>
    );
    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>
                    Vui lòng nhập ít nhất 6 kí tự
                </Text>
            </View>
        );
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <Card
                    style={
                        (styles.card,
                        {
                            borderRadius: 20,
                        })
                    }
                    status="primary"
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontWeight: "bold" }}>Mật khẩu</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            alignContent: "center",
                        }}
                    >
                        <Input
                            style={{
                                marginBottom: 10,
                                marginTop: 10,
                                width: "63%",
                                borderRadius: 20,
                            }}
                            value={value}
                            label="Mật khẩu"
                            placeholder="Nhập mật khẩu"
                            caption={renderCaption}
                            accessoryRight={renderIcon}
                            secureTextEntry={secureTextEntry}
                            onChangeText={(nextValue) => setValue(nextValue)}
                        />
                        <Button
                            containerStyle={styles.container1}
                            buttonStyle={styles.Style}
                            title="Lưu"
                        />
                    </View>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
    },
    container1: {
        borderRadius: 15,
        width: "35%",
        //height: "100%",
        marginTop: 10,
        marginBottom: 10,
    },
    Style: {
        backgroundColor: "#7579e7",
        borderRadius: 15,
        height: 30,
        width: 100,
    },
    captionContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#8F9BB3",
    },
});

export default PassScreen;
