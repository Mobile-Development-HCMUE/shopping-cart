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

const LikedScreen = () => {
    const topProfileColor = useSelector(
        (state) => state.theme.theme.TOP_PROFILE
    );
    const bottomProfileColor = useSelector(
        (state) => state.theme.theme.BOTTOM_PROFILE
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [dataSource, setDataSource] = useState([]);
    const userid = useSelector((state) => state.user.id);
    const user = db.collection("users").doc(userid);
    // console.log(userid);
    const product = db.collection("product");

    React.useEffect(() => {
        user.get().then((doc) => {
            doc.data()
                .likeItem.forEach((productid) => {
                    let newList = [];
                    console.log(productid);
                    product
                        .doc(productid)
                        .get()
                        .then((doc) => {
                            let e = doc.data();
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
                                price_before_discount: e.price_before_discount,
                                description: e.description,
                                price_min: e.price_min,
                                price_max: e.price_max,
                                discount: e.discount,
                                historical_sold: e.historical_sold,
                                item_rating: {
                                    rating_star: e.item_rating.rating_star,
                                },
                            };
                            console.log(j);
                            newList.push(j);
                        });
                    setDataSource(newList);
                    // console.log(dataSource);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        });
    }, []);
    return (
        <LinearGradient
            style={{ height: "100%" }}
            colors={[topProfileColor, bottomProfileColor]}
        >
            <ListProduct
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListData={dataSource}
                loading={isLoading}
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
