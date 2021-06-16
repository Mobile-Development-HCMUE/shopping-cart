import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image } from "react-native-elements";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import BottomSheet from "@gorhom/bottom-sheet";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import SwipeRow from "../../../components/SwipeRow";
import { snapPoint, clamp } from "react-native-redash";
const CartScreen = () => {
    return <View />;
};
const data = ["Nhà", "Trường học", "Nơi làm việc", "Khác"];

const { width } = Dimensions.get("window");

const aspectRatio = width / 375;
const height = 685 * aspectRatio;

const minHeight = 150 * aspectRatio;
// const ITEM_WIDTH = width;
// const ITEM_HEIGHT = height * 0.9;

interface CartContainerProps {
    children: React.ReactNode;
}

const CartContainer = ({ navigation, children }: CartContainerProps) => {
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const [dataSource, setDataSource] = React.useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ]);
    const snapPoints = [-(height - minHeight), 0];
    console.log(snapPoints);
    const translateY = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            ctx.y = translateY.value;
        },
        onActive: ({ translationY }, ctx) => {
            translateY.value = clamp(
                ctx.y + translationY,
                snapPoints[0],
                snapPoints[1]
            );
        },
        onEnd: ({ velocityY }) => {
            const dest = snapPoint(translateY.value, velocityY, snapPoints);
            translateY.value = withSpring(dest);
        },
    });
    const style = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    return (
        <View style={{ flex: 1, backgroundColor: "#110F2E" }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        {
                            ...StyleSheet.absoluteFillObject,
                            backgroundColor: "#fff",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height,
                            borderBottomLeftRadius: 75,
                            borderBottomRightRadius: 75,
                        },
                        style,
                    ]}
                >
                    {children}
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 75,
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                height: 5,
                                backgroundColor: "#929aab",
                                width: 60 * aspectRatio,
                                borderRadius: 2.5 * aspectRatio,
                                marginBottom: 5,
                            }}
                        ></View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    ButtonContainerStyles: {
        flex: 1,
        justifyContent: "flex-start",
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 20,
        minHeight: 40,
    },
    ButtonStyles: {
        minHeight: 40,
        borderRadius: 20,
    },
    row: {
        flex: 1,
        justifyContent: "space-around",
    },
});

export default CartContainer;

{
    /* <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    height: ITEM_HEIGHT,
                    overflow: "hidden",
                    backgroundColor: "#fff",
                }}
            >
                <View style={styles.incard}>
                    <LinearGradient
                        colors={[leftBackgroundButton, rightBackgroundButton]}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                flex: 1,
                                width: "100%",
                                alignContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "The-Wild-Thing",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    fontSize: 30,
                                    fontStyle: "italic",
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                Giỏ hàng
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <FlatList
                    data={dataSource}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={1}
                    renderItem={({ item }) => {
                        return (
                            <RenderItem
                                item={item}
                                key={item.id}
                                onDelete={() => {
                                    var array = [...dataSource]; // make a separate copy of the array
                                    var index = array.indexOf(item);
                                    if (index !== -1) {
                                        array.splice(index, 1);
                                        setDataSource(array);
                                    }
                                }}
                            />
                        );
                    }}
                />
            </View>
            <BottomSheet
                style={{
                    elevation: 100,
                }}
                initialSnapIndex={0}
                snapPoints={[height - ITEM_HEIGHT, height]}
            >
                {/* <BottomSheetScrollView
                    style={{ backgroundColor: "#fff" }}
                    contentContainerStyle={{ padding: 20 }}
        //         ></BottomSheetScrollView> */
}
//     </BottomSheet>
// </SafeAreaView> */}
