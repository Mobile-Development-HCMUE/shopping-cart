// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RightButton = ({ color }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.rightbutton}>
            <Button
                icon={
                    <View>
                        <Icon
                            name="settings-outline"
                            type="ionicon"
                            size={24}
                        ></Icon>
                    </View>
                }
                buttonStyle={styles.styleButton}
                onPress={() => navigation.navigate("Setting")}
            />
            <Button
                icon={
                    <View>
                        <Icon
                            name="cart-outline"
                            type="ionicon"
                            size={24}
                        ></Icon>
                        <Badge
                            status="success"
                            value="0"
                            containerStyle={styles.Badge}
                        />
                    </View>
                }
                buttonStyle={styles.styleButton}
                onPress={() => navigation.navigate("Setting")}
            />
        </View>
    );
};
export default RightButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    rightbutton: {
        flexDirection: "row",
    },
    styleButton: {
        margin: 4,
        backgroundColor: "#fff",
    },
    Badge: {
        // backgroundColor: "#2E8364",
        position: "absolute",
        top: -8,
        right: -9,
    },
});
