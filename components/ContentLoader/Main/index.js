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
        <Circle cx="28" cy="76" r="20" />
        <Circle cx="87" cy="77" r="20" />
        <Rect x="74" y="140" rx="0" ry="0" width="0" height="2" />
        <Rect x="17" y="44" rx="0" ry="0" width="0" height="1" />
        <Rect x="43" y="148" rx="0" ry="0" width="0" height="2" />
        <Rect x="5" y="125" rx="0" ry="0" width="185" height="148" />
        <Rect x="247" y="524" rx="0" ry="0" width="0" height="1" />
        <Rect x="167" y="403" rx="0" ry="0" width="0" height="77" />
        <Rect x="-3" y="5" rx="0" ry="0" width="472" height="31" />
        <Rect x="393" y="227" rx="0" ry="0" width="43" height="2" />
        <Rect x="202" y="124" rx="0" ry="0" width="185" height="148" />
        <Circle cx="149" cy="76" r="20" />
        <Circle cx="209" cy="77" r="20" />
        <Circle cx="269" cy="77" r="20" />
        <Circle cx="328" cy="76" r="20" />
        <Rect x="7" y="288" rx="0" ry="0" width="185" height="148" />
        <Rect x="204" y="288" rx="0" ry="0" width="185" height="148" />
        <Rect x="7" y="450" rx="0" ry="0" width="185" height="148" />
        <Rect x="205" y="450" rx="0" ry="0" width="185" height="148" />
    </ContentLoader>
);

export default MyLoader;
