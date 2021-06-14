import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
interface SwipableRowProps {
    children: React.ReactNode;
    onDelete: () => void;
}

const { width } = Dimensions.get("window");
const snapPoints = [-85 * 1, 0, width];
const finalDestination = width;
const SwipeRow = ({ children, onDelete }: SwipableRowProps) => {
    const translateX = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.x = translateX.value;
        },
        onActive: ({ translationX }, ctx) => {
            translateX.value = ctx.x + translationX;
        },
        onEnd: ({ velocityX }) => {
            const dest = snapPoint(translateX.value, velocityX, snapPoints);
            translateX.value = withSpring(
                dest,
                {
                    overshootClamping: true,
                },
                () => {
                    console.log(dest, finalDestination);
                    if (dest === finalDestination) {
                        // onDelete();
                        console.log("delete item");
                    }
                }
            );
        },
    });
    const style = useAnimatedStyle(() => ({
        backgroundColor: "#fff",
        transform: [{ translateX: translateX.value }],
    }));
    return (
        <View>
            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: "red",
                }}
            />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[styles.styleViewSale, style]}>
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    styleViewSale: {
        backgroundColor: "#fff",
        height: 140,
        flex: 1,
        flexDirection: "row",
    },
});

export default SwipeRow;
