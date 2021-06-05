import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Text } from "react-native-elements";
import List from "components/ListOptions/index.js";
import { ListData3, ListData4 } from "./data.js";
import Avatar from "components/Avatar";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Setting}>
          <Card containerStyle={styles.card1}>
            <Avatar src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/136064155_167450921803187_6870146644278943650_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QgXcIlZMH-wAX8I6HBB&_nc_ht=scontent.fsgn5-5.fna&oh=1df37565cbc5984183f0d2ba642726ee&oe=60CE536E">
              {/* <Avatar.Accessory {...accessoryProps} /> */}
            </Avatar>
          </Card>
          <Card containerStyle={styles.card2}>
            <View style={styles.Setting}>
              <List listData={ListData3}></List>
              <List listData={ListData4}></List>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   containerButton: {
  //     justifyContent: "center",
  //     flexDirection: "row",
  //   },
  //   buttonStyle: {
  //     marginLeft: 5,
  //     marginRight: 5,
  //     marginTop: 5,
  //   },
  card1: {
    height: 200,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  card2: {
    borderRadius: 16,
  },
});

export default ProfileScreen;
