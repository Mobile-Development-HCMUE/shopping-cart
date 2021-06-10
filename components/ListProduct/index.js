import React from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    FlatList,
} from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";

const ListProduct = ({ ListData }) => {
    const margin = 10;
    // const ITEM_HEIGHT = 200;
    return (
        <FlatList
            columnWrapperStyle={{ justifyContent: "space-between" }}
            numColumns="2"
            data={ListData}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.itemid}
            columnWrapperStyle={styles.row}
            // getItemLayout={(data, index) => ({
            //     length: ITEM_HEIGHT,
            //     offset: ITEM_HEIGHT * index,
            //     index,
            // })}
            renderItem={({ item, index }) => (
                <Card
                    key={item.key}
                    containerStyle={{
                        flex: 1,
                        marginLeft: index % 2 == 0 ? margin : margin / 2,
                        marginRight: index % 2 == 0 ? margin / 2 : margin,
                        marginTop:
                            index == 0 || index == 1 ? margin : margin / 2,
                        marginBottom: margin / 2,
                    }}
                    wrapperStyle={{ alignContent: "center" }}
                >
                    <View style={{ alignContent: "center" }}>
                        <Image
                            style={{ width: "100%", minHeight: 150 }}
                            source={{
                                uri:
                                    "https://cf.shopee.vn/file/" +
                                    item.image +
                                    "_tn",
                            }}
                            resizeMode="cover"
                        ></Image>
                        <View style={{ height: "22%", width: "110%" }}>
                            <Text>{item.name}</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <Text
                                style={{
                                    textDecorationLine: "line-through",
                                    color: "#999",
                                }}
                            >
                                {item.moneyOld}
                            </Text>
                            <Text style={{ color: "#f54748" }}>
                                {item.price_min}
                            </Text>
                        </View>
                        <Text style={{ alignSelf: "flex-end", fontSize: 10 }}>
                            {" "}
                            Đã bán {item.historical_sold}
                        </Text>
                    </View>
                </Card>
            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {},
    container: {
        flexDirection: "row",
        borderRadius: 16,
        justifyContent: "space-between",
    },
    flatlist: {
        flex: 1,
    },
    row: {
        flex: 1,
        justifyContent: "space-around",
    },
});

export default ListProduct;
