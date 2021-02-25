import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  //getting name initials
  const getInitials = (string) => {
    let names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  let userInitials = getInitials(chatName);

  return (
    <ListItem
      onPress={() => enterChat(id, chatName, userInitials)}
      key={id}
      bottomDivider
    >
      <Avatar
        size={50}
        rounded
        // source={{
        //   uri:
        //     "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        // }}
        title={userInitials}
        titleStyle={{ fontWeight: "600", fontSize: 22 }}
        backgroundColor="#BDBDBD"
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "700" }}>
          {chatName}
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
