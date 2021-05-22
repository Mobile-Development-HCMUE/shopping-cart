// In App.js in a new project

import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const AvatarCustom = ({ src }) => {
    return (
        <Avatar
            rounded
            size="large"
            title="LW"
            source={{
                uri: src,
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={styles.Avatar}
        />
    );
};
export default AvatarCustom;

const styles = StyleSheet.create({
    Avatar: {
        marginTop: -30,
        elevation: 9,
    },
});
