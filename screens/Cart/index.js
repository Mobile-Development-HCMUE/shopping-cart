import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions, FlatList, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image } from "react-native-elements";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useAnimatedGestureHandler } from "react-native-reanimated";
import SwipeRow from "../../components/SwipeRow";
const CartScreen = () => {
    return <View />;
};
const data = ["Nhà", "Trường học", "Nơi làm việc", "Khác"];

const { height, width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.9;

const RenderItem = ({ onDelete, item }) => {
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const [isPress, setIsPress] = React.useState(true);
    return (
        <SwipeRow onDelete={onDelete}>
            <Image
                containerStyle={{
                    width: "30%",
                    backgroundColor: leftBackgroundButton,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 20,
                    margin: 15,
                }}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/test-b067a.appspot.com/o/avatar%2Fy8VAjfhZQSh6kK2wJTSK3ES6M8A3?alt=media&token=3a76fb02-5fcd-4f14-b663-d6a0c202c511",
                }}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    TEAM-IT
                </Text>
            </Image>
            <View style={{}}>
                <Text
                    style={{
                        fontWeight: "bold",
                        justifyContent: "center",
                        marginTop: 10,
                        alignContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                    }}
                >
                    Miễn phí 30k phí ship đơn từ 100k
                </Text>
            </View>
        </SwipeRow>
    );
};

const Cart = ({ navigation }) => {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                ></BottomSheetScrollView> */}
            </BottomSheet>
        </SafeAreaView>
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
    image: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
    pagination: {
        position: "absolute",
        top: ITEM_WIDTH / 2,
        left: 20,
    },
    row: {
        flex: 1,
        justifyContent: "space-around",
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: "100%",
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        marginTop: 1,
    },
    incard: {
        width: "100%",
        height: "15%",
        backgroundColor: "#fff",
        marginBottom: 20,
    },
});

export default Cart;
