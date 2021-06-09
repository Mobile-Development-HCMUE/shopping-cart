import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import Button from "components/ColorButton";
import { themeOptions } from "reduxs";

const ThemeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.Setting}>
        <Card>
          <Text style={{ marginBottom: 8 }}>
            Chọn chủ đề cho phần mềm của bạn:{" "}
          </Text>
          <View style={styles.containerButton}>
            {Object.keys(themeOptions).map((item, i) => {
              return (
                <Button
                  title={item}
                  key={i}
                  color={themeOptions[item].TAB}
                  style={styles.buttonStyle}
                />
              );
            })}
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
});

export default ThemeScreen;
