import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const MoneyScreen = () => {
    const topProfileColor = useSelector(
        (state) => state.theme.theme.TOP_PROFILE
    );
    const bottomProfileColor = useSelector(
        (state) => state.theme.theme.BOTTOM_PROFILE
    );
    return (
        <SafeAreaView>
            <LinearGradient
                style={{ height: "100%" }}
                colors={[topProfileColor, bottomProfileColor]}
            >
                <Card containerStyle={styles.card}>
                    <Card.Title></Card.Title>
                    <View style={styles.containerButton}></View>
                </Card>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
    },
});

export default MoneyScreen;
