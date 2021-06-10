import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Avatar from "../Avatar";
const CustomSidebarMenu = (props) => {
    const drawerColor = useSelector((state) => state.theme.theme.DRAWER);
    const drawerProfileColor = useSelector(
        (state) => state.theme.theme.DRAWER_PROFILE
    );
    const tabActiveColor = useSelector((state) => state.theme.theme.TAB_ACTIVE);
    const textDrawerOption = useSelector(
        (state) => state.theme.theme.TEXT_DRAWER_OPTION
    );
    const avatar = useSelector((state) => state.user.avatar);
    const name = useSelector((state) => state.user.name);
    return (
        <View
            style={[
                stylesSidebar.sideMenuContainer,
                { backgroundColor: drawerColor },
            ]}
        >
            <View
                style={[
                    stylesSidebar.profileHeader,
                    { backgroundColor: drawerProfileColor },
                ]}
            >
                <Avatar src={avatar} />
                <Text style={stylesSidebar.profileHeaderText}>{name}</Text>
            </View>
            <View style={stylesSidebar.profileHeaderLine} />

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={({ color }) => (
                        <Text style={{ color: textDrawerOption }}>
                            Đăng xuất
                        </Text>
                    )}
                    onPress={() => {
                        props.navigation.toggleDrawer();
                        Alert.alert(
                            "Đăng xuất?",
                            "Bạn chắc chắn? Bạn vẫn muốn đăng xuất khi còn nhiều món hàng rẻ đẹp?",
                            [
                                {
                                    text: "Trở lại mua tiếp",
                                    onPress: () => {
                                        return null;
                                    },
                                },
                                {
                                    text: "Đồng ý",
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
        backgroundColor: "#000",
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
