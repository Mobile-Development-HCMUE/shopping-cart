import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CardListHome = ({ listButton }) => {
  const topProfileColor = useSelector((state) => state.theme.theme.TOP_PROFILE);
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          borderRadius: 10,
          justifyContent: "center",
          height: "20%",
          width: "100%",
          alignContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        {listButton.map((i, u) => (
          <View
            data={listButton}
            key={u}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="outline"
              buttonStyle={[
                styles.button,
                {
                  backgroundColor: i.incolor,
                  borderColor: "#fff",
                },
              ]}
              containerStyle={[
                styles.containerStyle,
                {
                  borderColor: i.outcolor,
                },
              ]}
              onPress={() => {
                if (typeof i.link === "undefined") {
                  console.log("Null");
                } else navigation.navigate(i.link);
              }}
              icon={
                <Icon name={i.icon} type={i.type} color={i.color} size={20} />
              }
            ></Button>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>{i.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 23,
    width: 46,
    height: 46,
  },
  containerStyle: {
    borderWidth: 8,
    borderStyle: "solid",
    borderRadius: 31,
  },
});
export default CardListHome;