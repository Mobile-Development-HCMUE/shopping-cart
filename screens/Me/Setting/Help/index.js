import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import List from "components/ListOptions/index";
import cauhoi from "./data.js";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const HelpScreen = () => {
    const topProfileColor = useSelector(
        (state) => state.theme.theme.TOP_PROFILE
    );
    const bottomProfileColor = useSelector(
        (state) => state.theme.theme.BOTTOM_PROFILE
    );
    return (
        <ScrollView>
            <LinearGradient
                style={{ height: "100%" }}
                colors={[topProfileColor, bottomProfileColor]}
            >
                <Card containerStyle={styles.card}>
                    <Card.Title>Câu hỏi thường gặp</Card.Title>
                    <View>
                        <List listData={cauhoi}></List>
                    </View>
                </Card>
            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        marginBottom: 14,
        elevation: 5,
    },
});

export default HelpScreen;
