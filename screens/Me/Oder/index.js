import React, { useState } from "react";
import {
    StyleSheet,
    ScrollView,
    useWindowDimensions,
    Dimensions,
} from "react-native";
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Layout,
    Text,
    Button,
} from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Home/index";
import { View } from "react-native";
import data from "./NoneOrder/data";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const Stack = createStackNavigator();

const OneTab = () => {
    return (
        <Layout style={styles.tabContainer} level="1">
            <Text category="h6">Chưa có đơn hàng</Text>
            <Button />
        </Layout>
    );
};

const renderScene = SceneMap({
    one: OneTab,
    two: OneTab,
    three: OneTab,
    four: OneTab,
    five: OneTab,
});

const OrderScreen = () => {
    const navigation = useNavigation();
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const backgroundTab = useSelector((state) => state.theme.theme.TAB);
    const [index, setIndex] = React.useState(0);
    const layout = { width: Dimensions.get("window").width };
    const [routes] = React.useState(data);
    return (
        <TabView
            // tabBarStyle={{ height: 50 }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            initialLayout={layout}
            renderScene={renderScene}
            renderTabBar={(props) => (
                <ScrollView
                    horizontal={true}
                    style={{ flexGrow: 0 }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                >
                    <TabBar
                        {...props}
                        style={{ backgroundColor: "#fff" }}
                        indicatorStyle={{ backgroundColor: backgroundTab }}
                        renderLabel={({ route, focused, color }) => (
                            <Text style={{ color: backgroundTab, margin: 8 }}>
                                {route.title}
                            </Text>
                        )}
                        activeColor={backgroundTab}
                    />
                </ScrollView>
            )}
        />
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default OrderScreen;
