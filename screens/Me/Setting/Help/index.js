import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Text } from "@ui-kitten/components";

const HelpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Card containerStyle={styles.card}>
          <Card.Title></Card.Title>
          <View style={styles.containerButton}></View>
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
