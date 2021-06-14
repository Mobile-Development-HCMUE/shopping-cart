import React from "react";
import { Dimensions } from "react-native";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const { height, width } = Dimensions.get("screen");

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox="0 15 200 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#dddddd"
    {...props}
  >
    <Rect x="5" y="2" rx="0" ry="0" width="190" height="24" />
    <Circle cx="35" cy="58" r="18" />
    <Circle cx="95" cy="57" r="18" />
    <Circle cx="151" cy="57" r="18" />
    <Rect x="13" y="104" rx="0" ry="0" width="85" height="129" />
    <Rect x="106" y="103" rx="0" ry="0" width="85" height="130" />
    <Rect x="13" y="240" rx="0" ry="0" width="85" height="114" />
    <Rect x="105" y="240" rx="0" ry="0" width="85" height="113" />
    <Rect x="174" y="322" rx="0" ry="0" width="15" height="0" />
  </ContentLoader>
);

export default MyLoader;
