import React, { useState } from "react";
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
  Datepicker,
} from "@ui-kitten/components";
const CalendarIcon = (props) => <Icon {...props} name="calendar" />;
const useDatepickerState = (initialDate = null) => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};
const filter = (date) => date.getDay() !== 0 && date.getDay() !== 6;
const now = new Date();
const yesterday = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() - 1
);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

const DateScreen = () => {
  const minMaxPickerState = useDatepickerState();
  const filterPickerState = useDatepickerState();
  const boundingPickerState = useDatepickerState();
  const [date, setDate] = useState(new Date());

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={"email-outline"} />
    </TouchableWithoutFeedback>
  );
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>Vui lòng nhập đúng email</Text>
      </View>
    );
  };
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
            <Text style={{ fontWeight: "bold" }}>Ngày sinh</Text>
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
            {/* //   style={{
            //     marginBottom: 10,
            //     marginTop: 10,
            //     width: "63%",
            //     borderRadius: 20,
            //   }}
             */}
            {/* <Datepicker
              placeholder="Min / Max"
              min={yesterday}
              max={tomorrow}
              {...minMaxPickerState}
            /> */}

            <View style={styles.rowContainer}>
              {/* <Datepicker
                style={styles.picker}
                placeholder="Date Filter"
                filter={filter}
                {...filterPickerState}
              /> */}

              <Datepicker
                style={
                  (styles.picker,
                  {
                    marginBottom: 10,
                    marginTop: 10,

                    borderRadius: 20,
                  })
                }
                placeholder="Ngày sinh"
                boundingMonth={true}
                {...boundingPickerState}
                accessoryRight={CalendarIcon}
              />
            </View>
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
  container: {
    minHeight: 360,
  },
  rowContainer: {
    justifyContent: "space-between",
  },
  picker: {
    flex: 1,
    margin: 2,
  },
});

export default DateScreen;
