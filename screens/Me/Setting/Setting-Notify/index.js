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

const StNotifyScreen = () => {
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
                Thông báo
              </Toggle>
              <Card.Divider></Card.Divider>

              <Toggle
                style={styles.toggle}
                status="primary"
                {...primaryToggleState}
              >
                Email thông báo
              </Toggle>
              <Card.Divider></Card.Divider>
              <Toggle style={styles.toggle} status="info" {...infoToggleState}>
                Cập nhật đơn hàng
              </Toggle>
              <Card.Divider></Card.Divider>
              <Toggle
                style={styles.toggle}
                status="basic"
                {...basicToggleState}
              >
                Thông tin về Shop
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

export default StNotifyScreen;
