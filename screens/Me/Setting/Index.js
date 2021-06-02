import { StatusBar } from "expo-status-bar";
import React from "react";
import List from "../../../components/ListOptions/index";
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";
import { Button, Card } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import {ListData3, ListData4, ListData5} from "./data.js";

const Stack = createStackNavigator();

const SettingScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Card containerStyle={{borderRadius: 10, flexDirection: "row",justifyContent: "center" }}>
                    <Card.Title>Tài khoản</Card.Title>
                    <View styles={{justifyContent: "center"}}>
                        <Card containerStyle={{borderRadius: 32, width: 50, height: 50, justifyContent: "center", alignItems: "center"}} >
                            <Icon 
                                justifyContent= 'center'
                                name= 'person-circle-outline'
                                type= 'ionicon'
                                color= '#6155a6'
                            />
                        </Card> 
                        <Text>Hồ sơ của tôi</Text>
                    </View>
                    <View styles={{justifyContent: "center"}}>
                        <Card containerStyle={{borderRadius: 32, width: 50, height: 50, justifyContent: "center", alignItems: "center"}} >
                            <Icon 
                                name= 'location-outline'
                                type= 'ionicon'
                                color= '#6155a6'
                            />
                        </Card>
                        <Text style={{justifyContent: "center"}}>Địa chỉ</Text>
                    </View>
                    </Card>
                <Card containerStyle={{flex: 1,borderRadius: 10}}>
                    <Card.Title style={{margin: 8}}>Cài đặt</Card.Title>
                    <Card style={styles.Setting}>
                        <List listData={ListData4}/>
                    </Card>
                </Card>
                <Card containerStyle={{flex: 1,borderRadius: 10}}>
                    <Card.Title style={{margin: 8}}>Hỗ trợ</Card.Title>
                    <Card style={styles.Setting}>
                        <List listData={ListData5}/>
                    </Card>
                </Card>
                    <Button
                        title="ĐĂNG XUẤT"
                    />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6155a6",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
});

export default SettingScreen;
