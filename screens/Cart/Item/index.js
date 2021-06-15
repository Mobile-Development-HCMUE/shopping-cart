import React from "react";
import { view } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import SwipeRow from "components/SwipeRow";
import { useSelector } from "react-redux";

interface ItemProps {
    onDelete: () => void;
}

const Items = ({ onDelete, item }: ItemProps) => {
    const leftBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_LEFT
    );
    const rightBackgroundButton = useSelector(
        (state) => state.theme.theme.HEADER_RIGHT
    );
    const [isPress, setIsPress] = React.useState(true);
    return (
        <SwipeRow onDelete={onDelete}>
            <Image
                containerStyle={{
                    width: "30%",
                    backgroundColor: leftBackgroundButton,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 20,
                    margin: 15,
                }}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/test-b067a.appspot.com/o/avatar%2Fy8VAjfhZQSh6kK2wJTSK3ES6M8A3?alt=media&token=3a76fb02-5fcd-4f14-b663-d6a0c202c511",
                }}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    TEAM-IT
                </Text>
            </Image>
            <View style={{}}>
                <Text
                    style={{
                        fontWeight: "bold",
                        justifyContent: "center",
                        marginTop: 10,
                        alignContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                    }}
                >
                    Miễn phí 30k phí ship đơn từ 100k
                </Text>
            </View>
        </SwipeRow>
    );
};

export default Items;
