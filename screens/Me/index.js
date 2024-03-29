// In App.js in a new project

import * as React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Image } from "react-native-elements";
import { Text, Button } from "@ui-kitten/components";

import SettingScreen from "./Setting/index.js";

import Avatar from "../../components/Avatar";
import List from "../../components/ListOptions/index";
import { LinearGradient } from "expo-linear-gradient";
import { Title } from "react-native-paper";
import styles from "./style";
import { ListData1, ListData2 } from "./data.js";
import { useSelector } from "react-redux";
import { UserContext } from "contexts";
import { firebase } from "../../firebase/config";
const Stack = createStackNavigator();

const MeScreen = ({ navigation }) => {
  const userID = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);
  const avatar = useSelector((state) => state.user.avatar);
  const topProfileColor = useSelector((state) => state.theme.theme.TOP_PROFILE);
  const bottomProfileColor = useSelector(
    (state) => state.theme.theme.BOTTOM_PROFILE
  );
  React.useEffect(() => {}, [2]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <LinearGradient
        style={styles.container}
        colors={[topProfileColor, bottomProfileColor]}
      >
        <View style={styles.Body}>
          <View style={styles.Card}>
            <Avatar src={avatar} />
            <View style={{ flexDirection: "row" }}>
              <Button style={styles.Button} size="small" status="success">
                Theo dõi
              </Button>
              <Button style={styles.Button} size="small" appearance="outline">
                Nhắn tin
              </Button>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={styles.Info}>
                <Text category="h4">10</Text>
                <Text>Đơn hàng</Text>
              </View>
              <View style={styles.Info}>
                <Text category="h4">13</Text>
                <Text>Đang theo dõi</Text>
              </View>
              <View style={styles.Info}>
                <Text category="h4">20</Text>
                <Text>Theo dõi</Text>
              </View>
            </View>
            <Text category="h3" style={{ margin: 10 }}>
              {userName}
            </Text>
            <Text style={{ margin: 10 }}>Intro</Text>
          </View>
          <View style={styles.Setting}>
            <List listData={ListData1} />
          </View>
          <View style={styles.Setting}>
            <List listData={ListData2} />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const Me = ({ navigation }) => {
  return <MeScreen />;
};

export default Me;
