import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { List } from "../../../components/ListOptions/index.js";

const LanguageScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Setting}>
          <Card containerStyle={styles.card}>
            <View style={styles.containerButton}></View>
          </Card>
          <View>
            <View style={styles.Setting}>
              {/* <List listData={ListData3}></List> */}
            </View>
          </View>
        </View>
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

export default LanguageScreen;
