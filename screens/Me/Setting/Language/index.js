import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Card, Icon, ListItem } from "react-native-elements";
import { Text } from "@ui-kitten/components";
import { List } from "components/ListOptions/index.js";

const LanguageScreen = () => {
    return (
        <ScrollView>
            <View style={styles.Setting}>
                <ListItem>
                    <Icon name="language" type="ionicon"></Icon>
                    <ListItem.Content>
                        <ListItem.Title>Tiếng Việt</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron></ListItem.Chevron>
                </ListItem>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default LanguageScreen;
