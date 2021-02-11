import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../config/firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
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

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
