import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import ListProduct from "components/ListProduct";
import users from "./data";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../../firebase/config";
import ContentLoader from "components/ContentLoader/Main";

const LikedScreen = () => {
    const topProfileColor = useSelector(
        (state) => state.theme.theme.TOP_PROFILE
    );
    const bottomProfileColor = useSelector(
        (state) => state.theme.theme.BOTTOM_PROFILE
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [dataSource, setDataSource] = useState([]);
    const userid = useSelector((state) => state.user.id);
    const user = db.collection("users").doc(userid);
    // console.log(userid);
    const product = db.collection("product");
    const getData = () => {
        setIsLoading(true);
        return user
            .get()
            .then((doc) => {
                return Promise.all(
                    doc.data().likeItem.map((productid) => {
                        return product
                            .doc(productid)
                            .get()
                            .then((doc) => {
                                const e = doc.data();
                                const j = {
                                    attributes: e.attributes,
                                    itemid: e.itemid,
                                    name: e.name,
                                    image: e.image,
                                    images: e.images,
                                    currency: e.currency,
                                    stock: e.stock,
                                    ctime: e.ctime,
                                    liked_count: e.liked_count,
                                    view_count: e.view_count,
                                    price: e.price,
                                    price_before_discount:
                                        e.price_before_discount,
                                    description: e.description,
                                    price_min: e.price_min,
                                    price_max: e.price_max,
                                    discount: e.discount,
                                    historical_sold: e.historical_sold,
                                    item_rating: {
                                        rating_star: e.item_rating.rating_star,
                                    },
                                };
                                return j;
                            });
                    })
                ).then((newL) => {
                    setIsLoading(false);
                    setDataSource(newL);
                });
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    };
    const onRefresh = () => {
        setRefreshing(true);
        getData().then(() => setRefreshing(false));
    };
    React.useEffect(() => {
        getData();
    }, []);
    return (
        <LinearGradient
            style={{ height: "100%" }}
            colors={[topProfileColor, bottomProfileColor]}
        >
            {(isLoading || refreshing) && <ContentLoader />}
            <ListProduct
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListData={dataSource}
                loading={isLoading}
                onEndReached={() => {}}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {},
    container: {
        flexDirection: "row",
        borderRadius: 16,
        justifyContent: "space-between",
    },
});

export default LikedScreen;
