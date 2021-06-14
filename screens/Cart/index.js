import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";
const CartScreen = () => {
    return <View />;
};
const data = ["Nhà", "Trường học", "Nơi làm việc", "Khác"];

const { height, width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const Cart = ({ navigation }) => {
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
                <FlatList
                    data={data.images}
                    keyExtractor={(item) => item}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    renderItem={({ item }) => {
                        return (
                            <View
                                key={item}
                                style={{
                                    width: "70%",
                                    elevation: 1,
                                    borderColor: "#000",
                                    borderBottomRightRadius: 20,
                                    borderTopRightRadius: 20,
                                }}
                            >
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
                                    Miễn phí ship cho đơn từ 0đ
                                </Text>
                                <Button
                                    buttonStyle={
                                        isPress
                                            ? {
                                                  backgroundColor:
                                                      leftBackgroundButton,
                                              }
                                            : { backgroundColor: "#999" }
                                    }
                                    title={isPress ? "Lưu" : "Hết mã :("}
                                    onPress={() => {
                                        setIsPress(!isPress);
                                    }}
                                    containerStyle={{
                                        flex: 1,
                                        justifyContent: "flex-end",
                                        marginLeft: "20%",
                                        marginRight: "20%",
                                        marginBottom: "5%",
                                    }}
                                ></Button>
                            </View>
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
        // <Layout style={styles.tabContainer} level="1">
        //   <View
        //     style={{ height: "50%", justifyContent: "flex-end", marginBottom: 20 }}
        //   >
        //     <Text style={{}} category="h6">
        //       Chưa có gì trong giỏ hàng :(
        //     </Text>
        //   </View>
        //   <View style={{ height: "50%" }}>
        //     <Button
        //       // onPress={toggleOverlay}
        //       containerStyle={styles.ButtonContainerStyles}
        //       buttonStyle={styles.ButtonStyles}
        //       title="Mua ngay thôi!!!"
        //       onPress={() => navigation.navigate("Home")}
        //       ViewComponent={LinearGradient}
        //       linearGradientProps={{
        //         colors: [leftBackgroundButton, rightBackgroundButton],
        //         style: { flex: 1 },
        //         start: { x: 0, y: 0 },
        //         end: { x: 1, y: 0 },
        //       }}
        //     ></Button>
        //   </View>
        // </Layout>
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
});

export default Cart;
