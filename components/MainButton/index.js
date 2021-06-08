import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const MainButton = ({ styleContainer, styleButton, title, onPress }) => {
    const leftColor = useSelector((state) => state.theme.theme.HEADER_LEFT);
    const rightColor = useSelector((state) => state.theme.theme.HEADER_RIGHT);
    return (
        <Button
            containerStyle={[
                {
                    // justifyContent: "flex-end",
                    // marginBottom: 10,
                    // marginLeft: 80,
                    // marginRight: 80,
                    borderRadius: 20,
                    minHeight: 40,
                },
                styleContainer,
            ]}
            buttonStyle={[
                {
                    // backgroundColor: buttonLogoutColor,
                    minHeight: 40,
                    borderRadius: 20,
                },
                styleButton,
            ]}
            title={title}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: [leftColor, rightColor],
                style: { flex: 1 },
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
            }}
            onPress={onPress}
        />
    );
};

export default MainButton;
