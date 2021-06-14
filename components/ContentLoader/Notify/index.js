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
    <Rect x="5" y="1" rx="0" ry="0" width="190" height="30" />
    <Rect x="174" y="322" rx="0" ry="0" width="15" height="0" />
    <Rect x="7" y="280" rx="0" ry="0" width="87" height="123" />
    <Rect x="7" y="86" rx="0" ry="0" width="51" height="9" />
    <Rect x="73" y="87" rx="0" ry="0" width="52" height="8" />
    <Rect x="138" y="87" rx="0" ry="0" width="53" height="8" />
    <Rect x="151" y="291" rx="0" ry="0" width="1" height="0" />
    <Rect x="7" y="118" rx="0" ry="0" width="87" height="153" />
    <Rect x="8" y="100" rx="0" ry="0" width="186" height="1" />
    <Rect x="5" y="38" rx="0" ry="0" width="189" height="1" />
    <Rect x="104" y="118" rx="0" ry="0" width="91" height="153" />
    <Rect x="103" y="282" rx="0" ry="0" width="91" height="124" />
    <Circle cx="34" cy="65" r="18" />
    <Circle cx="101" cy="65" r="18" />
    <Circle cx="165" cy="65" r="18" />
  </ContentLoader>
);

export default MyLoader;
