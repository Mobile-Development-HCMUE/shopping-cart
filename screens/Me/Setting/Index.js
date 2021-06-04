import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@ui-kitten/components";
import ListData from "./data.js";
import { useSelector } from "react-redux";
import { themeColorButtonSetting } from "reduxs";

const SettingScreen = () => {
  const buttonLogoutColor = useSelector((state) => state.theme.theme.TAB);
  const leftHeaderColor = useSelector((state) => state.theme.theme.HEADER_LEFT);
  const rightHeaderColor = useSelector(
    (state) => state.theme.theme.HEADER_RIGHT
  );
  ListData.map((item, i) => {
    item.content.map((items, j) => {
      items.COLOR1 = useSelector(
        (state) => state.theme.theme[i * 3 + j].COLOR1
      );
      items.COLOR2 = useSelector(
        (state) => state.theme.theme[i * 3 + j].COLOR2
      );
      items.COLOR3 = useSelector(
        (state) => state.theme.theme[i * 3 + j].COLOR3
      );
    });
  });
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      {ListData.map((item, i) => {
        return (
          <Card
            key={i}
            containerStyle={{
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Card.Title>{item.title}</Card.Title>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 5,
              }}
            >
              {item.content.map((jtem, j) => {
                return (
                  <View
                    key={j}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <Button
                      buttonStyle={[
                        styles.button,
                        {
                          backgroundColor: jtem.COLOR2,
                        },
                      ]}
                      containerStyle={[
                        styles.containerStyle,
                        {
                          borderColor: jtem.COLOR3,
                        },
                      ]}
                      icon={
                        <Icon
                          name={jtem.icon}
                          type={jtem.type}
                          color={jtem.COLOR1}
                          size={20}
                        />
                      }
                    />
                    <Text status="basic" style={styles.text}>
                      {jtem.title}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Card>
        );
      })}
      <Button
        containerStyle={{
          flex: 1,
          justifyContent: "flex-end",
        }}
        buttonStyle={{
          backgroundColor: buttonLogoutColor,
          borderRadius: 0,
          minHeight: 50,
          borderRadius: 8,
        }}
        title="ĐĂNG XUẤT"
        ViewComponent={LinearGradient}
        linearGradientProps={{
          headerBackground: () => (
            <LinearGradient
              colors={[leftHeaderColor, rightHeaderColor]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          ),
        }}
      />
    </ScrollView>
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
  text: {
    textAlign: "center",
    maxHeight: 50,
    minWidth: 80,
  },
});

export default SettingScreen;
