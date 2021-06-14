import React from "react";
import { Dimensions } from "react-native";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const { height, width } = Dimensions.get("screen");

const MyLoader = (props) => (
    <ContentLoader
        speed={1}
        width={width}
        height={height}
        interval={0.1}
        viewBox="0 0 400 750"
        backgroundColor="#fff"
        foregroundColor="#ecebeb"
        {...props}
    >
        <Rect x="5" y="10" rx="0" ry="0" width="390" height="50" />
        <Circle cx="50" cy="115" r="30" />
        <Circle cx="150" cy="115" r="30" />
        <Circle cx="250" cy="115" r="30" />
        <Circle cx="350" cy="115" r="30" />
        <Rect x="5" y="190" rx="0" ry="0" width="190" height="250" />
        <Rect x="210" y="190" rx="0" ry="0" width="190" height="250" />
        <Rect x="5" y="450" rx="0" ry="0" width="190" height="250" />
        <Rect x="210" y="450" rx="0" ry="0" width="190" height="250" />
        <Rect x="5" y="160" rx="0" ry="0" width="390" height="20" />
    </ContentLoader>
);

export default MyLoader;
