import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#a5e1ad",
    },
    rightbutton: {
        flexDirection: "row",
    },
    Cart: {
        backgroundColor: "#fff",
        flex: 1,
        minWidth: "80%",
        alignItems: "center",
        borderRadius: 4,
        elevation: 23,
        marginTop: 100,
    },
    Body: { alignItems: "center" },
    Avatar: {
        marginTop: -30,
        shadowColor: "#000",
        elevation: 9,
    },
    ContainerButton: {
        borderRadius: 10,
        margin: 10,
        elevation: 5,
    },
});

export default styles;
