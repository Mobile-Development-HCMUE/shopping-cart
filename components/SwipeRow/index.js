import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring,
    Transition,
    Transitioning,
    TransitioningView,
    runOnJS,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@ui-kitten/components";
interface SwipableRowProps {
    children: React.ReactNode;
}

const { width } = Dimensions.get("window");
const ratio = 1;
const editWith = -85 * ratio;
const snapPoints = [editWith, 0, width];
const finalDestination = width;

const transition = <Transition.Out type="fade" />;

const SwipeRow = ({ children, onDelete }: SwipableRowProps) => {
    const ref = React.useRef(null);
    const deleteItem = React.useCallback(() => {
        ref.current?.animateNextTransition();
        onDelete();
    }, [onDelete]);
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
                    if (dest === finalDestination) {
                        runOnJS(deleteItem)();
                    }
                }
            );
        },
    });
    const style = useAnimatedStyle(() => ({
        backgroundColor: "#fff",
        transform: [{ translateX: translateX.value }],
    }));
    const deleteStyle = useAnimatedStyle(() => ({
        opacity: translateX.value > 0 ? 1 : 0,
    }));
    const editStyle = useAnimatedStyle(() => ({
        opacity: translateX.value < 0 ? 1 : 0,
    }));
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const topProfileColor = useSelector(
        (state) => state.theme.theme.TOP_PROFILE
    );
    return (
        <Transitioning.View ref={ref} transition={transition}>
            <Animated.View
                style={[
                    {
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: "red",
                    },
                    deleteStyle,
                ]}
            >
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    colors={["#FF3D71", "#fff"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                />
                <View
                    style={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: 75,
                        padding: 10,
                        flex: 1,
                    }}
                >
                    <Text status="control">Xóa</Text>
                </View>
            </Animated.View>

            <Animated.View
                style={[
                    {
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: "blue",
                    },
                    editStyle,
                ]}
            >
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    colors={[topProfileColor, "#fff"]}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 0.7, y: 0.5 }}
                />
                <View
                    style={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        alignSelf: "flex-end",
                        width: 75,
                        padding: 10,
                        flex: 1,
                    }}
                >
                    <Icon
                        containerStyle={{
                            borderRadius: 15,
                        }}
                        name="add-circle"
                        type="ionicon"
                        color="#16C79A"
                        size={30}
                        onPress={() => {
                            console.log("add item");
                        }}
                    />
                    <Icon
                        containerStyle={{
                            borderRadius: 15,
                        }}
                        name="remove-circle"
                        type="ionicon"
                        color="red"
                        size={30}
                        onPress={() => {
                            console.log("delete item");
                        }}
                    />
                </View>
            </Animated.View>

            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[styles.styleViewSale, style]}>
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </Transitioning.View>
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
