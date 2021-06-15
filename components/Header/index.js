import React from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
    left: {
        name: string,
        type: string,
        color: string,
        onPress: () => void,
    };
    title: string;
    right: {
        name: string,
        type: string,
        color: string,
        onPress: () => void,
    };
}

const Header = ({ title, left, right }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flexDirection: "row",
                marginTop: insets.top,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
            }}
        >
            <Icon
                name={left.name}
                type={left.type}
                color={left.color}
                onPress={left.onPress}
            />
            <Text style={{ fontSize: 12, lineHeight: 24, fontWeight: "bold" }}>
                {title.toUpperCase()}
            </Text>
            <Icon
                name={right.name}
                type={right.type}
                color={right.color}
                onPress={right.onPress}
            />
        </View>
    );
};

export default Header;
