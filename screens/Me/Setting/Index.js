import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Text, Icon } from "react-native-elements";
import { ListData3, ListData4, ListData5 } from "./data.js";
import { useSelector } from "react-redux";
import { themeColorButtonSetting } from "reduxs";

const SettingScreen = () => {
  ListData3.map((item, i) => {
    item["COLOR1"] = useSelector((state) => state.theme.theme[i].COLOR1);
    item["COLOR2"] = useSelector((state) => state.theme.theme[i].COLOR2);
    item["COLOR3"] = useSelector((state) => state.theme.theme[i].COLOR3);
    console.log();
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <Card containerStyle={{ borderRadius: 10, justifyContent: "center" }}>
          <Card.Title>Tài khoản</Card.Title>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 40,
              marginRight: 40,
              marginTop: 5,
            }}
          >
            {ListData3.map((item, i) => {
              return (
                <View key={i} style={{ flex: 1, alignItems: "center" }}>
                  <Button
                    buttonStyle={[
                      styles.button,
                      { backgroundColor: item.COLOR2 },
                    ]}
                    containerStyle={[
                      styles.containerStyle,
                      { backgroundColor: item.COLOR3 },
                    ]}
                    icon={
                      <Icon
                        name={item.icon}
                        type={item.type}
                        color={item.COLOR1}
                        size={20}
                      />
                    }
                  />
                  <Text>{item.title}</Text>
                </View>
              );
            })}
          </View>
        </Card>
        <Card containerStyle={{ flex: 1, borderRadius: 10 }}></Card>
        <Button title="ĐĂNG XUẤT" />
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
  button: {
    backgroundColor: "#FFE3EF",
    borderRadius: 23,
    width: 46,
    height: 46,
  },
  containerStyle: {
    borderWidth: 8,
    borderColor: "#FFF6FA",
    borderStyle: "solid",
    borderRadius: 31,
  },
});

export default SettingScreen;
