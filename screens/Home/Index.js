import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, SearchBar } from "react-native-elements";

const Stack = createStackNavigator();

const HomeScreen = () => {
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
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

    return (
        <ScrollView>
            <SearchBar
                placeholder="Tìm kiếm thương hiệu, sản phẩm ở đây..."
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction("")}
                lightTheme
                round
                inputContainerStyle={{ maxHeight: 50 }}
                searchIcon={{ size: 24 }}
                value={search}
            />
            <Text>Home page</Text>
        </ScrollView>
    );
};

const Home = ({ navigation }) => {
    return <HomeScreen />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Home;
