import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Switch } from "react-native-elements";
import { Text } from "@ui-kitten/components";

const StNotifyScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Setting}>
          <Card containerStyle={styles.card}>
            <Text>Thông báo</Text>
            <Card.Divider></Card.Divider>
            <Text>Email thông báo</Text>
            <Card.Divider></Card.Divider>
            <Text>Cập nhật đơn hàng</Text>
            <Card.Divider></Card.Divider>
            <Text>Thông tin Shop</Text>
            <Card.Divider></Card.Divider>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {},
});

export default StNotifyScreen;
