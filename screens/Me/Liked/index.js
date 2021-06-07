import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import users from "./data";

const LikedScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {users.map((u, i) => {
          return (
            <Card key={i}>
              <View style={styles.user}>
                {/* <Card.Image source={u.avatar}></Card.Image> */}
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: u.avatar }}
                  resizeMode="cover"
                ></Image>
                <Text>{u.name}</Text>
                <Text style={{ color: "#f54748" }}>{u.money}</Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
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
