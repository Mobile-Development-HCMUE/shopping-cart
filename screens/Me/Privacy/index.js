import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Card, Icon, Switch } from "react-native-elements";
import { Text, Layout, Toggle } from "@ui-kitten/components";

const useToggleState = (initialState = false) => {
  const [checked, setChecked] = React.useState(initialState);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return { checked, onChange: onCheckedChange };
};

const PrivacyScreen = () => {
  const primaryToggleState = useToggleState();
  const dangerToggleState = useToggleState();
  const infoToggleState = useToggleState();
  const successToggleState = useToggleState();
  const basicToggleState = useToggleState();
  return (
    <SafeAreaView>
      <ScrollView>
        <Card containerStyle={styles.card}>
          <Layout style={styles.container} level="1">
            <View style={styles.controlContainer}>
              <Toggle
                style={styles.toggle}
                status="danger"
                {...dangerToggleState}
              >
                Hoạt động riêng tư
              </Toggle>
              <Card.Divider></Card.Divider>

              <Toggle
                style={styles.toggle}
                status="primary"
                {...primaryToggleState}
              >
                Ẩn ưa thích của tôi
              </Toggle>
              <Card.Divider></Card.Divider>
              <Toggle style={styles.toggle} status="info" {...infoToggleState}>
                Ẩn thông tin liên lạc
              </Toggle>
              <Card.Divider></Card.Divider>
              <Toggle
                style={styles.toggle}
                status="basic"
                {...basicToggleState}
              >
                Cho phép truy cập vị trí
              </Toggle>

              <Card.Divider></Card.Divider>
            </View>
          </Layout>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    direction: "ltr",
    borderRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  toggle: {
    margin: 2,
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    marginLeft: 80,
    alignContent: "space-between",
    minWidth: 80,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 8,
    padding: 6,
  },
});

export default PrivacyScreen;
