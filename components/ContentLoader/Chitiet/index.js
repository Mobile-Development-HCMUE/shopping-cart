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
    <Rect x="5" y="2" rx="0" ry="0" width="190" height="231" />
    <Rect x="174" y="322" rx="0" ry="0" width="15" height="0" />
    <Rect x="83" y="241" rx="0" ry="0" width="32" height="4" />
    <Rect x="14" y="255" rx="0" ry="0" width="171" height="8" />
    <Rect x="15" y="271" rx="0" ry="0" width="55" height="8" />
    <Rect x="15" y="289" rx="0" ry="0" width="81" height="8" />
    <Rect x="151" y="291" rx="0" ry="0" width="1" height="0" />
    <Rect x="146" y="278" rx="0" ry="0" width="40" height="17" />
    <Rect x="16" y="304" rx="0" ry="0" width="168" height="1" />
    <Rect x="17" y="314" rx="0" ry="0" width="75" height="8" />
    <Rect x="16" y="331" rx="0" ry="0" width="93" height="8" />
    <Rect x="16" y="349" rx="0" ry="0" width="172" height="1" />
  </ContentLoader>
);

export default MyLoader;
