import React, { useState, createRef, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import ButtonMain from "components/MainButton";
import { Text } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { Input, Icon, Button } from "@ui-kitten/components";
import { firebase } from "../../../firebase/config";
import Loader from "components/Loader";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return {
    value,
    onChangeText: setValue,
  };
};

const RegisterScreen = (props) => {
  const backgroundColor = useSelector((state) => state.theme.theme.TAB);
  const userName = useInputState();
  const userEmail = useInputState();
  const [userPassword, setUserPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const [reUserPassword, setReUserPassword] = React.useState("");
  const [reSecureTextEntry, setReSecureTextEntry] = React.useState(true);

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName.value) {
      alert("Cảnh báo", "Vui lòng điền tên");
      return;
    }
    if (!userEmail.value) {
      alert("Cảnh báo", "Vui lòng đièn Email");
      return;
    }
    if (!userPassword) {
      alert("Cảnh báo", "Vui lòng nhập mật khẩu");
      return;
    }
    if (!reUserPassword) {
      alert("Cảnh báo", "Vui lòng nhập lại mật khẩu");
      return;
    }
    if (userPassword != reUserPassword) {
      alert("Cảnh báo", "Mật khẩu nhập lại không giống");
      return;
    }
    userName.onChangeText(userName.value.trim());
    userEmail.onChangeText(userEmail.value.trim());
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail.value, userPassword)
      .then((response) => {
        const uid = response.user.uid;
        const email = userEmail.value;
        const name = userName.value;
        const data = {
          id: uid,
          email,
          name,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            setLoading(false);
            setIsRegistraionSuccess(true);
          })
          .catch((error) => {
            setLoading(false);
            console.log(Object.keys(error));
            setErrortext(error.message);
          });
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.log(Object.keys(error));
        setErrortext(error.message);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image
          source={require("assets/complete.png")}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>Đăng kí thành công!</Text>
        <Button
          onPress={() => {
            // AsyncStorage.setItem("user_id", data[0].email);
            props.navigation.replace("DrawerNavigationRoutes");
          }}
          style={styles.button}
          // appearance="outline"
          status="success"
        >
          ĐĂNG NHẬP NGAY
        </Button>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("assets/aboutreact.png")}
            style={{
              width: "50%",
              height: 200,
              resizeMode: "contain",
            }}
          />
        </View>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.SectionStyle}>
            <Input
              style={styles.inputStyle}
              status="primary"
              placeholder="Nhập tên"
              {...userName}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Input
              style={styles.inputStyle}
              status="primary"
              placeholder="Nhập email"
              {...userEmail}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Input
              style={styles.inputStyle}
              status="primary"
              placeholder="Nhập mật khẩu"
              //caption={renderCaption}
              accessoryRight={(props) => (
                <TouchableWithoutFeedback
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                  <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
                </TouchableWithoutFeedback>
              )}
              secureTextEntry={secureTextEntry}
              onChangeText={(nextValue) => setUserPassword(nextValue.trim())}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Input
              style={styles.inputStyle}
              status="primary"
              placeholder="Nhập lại mật khẩu"
              accessoryRight={(props) => (
                <TouchableWithoutFeedback
                  onPress={() => setReSecureTextEntry(!reSecureTextEntry)}
                >
                  <Icon
                    {...props}
                    name={reSecureTextEntry ? "eye-off" : "eye"}
                  />
                </TouchableWithoutFeedback>
              )}
              secureTextEntry={reSecureTextEntry}
              onChangeText={(nextValue) => setReUserPassword(nextValue.trim())}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <ButtonMain
            styleContainer={styles.styleContainer}
            styleButton={styles.styleButton}
            title="ĐĂNG KÍ"
            onPress={handleSubmitButton}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 30,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  styleContainer: {
    borderRadius: 20,
    minHeight: 40,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    height: 40,
  },
  styleButton: {},
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    margin: 2,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  button: {
    margin: 20,
  },
});
