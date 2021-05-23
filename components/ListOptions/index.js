import * as React from "react";
import { View } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const List = ({ listData }) => {
    return (
        <View>
            {listData.map((item, i) => (
                <ListItem containerStyle={{}} key={i} bottomDivider>
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
