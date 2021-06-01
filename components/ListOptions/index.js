import * as React from "react";
import { View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const List = ({ listData }) => {
    const navigation = useNavigation();
    return (
        <View>
            {listData.map((item, i) => (
                <ListItem containerStyle={{}} key={i} bottomDivider onPress={() => {navigation.navigate(item.link)}} >
                    <Icon
                        name={item.icon}
                        type={item.type}
                        color={item.color}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </View>
    );
};

export default List;
