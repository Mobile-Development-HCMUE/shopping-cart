// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const RightButton = () => {
    const navigation = useNavigation();
    const headercolor = useSelector((state) => state.theme.theme.HEADER_TITLE);
    const stock = useSelector((state) => state.cart.stock);
    return (
        <View style={styles.rightbutton}>
            <Icon
                name="settings"
                type="ionicon"
                size={24}
                color={headercolor}
                containerStyle={{ margin: 10 }}
                onPress={() => {
                    navigation.navigate("Setting");
                }}
            ></Icon>
            <View style={{ margin: 10 }}>
                <Icon
                    name="cart"
                    type="ionicon"
                    size={24}
                    color={headercolor}
                    onPress={() => {
                        navigation.navigate("Cart");
                    }}
                ></Icon>
                <Badge
                    status="success"
                    value={stock}
                    containerStyle={styles.Badge}
                />
            </View>
        </View>
    );
};
export default RightButton;

const styles = StyleSheet.create({
    rightbutton: {
        flexDirection: "row",
        marginRight: 15,
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
