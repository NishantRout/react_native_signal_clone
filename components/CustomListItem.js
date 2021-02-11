import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = ({ id, chatnName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        size={50}
        rounded
        source={{
          uri:
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "700" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
