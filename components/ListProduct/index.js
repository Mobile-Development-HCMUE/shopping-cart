import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import { Text } from "@ui-kitten/components";

const ListProduct = ({ ListData }) => {
  const margin = 10;
  return (
    <FlatList
      columnWrapperStyle={{ justifyContent: "space-between" }}
      numColumns="2"
      data={ListData}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item, index }) => (
        <Card
          key={item.key}
          containerStyle={{
            flex: 1,
            marginLeft: index % 2 == 0 ? margin : margin / 2,
            marginRight: index % 2 == 0 ? margin / 2 : margin,
            marginTop: index == 0 || index == 1 ? margin : margin / 2,
            marginBottom: margin / 2,
          }}
          wrapperStyle={{ alignContent: "center" }}
        >
          <View style={{ alignContent: "center" }}>
            <Image
              style={{ width: "100%", minHeight: 150 }}
              source={{ uri: item.avatar }}
              resizeMode="cover"
            ></Image>
            <View style={{ height: "20%", width: "110%" }}>
              <Text>{item.name}</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text
                style={{ textDecorationLine: "line-through", color: "#999" }}
              >
                {item.moneyOld}
              </Text>
              <Text style={{ color: "#f54748" }}>{item.money}</Text>
            </View>
            <Text style={{ alignSelf: "flex-end", fontSize: 10 }}>
              {" "}
              Đã bán {item.number}
            </Text>
          </View>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {},
  container: {
    flexDirection: "row",
    borderRadius: 16,
    justifyContent: "space-between",
  },
  flatlist: {
    flex: 1,
  },
});

export default ListProduct;
