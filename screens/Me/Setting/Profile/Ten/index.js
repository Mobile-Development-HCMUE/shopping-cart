import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Icon } from "react-native-elements";
import {
  Text,
  Card,
  Layout,
  Input,
  Button as button,
} from "@ui-kitten/components";

const TenScreen = () => {
  const [value, setValue] = React.useState("");
  return (
    <SafeAreaView>
      <ScrollView>
        <Layout
          style={{
            marginTop: 5,
            justifyContent: "space-between",
            alignContent: "center",
          }}
          level="1"
        >
          <Card style={styles.card} status="primary">
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Tên</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Input
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  width: "63%",
                  borderRadius: 20,
                }}
                placeholder="Place your Text"
                value={value}
                onChangeText={(nextValue) => setValue(nextValue)}
              />
              <Button
                containerStyle={styles.container1}
                buttonStyle={styles.Style}
                title="Lưu"
              />
            </View>
          </Card>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
  },
  container1: {
    borderRadius: 15,
    width: "35%",
    //height: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  Style: {
    backgroundColor: "#7579e7",
    borderRadius: 15,
    height: 30,
    width: 100,
  },
});

export default TenScreen;
