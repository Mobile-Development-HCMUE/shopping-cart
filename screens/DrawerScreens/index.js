import React from "react";
import { Icon, Text } from "react-native-elements";
import { StatusBar } from "react-native";
// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
// Import Screens
import SettingsScreen from "../Me/Setting";
import CustomSidebarMenu from "components/CustomSidebarMenu";
import NavigationDrawerHeader from "components/NavigationDrawerHeader";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import SettingScreen from "../Me/Setting";
import ThemeScreen from "../Me/Theme";
import RightButton from "components/RightButton";
import ProfileScreen from "../Me/Setting/Profile";
import AddressScreen from "../Me/Setting/Address";
import HelpScreen from "../Me/Setting/Help";
import StNotifyScreen from "../Me/Setting/Setting-Notify";
import PrivacyScreen from "../Me/Setting/Privacy";
import LanguageScreen from "../Me/Setting/Language";
import IntroduceScreen from "../Me/Setting/Introduce";
import HomeScreen from "../Home";
import NotifyScreen from "../Notify";
import MeScreen from "../Me";
import OrderScreen from "../Me/Oder/index";
import LikedScreen from "../Me/Liked";
import MoneyScreen from "../Me/Money";
import ReViewScreen from "../Me/Product-Reviews";
import RepurchaseScreen from "../Me/Repurchase";
import ServiceScreen from "../Me/Service";
import TenScreen from "../Me/Setting/Profile/Ten";
import PassScreen from "../Me/Setting/Profile/MatKhau";
import PhoneScreen from "../Me/Setting/Profile/NumberPhone";
import EmailScreen from "../Me/Setting/Profile/Email";
import DateScreen from "../Me/Setting/Profile/Date";
import GioiTinhScreen from "../Me/Setting/Profile/GioiTinh";
import CardScreen from "../Me/Service/Card";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { UserContext } from "contexts";
import DetailScreeen from "../Home/DetailProduct";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const getHeaderTitle = (route, navigation) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    switch (routeName) {
        case "Home":
            return "Trang chủ";
        case "Notify":
            return "Thông báo";
        case "Me":
            return "Tôi";
    }
};

const Tab = createMaterialBottomTabNavigator();
const HomeTab = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
        navigation.setOptions({
            headerRight: (props) => {
                switch (routeName) {
                    case "Me":
                        return <RightButton />;
                    default:
                        return;
                }
            },
        });
    }, [navigation, route]);
    const userId = route.params;
    // console.log(userId);
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    const tabActiveColor = useSelector((state) => state.theme.theme.TAB_ACTIVE);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: tabActiveColor,
            }}
            barStyle={{ backgroundColor: backgroundColor }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Trang chủ",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            type="ionicon"
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Notify"
                component={NotifyScreen}
                options={{
                    title: "Thông báo",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="notifications"
                            type="ionicon"
                            color={color}
                            size={24}
                        />
                    ),
                    tabBarBadge: 0,
                }}
            />
            <Tab.Screen
                name="Me"
                component={MeScreen}
                options={{
                    title: "Tôi",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="person"
                            type="ionicon"
                            color={color}
                            size={24}
                        />
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};

const homeScreenStack = ({ navigation, route }) => {
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    const headerTitleColor = useSelector(
        (state) => state.theme.theme.HEADER_TITLE
    );
    const leftHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const backButtonColor = useSelector(
        (state) => state.theme.theme.BACK_BUTTON
    );
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackground: () => (
                    <LinearGradient
                        colors={[leftHeaderColor, rightHeaderColor]}
                        style={{ flex: 1 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                ),
                headerTitleStyle: { color: headerTitleColor },
                headerBackImage: ({ size }) => (
                    <Icon
                        name="arrow-back-circle-outline"
                        type="ionicon"
                        size={size}
                        color={backButtonColor}
                    />
                ),
            }}
        >
            <Stack.Screen
                name="HomeTab"
                component={HomeTab}
                options={({ route, navigation }) => ({
                    headerTitle: getHeaderTitle(route, navigation),
                    title: "Home",
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                })}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreeen}
                options={{
                    title: "Chi tiết",
                }}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    title: "Cài đặt",
                }}
            />
            <Stack.Screen
                name="Theme"
                component={ThemeScreen}
                options={{
                    title: "Chủ đề",
                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Hồ sơ của tôi",
                }}
            />
            <Stack.Screen
                name="Address"
                component={AddressScreen}
                options={{
                    title: "Địa chỉ",
                }}
            />
            <Stack.Screen
                name="Setting-Notify"
                component={StNotifyScreen}
                options={{
                    title: "Cài đặt thông báo",
                }}
            />
            <Stack.Screen
                name="Privacy"
                component={PrivacyScreen}
                options={{
                    title: "Cài đặt quyền riêng tư",
                }}
            />
            <Stack.Screen
                name="Language"
                component={LanguageScreen}
                options={{
                    title: "Ngôn ngữ",
                }}
            />
            <Stack.Screen
                name="Help"
                component={HelpScreen}
                options={{
                    title: "Trung tâm hỗ trợ",
                }}
            />
            <Stack.Screen
                name="Introduce"
                component={IntroduceScreen}
                options={{
                    title: "Giới thiệu",
                }}
            />
            <Stack.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    title: "Đơn mua",
                }}
            />
            <Stack.Screen
                name="Liked"
                component={LikedScreen}
                options={{
                    title: "Đã thích",
                }}
            />
            <Stack.Screen
                name="Money"
                component={MoneyScreen}
                options={{
                    title: "Ví",
                }}
            />
            <Stack.Screen
                name="Product-Reviews"
                component={ReViewScreen}
                options={{
                    title: "Đánh giá của tôi",
                }}
            />
            <Stack.Screen
                name="Repurchase"
                component={RepurchaseScreen}
                options={{
                    title: "Mua lại",
                }}
            />
            <Stack.Screen
                name="Service"
                component={ServiceScreen}
                options={{
                    title: "Đơn thẻ và dịch vụ",
                }}
            />
            <Stack.Screen
                name="TenScreen"
                component={TenScreen}
                options={{
                    title: "Tên", //Set Header Title
                }}
            />
            <Stack.Screen
                name="PassScreen"
                component={PassScreen}
                options={{
                    title: "Mật khẩu", //Set Header Title
                }}
            />
            <Stack.Screen
                name="PhoneScreen"
                component={PhoneScreen}
                options={{
                    title: "Số điện thoại", //Set Header Title
                }}
            />
            <Stack.Screen
                name="EmailScreen"
                component={EmailScreen}
                options={{
                    title: "Email", //Set Header Title
                }}
            />
            <Stack.Screen
                name="DateScreen"
                component={DateScreen}
                options={{
                    title: "Ngày sinh", //Set Header Title
                }}
            />
            <Stack.Screen
                name="GioiTinhScreen"
                component={GioiTinhScreen}
                options={{
                    title: "Giới tính", //Set Header Title
                }}
            />
            <Stack.Screen
                name="card"
                component={CardScreen}
                options={{
                    title: "Nạp thẻ",
                }}
            />
        </Stack.Navigator>
    );
};

const settingScreenStack = ({ navigation }) => {
    const headerTitleColor = useSelector(
        (state) => state.theme.theme.HEADER_TITLE
    );
    const leftHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightHeaderColor = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    return (
        <Stack.Navigator
            initialRouteName="SettingsScreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerBackground: () => (
                    <LinearGradient
                        colors={[leftHeaderColor, rightHeaderColor]}
                        style={{ flex: 1 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                ),
                headerTitleStyle: {
                    fontWeight: "bold", //Set Header text style
                    color: headerTitleColor,
                },
            }}
        >
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: "Cài đặt", //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};

const DrawerNavigatorRoutes = (props) => {
    const textDrawerOption = useSelector(
        (state) => state.theme.theme.TEXT_DRAWER_OPTION
    );
    return (
        <UserContext.Provider value={props.route.params}>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: "#cee1f2",
                    color: "#cee1f2",
                    itemStyle: { marginVertical: 5, color: "white" },
                    labelStyle: {
                        color: textDrawerOption,
                    },
                }}
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen
                    name="homeScreenStack"
                    options={{ drawerLabel: "Màn hình chính" }}
                    component={homeScreenStack}
                />
                <Drawer.Screen
                    name="settingScreenStack"
                    options={{ drawerLabel: "Cài đặt" }}
                    component={settingScreenStack}
                />
            </Drawer.Navigator>
        </UserContext.Provider>
    );
};

export default DrawerNavigatorRoutes;
