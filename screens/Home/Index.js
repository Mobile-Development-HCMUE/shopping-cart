import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native-elements";
import { firebase } from "../../firebase/config";
import ListProduct from "components/ListProduct";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import data from "../Home/data";

const Stack = createStackNavigator();

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    const db = firebase.firestore();
    const first = db.collection("product").orderBy("itemid").limit(10);
    const [lastVisible, setLastVisible] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const getNext = async () => {
        console.log("Is loading", isLoading);
        if (!isLoading) {
            console.log("Is loading", isLoading);
            db.collection("product")
                .orderBy("itemid")
                .startAfter(lastVisible)
                .limit(10)
                .get()
                .then((query) => {
                    console.log("start last", typeof lastVisible);
                    setLastVisible(query.docs[query.docs.length - 1]);
                    // console.log("new querry");
                    let newList = dataSource;
                    // console.log("success");
                    query.forEach((doc) => {
                        let e = doc.data();
                        const j = {
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

                            price_min: e.price_min,
                            price_max: e.price_max,
                            discount: e.discount,
                            historical_sold: e.historical_sold,
                            item_rating: e.item_rating.rating_star,
                            rating_count: e.item_rating.rating_count,
                        };
                        newList = newList.concat(j);
                        // console.log(newList);
                        setDataSource(newList);

                        // console.log("last visiable:", lastVisible);
                    });
                    console.log("end last", typeof lastVisible);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
    };
    React.useEffect(() => {
        (async () => {
            await console.log("Home: get data");
            first
                .get()
                .then((query) => {
                    setLastVisible(query.docs[query.docs.length - 1]);
                    // console.log("new querry");
                    let newList = [];
                    // console.log("success");
                    query.forEach((doc) => {
                        let e = doc.data();
                        const j = {
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

                            price_min: e.price_min,
                            price_max: e.price_max,
                            discount: e.discount,
                            historical_sold: e.historical_sold,
                            item_rating: e.item_rating.rating_star,
                            rating_count: e.item_rating.rating_count,
                        };
                        newList = newList.concat(j);
                        // console.log(newList);
                        setDataSource(newList);
                        // console.log("last visiable:", lastVisible);
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        })();
    }, []);
    return (
        <>
            <StatusBar barStyle="#fff" />
            {/* <SearchBar search={search} searchFunciton={searchFilterFunction} /> */}
            <ListProduct
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListData={dataSource}
                search={search}
                searchFunciton={searchFilterFunction}
                isSeach={true}
                listButton={data}
                onEndReached={getNext}
            />
        </>
    );
};

const Home = ({ navigation }) => {
    return <HomeScreen />;
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Home;
