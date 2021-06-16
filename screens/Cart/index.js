import React from "react";
import { View, ScrollView, Dimensions, StyleSheet, Text } from "react-native";
import Header from "components/Header";
import CartContainer from "./CartContainer";
import { useSelector } from "react-redux";
import { Path, Svg } from "react-native-svg";
import Items from "./Item";

const { width } = Dimensions.get("window");

const aspectRatio = width / 375;
const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";
const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
];

const Cart = ({ navigation }) => {
    const backgroundColor = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const numberStock = useSelector((state) => state.cart.stock);
    const titleColor = useSelector((state) => state.theme.theme.HEADER_TITLE);
    const [dataSource, setDataSource] = React.useState(data);
    return (
        <CartContainer>
            <View style={{ backgroundColor: backgroundColor }}>
                <Header
                    left={{
                        name: "arrow-back-circle-outline",
                        type: "ionicon",
                        onPress: () => {
                            navigation.goBack();
                        },
                        size: 44,
                    }}
                    right={{
                        name: "share-outline",
                        type: "ionicon",
                        onPress: () => {
                            console.log("share");
                        },
                        size: 44,
                    }}
                    title="Giỏ hàng"
                    background={true}
                />
            </View>
            <View
                style={{
                    width: width,
                    height: height,
                }}
            >
                <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
                    <Path d={d} fill={backgroundColor} />
                </Svg>
                <Text
                    style={{
                        fontSize: 18,
                        lineHeight: 30,
                        color: titleColor,
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Thêm vào {numberStock} sản phẩm
                </Text>
            </View>
            <ScrollView
                style={{
                    borderBottomLeftRadius: 75,
                    borderBottomRightRadius: 75,
                }}
                showsHorizontalScrollIndicator={false}
            >
                {dataSource.map((u, i) => (
                    <Items
                        key={i}
                        item={u}
                        onDelete={() => {
                            var array = [...dataSource]; // make a separate copy of the array
                            var index = array.indexOf(item);
                            if (index !== -1) {
                                array.splice(index, 1);
                                setDataSource(array);
                            }
                        }}
                    />
                ))}
            </ScrollView>
        </CartContainer>
    );
};

export default Cart;
