import React from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
interface HeaderProps {
    left: {
        name: string,
        type: string,
        onPress: () => void,
    };
    title: string;
    right: {
        name: string,
        type: string,
        onPress: () => void,
    };
}

const Header = ({ title, left, right }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const headerTitleColor = useSelector(
        (state) => state.theme.theme.HEADER_TITLE
    );
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
                color={headerTitleColor}
                onPress={left.onPress}
            />
            <Text
                style={{
                    fontSize: 12,
                    lineHeight: 24,
                    fontWeight: "bold",
                    color: headerTitleColor,
                }}
            >
                {title.toUpperCase()}
            </Text>
            <Icon
                name={right.name}
                type={right.type}
                color={headerTitleColor}
                onPress={right.onPress}
            />
        </View>
    );
};

export default Header;
