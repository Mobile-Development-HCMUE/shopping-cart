import React from "react";
import {
    StyleSheet,
    Dimensions,
    FlatList,
    View,
    Animated,
    ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Text } from "@ui-kitten/components";

const { height, width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SiZE = DOT_SIZE + DOT_SPACING;

const DetailScreeen = ({ route, navigation }) => {
    const data = route.params.data;
    // console.log(data);
    const scrollY = React.useRef(new Animated.Value(0)).current;
    function currencyFormat(num) {
        return "₫" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
                <Animated.FlatList
                    data={data.images}
                    keyExtractor={(item, index) => item.image}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.key}>
                                <Image
                                    source={{
                                        uri:
                                            "https://cf.shopee.vn/file/" + item,
                                    }}
                                    containerStyle={styles.image}
                                    transition
                                    // PlaceholderContent={<ActivityIndicator />}
                                />
                            </View>
                        );
                    }}
                />
                <View style={styles.pagination}>
                    {data.images.map((u, i) => {
                        return <View key={i} style={[styles.dot]} />;
                    })}
                    <Animated.View
                        style={[
                            styles.dotIndicator,
                            {
                                transform: [
                                    {
                                        translateY: Animated.divide(
                                            scrollY,
                                            ITEM_HEIGHT
                                        ).interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [
                                                0,
                                                DOT_INDICATOR_SiZE,
                                            ],
                                        }),
                                    },
                                ],
                            },
                        ]}
                    />
                </View>
            </View>
            <BottomSheet
                style={{
                    elevation: 100,
                }}
                initialSnapIndex={0}
                snapPoints={[height - ITEM_HEIGHT, height]}
            >
                <BottomSheetScrollView
                    style={{ backgroundColor: "#fff" }}
                    contentContainerStyle={{ padding: 20 }}
                >
                    <Text>{data.name}</Text>
                    <Text style={{ color: "red" }}>
                        {currencyFormat(data.price / 100000)}
                    </Text>
                    <View style={{ marginVertical: 20 }}>
                        <Text
                            style={{
                                marginBottom: 10,
                                lineHeight: 22,
                                color: "#000",
                            }}
                        >
                            {data.description}
                        </Text>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    image: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
    pagination: {
        position: "absolute",
        top: ITEM_WIDTH / 2,
        left: 20,
    },

    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        backgroundColor: "#333",
        marginBottom: DOT_SPACING,
    },
    dotIndicator: {
        width: DOT_INDICATOR_SiZE,
        height: DOT_INDICATOR_SiZE,
        borderRadius: DOT_INDICATOR_SiZE,
        borderWidth: 1,
        borderColor: "#333",
        position: "absolute",
        top: -DOT_SIZE / 2,
        left: -DOT_SIZE / 2,
    },
});

export default DetailScreeen;
