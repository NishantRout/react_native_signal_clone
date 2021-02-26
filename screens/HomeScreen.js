import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../config/firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, [chats]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "transparent", // this covers iOS
        elevation: 0,
      },
      headerTitleStyle: { color: "#000" },
      headerTintColor: "#000",
      headerLeft: () => (
        <View
          style={{
            marginLeft: 18,
          }}
        >
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              size={27}
              rounded
              source={{ uri: auth?.currentUser?.photoURL }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 80,
            marginRight: 18,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name="camera" color="black" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("AddChat")}
          >
            <SimpleLineIcons name="pencil" color="black" size={20} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id: id,
      chatName: chatName,
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <ScrollView style={styles.container}>
        <View style={styles.search}>
          <SimpleLineIcons name="magnifier" color="#A8A8A8" size={15} />
          <TextInput
            style={{ marginLeft: 8, fontWeight: "400", fontSize: 16 }}
            placeholder="Search"
            placeholderTextColor="#A8A8A8"
            color="#333"
          />
        </View>

        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  search: {
    height: 35,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
