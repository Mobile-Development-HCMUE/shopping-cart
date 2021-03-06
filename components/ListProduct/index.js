import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    Pressable,
} from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text, Spinner } from "@ui-kitten/components";
import SearchBar from "../SearchBar";
import CardList from "../CardListHome";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
    const isHome = props.isHome;
    if (isHome)
        return (
            <>
                <SearchBar
                    search={props.search}
                    searchFunciton={props.searchFunction}
                />
                <CardList listButton={props.listButton} />
            </>
        );
    else {
        return <></>;
    }
};

const Footer = (props) => {
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    return (
        <ActivityIndicator
            style={{ margin: 10 }}
            size="large"
            animating={props.loading}
            color={backgroundColor}
        />
    );
};

const ListProduct = (props) => {
    const margin = 10;
    const leftColor = useSelector((state) => state.theme.theme.HEADER_RIGHT);
    const rightColor = useSelector((state) => state.theme.theme.HEADER_LEFT);
    const backgroundColor = useSelector((state) => state.theme.theme.TAB);
    // const ITEM_HEIGHT = 200;
    function currencyFormat(num) {
        return "₫" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    const navigation = useNavigation();
    return (
        <FlatList
            ListHeaderComponent={
                <Header
                    search={props.search}
                    searchFunciton={props.searchFunciton}
                    listButton={props.listButton}
                    isHome={props.isHome}
                />
            }
            ListFooterComponent={<Footer loading={props.loading} />}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            numColumns="2"
            data={props.ListData}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.itemid}
            columnWrapperStyle={styles.row}
            onEndReached={() => {
                (async () => {
                    props.onEndReached();
                })();
            }}
            onEndReachedThreshold={props.ListData.length < 10 ? 0 : 2}
            refreshControl={
                <RefreshControl
                    colors={[leftColor, rightColor]}
                    refreshing={props.refreshing}
                    onRefresh={() => {
                        props.onRefresh();
                    }}
                />
            }
            // getItemLayout={(data, index) => ({
            //     length: ITEM_HEIGHT,
            //     offset: ITEM_HEIGHT * index,
            //     index,
            // })}
            renderItem={({ item, index }) => (
                <Pressable
                    style={{ margin: 0, padding: 0, flex: 1 }}
                    onPress={() => {
                        // console.log(item);
                        navigation.navigate("Detail", { data: item });
                    }}
                    key={item.key}
                >
                    <Card
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
                                style={{ height: 150, width: "100%" }}
                                source={{
                                    uri:
                                        "https://cf.shopee.vn/file/" +
                                        item.image +
                                        "_tn",
                                }}
                                resizeMode="cover"
                                PlaceholderContent={
                                    <ActivityIndicator
                                        size="large"
                                        color={backgroundColor}
                                    />
                                }
                            ></Image>
                            <View style={{ height: 50, width: "110%" }}>
                                <Text>
                                    {item.name.substring(0, 70) + "..."}
                                </Text>
                            </View>

                            <View
                                style={{
                                    marginTop: 30,
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
                                    {item.price_before_discount != null
                                        ? currencyFormat(
                                              item.price_before_discount /
                                                  100000
                                          )
                                        : ""}
                                </Text>
                                <Text style={{ color: "#f54748" }}>
                                    {currencyFormat(item.price / 100000)}
                                </Text>
                            </View>
                            <Text
                                style={{ alignSelf: "flex-end", fontSize: 10 }}
                            >
                                Đã bán {item.historical_sold}
                            </Text>
                        </View>
                    </Card>
                </Pressable>
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
