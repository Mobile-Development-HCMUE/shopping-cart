import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import List from "components/ListOptions/index";
import cauhoi from "./data.js";

const HelpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          <Card.Title>Câu hỏi thường gặp</Card.Title>
        </Card>
        <Card>
          <View>
            <List listData={cauhoi}></List>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 16,
  },
});

export default HelpScreen;
