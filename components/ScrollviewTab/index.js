import React, { useState } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Text } from "@ui-kitten/components";

const ScrollviewTab = ({ index, setIndex, routes, renderScene }) => {
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const backgroundTab = useSelector((state) => state.theme.theme.TAB);
    const layout = { width: Dimensions.get("window").width };
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

export default ScrollviewTab;
