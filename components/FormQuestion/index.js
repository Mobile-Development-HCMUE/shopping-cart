import React, { useState } from "react";
import { Overlay, Button } from "react-native-elements";
const FormOvelay = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <Text>{text}</Text>
      <Button
        containerStyle={styles.container1}
        buttonStyle={styles.styles1}
        title="Có"
      ></Button>
      <Button
        containerStyle={styles.container1}
        buttonStyle={styles.styles1}
        type="outline"
        title="Không"
      ></Button>
    </Overlay>
  );
};

const styles = StyleSheet.creat({
  container1: {
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 8,
    borderRadius: 8,
  },
  styles1: { borderRadius: 8 },
});
export default FormOvelay;
