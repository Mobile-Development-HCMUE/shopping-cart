import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { firebase, db } from "../../firebase/config"; // add this code to your project to reset all timeouts
import { Platform, InteractionManager } from "react-native";
import {
  change_id,
  change_name,
  change_avatar,
  change_cart,
} from "../../redux/ducks";
import * as Font from "expo-font";
import { isLoading } from "expo-font";

let customFonts = {
  "The-Wild-Thing": require("../../assets/fonts/SVN.otf"),
};

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [user, setUser] = useState(null);
  const [animating, setAnimating] = useState(true);
  const backgroundColor = useSelector((state) => state.theme.theme.TOP_PROFILE);
  const dispatch = useDispatch();
  useEffect(() => {
    const usersRef = db.collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setUser(userData);
            dispatch(change_id(userData.id));
            dispatch(change_name(userData.name));
            typeof userData.cartItem != "undefined"
              ? dispatch(change_cart(Object.keys(userData.cartItem).length))
              : null;
            const local = "avatar/" + userData.id;
            const ref = firebase.storage().ref(local);
            ref.getDownloadURL().then((url) => {
              dispatch(change_avatar(url));
            });
            Font.loadAsync(customFonts).then(() => {
              console.log("load font success");
              navigation.replace("DrawerNavigationRoutes", userData);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        navigation.replace("Auth");
      }
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Image
        source={require("assets/aboutreact.png")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
