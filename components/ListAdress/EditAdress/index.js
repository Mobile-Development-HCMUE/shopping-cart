import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Button, Card, Icon, Image } from "react-native-elements";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
  Input,
} from "@ui-kitten/components";
const data = ["Nhà", "Trường học", "Nơi làm việc", "Khác"];
import { useSelector } from "react-redux";

const EditAddress = ({ ListData }) => {
  const margin = 10;
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => <SelectItem title={title} />;
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const buttonLogoutColor = useSelector(
    (state) => state.theme.theme.HEADER_LEFT
  );
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

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
            containerStyle={({ flex: 1 }, styles.container)}
            style={
              (styles.card,
              {
                borderRadius: 20,
              })
            }
            status="primary"
          >
            <View style={styles.stylesView}>
              <Text
                style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
                category="h6"
              >
                Số nhà:
              </Text>
              <Input style={styles.styleInput} placeholder={item.sonha}></Input>
            </View>
            <View style={styles.stylesView}>
              <Text
                style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
                category="h6"
              >
                Đường:
              </Text>
              <Input style={styles.styleInput} placeholder={item.duong}></Input>
            </View>
            <View style={styles.stylesView}>
              <Text
                style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
                category="h6"
              >
                Phường/Xã:
              </Text>
              <Input
                style={styles.styleInput}
                placeholder={item.phuong}
              ></Input>
            </View>
            <View style={styles.stylesView}>
              <Text
                style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
                category="h6"
              >
                Quận/Huyện:
              </Text>
              <Input style={styles.styleInput} placeholder={item.quan}></Input>
            </View>
            <View style={styles.stylesView}>
              <Text
                style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}
                category="h6"
              >
                Tỉnh/Thành Phố:
              </Text>
              <Input style={styles.styleInput} placeholder={item.tp}></Input>
            </View>
            <View style={{ alignItems: "center" }}>
              <Button
                containerStyle={styles.container1}
                buttonStyle={
                  (styles.Style, { backgroundColor: buttonLogoutColor })
                }
                title="Lưu"
              />
            </View>
          </Card>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    justifyContent: "space-between",
    elevation: 4,
  },
  flatlist: {
    flex: 1,
  },
  card: {
    borderRadius: 16,
  },
  container1: {
    borderRadius: 20,
    width: "35%",
    //height: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  Style: {
    borderRadius: 20,
    height: 30,
    width: 100,
  },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
  },
  stylesView: {
    width: "100%",
    backgroundColor: "#fff",
  },
  styleInput: {
    marginLeft: 10,
    maxWidth: "85%",
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});

export default EditAddress;
