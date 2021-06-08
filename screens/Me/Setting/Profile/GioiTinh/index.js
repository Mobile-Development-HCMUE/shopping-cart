import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-elements";
import {
  Text,
  Card,
  Layout,
  Input,
  Icon,
  Button as button,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
const data = ["Nam", "Nữ", "Khác"];

const GioiTinhScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const renderOption = (title) => <SelectItem title={title} />;
  return (
    <SafeAreaView>
      <ScrollView>
        <Card
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
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Giới tính</Text>
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
            <Select
              style={styles.select}
              placeholder="Default"
              value={displayValue}
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              {data.map(renderOption)}
            </Select>
            <Button
              containerStyle={styles.container1}
              buttonStyle={styles.Style}
              title="Lưu"
            />
          </View>
        </Card>
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
  select: {
    flex: 1,
    margin: 2,
  },
});

export default GioiTinhScreen;
