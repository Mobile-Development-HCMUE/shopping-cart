import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CustomSidebarMenu = (props) => {
    // const backgroundColor = useSelector((state) => state.theme.theme.theme.TAB);
    // const tabActiveColor = useSelector((state) => state.theme.theme.theme.TAB_ACTIVE);
    return (
        <View style={stylesSidebar.sideMenuContainer}>
            <View style={stylesSidebar.profileHeader}>
                <View style={stylesSidebar.profileHeaderPicCircle}>
                    <Text style={{ fontSize: 25, color: "#307e" }}>
                        {"About React".charAt(0)}
                    </Text>
                </View>
                <Text style={stylesSidebar.profileHeaderText}>AboutReact</Text>
            </View>
            <View style={stylesSidebar.profileHeaderLine} />

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={({ color }) => (
                        <Text style={{ color: "#d8d8d8" }}>Logout</Text>
                    )}
                    onPress={() => {
                        props.navigation.toggleDrawer();
                        Alert.alert(
                            "Logout",
                            "Are you sure? You want to logout?",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => {
                                        return null;
                                    },
                                },
                                {
                                    text: "Confirm",
                                    onPress: () => {
                                        AsyncStorage.clear();
                                        props.navigation.replace("Auth");
                                    },
                                },
                            ],
                            { cancelable: false }
                        );
                    }}
                />
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#307e",
        paddingTop: 40,
        color: "white",
    },
    profileHeader: {
        flexDirection: "row",
        backgroundColor: "#307e",
        padding: 15,
        textAlign: "center",
    },
    profileHeaderPicCircle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        color: "white",
        backgroundColor: "#ffffff",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    profileHeaderText: {
        color: "white",
        alignSelf: "center",
        paddingHorizontal: 10,
        fontWeight: "bold",
    },
    profileHeaderLine: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor: "#e2e2e2",
        marginTop: 15,
    },
});
