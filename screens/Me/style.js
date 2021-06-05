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
    Card: {
        backgroundColor: "#fff",
        minWidth: "80%",
        alignItems: "center",
        borderRadius: 4,
        // elevation: 10,
        marginTop: 100,
        marginBottom: 10,
    },
    Body: { alignItems: "center" },
    Button: {
        margin: 10,
        minWidth: 100,
    },
    Info: {
        margin: 10,
        alignItems: "center",
    },
    Setting: {
        marginBottom: 10,
        minWidth: "80%",
        borderRadius: 4,
        backgroundColor: "#fff",
        padding: 5,
    },
});

export default styles;
