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
    const first = db.collection("product").orderBy("itemid").limit(6);
    // const getNext = async (next) => {
    //     next.get()
    //         .then((documentSnapshots) => {
    //             // Get the last visible document
    //             return (lastVisible =
    //                 documentSnapshots.docs[documentSnapshots.docs.length - 1]);

    //             // Construct a new query starting at this document,
    //             // get the next 25 cities.
    //         })
    //         .then((lastVisible) => {
    //             return (first = db
    //                 .collection("cities")
    //                 .orderBy("population")
    //                 .startAfter(lastVisible)
    //                 .limit(6));
    //         })
    //         .then((next) => {
    //             next.get.then((data) => {
    //                 const newList = dataSource.concat(data.data());
    //                 setDataSource(newList);
    //             });
    //         });
    // };
    React.useEffect(() => {
        (async () => {
            await console.log("Home: get data");
            first
                .get()
                .then((query) => {
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
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        })();
    }, []);
    // console.log(dataSource);
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
