import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
const data = ["Nhà", "Trường học", "Nơi làm việc", "Khác"];

const EditAddress = ({ ListData }) => {
  const margin = 10;
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => <SelectItem title={title} />;
  return (
    <ScrollView>
      <FlatList
        columnWrapperStyle={{
          justifyContent: "space-between",
          flexDirection: "column",
        }}
        numColumns="2"
        data={ListData}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <Card
            key={item.key}
            containerStyle={
              ({
                flex: 1,
              },
              styles.container)
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Layout
                style={(styles.container, { marginBottom: 15, width: "50%" })}
                level="1"
              >
                <Select
                  style={styles.select}
                  placeholder="Default"
                  value={displayValue}
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                >
                  {data.map(renderOption)}
                </Select>
              </Layout>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ color: "#999" }}>Số nhà</Text>
              <Text>{item.sonha}</Text>
            </View>
            <Card.Divider></Card.Divider>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ color: "#999" }}>Phường/Xã</Text>
              <Text>{item.phuong}</Text>
            </View>
            <Card.Divider></Card.Divider>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ color: "#999" }}>Quận/Huyện</Text>
              <Text>{item.quan}</Text>
            </View>
            <Card.Divider></Card.Divider>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ color: "#999" }}>Tỉnh/Thành phố</Text>
              <Text>{item.tp}</Text>
            </View>
            <Card.Divider></Card.Divider>
          </Card>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {},
  container: {
    borderRadius: 16,
    justifyContent: "space-between",
    elevation: 4,
  },
  flatlist: {
    flex: 1,
  },
  container1: {
    borderRadius: 10,
  },
  Style: {
    backgroundColor: "#fd4b59",
    borderRadius: 10,
    height: 30,
    width: 100,
  },
});

export default EditAddress;
