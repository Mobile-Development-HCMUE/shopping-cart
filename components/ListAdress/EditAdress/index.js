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
import { Item } from "react-native-paper/lib/typescript/components/List/List";
const data = ["Nhà", "Trường học", "Nơi làm việc", "Khác"];

const EditAddress = ({ ListData }) => {
  const margin = 10;
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => <SelectItem title={title} />;
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={"email-outline"} />
    </TouchableWithoutFeedback>
  );
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
                value={value}
                label="Số  nhà"
                placeholder={item.sonha}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={(nextValue) => setValue(nextValue)}
              />
              <Button
                containerStyle={styles.container1}
                buttonStyle={styles.Style}
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
    color: "#8F9BB3",
  },
});

export default EditAddress;
