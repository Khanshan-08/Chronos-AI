// components/screens/ChatDrawerNavigator.js
import React, { useState } from "react";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ScrollView, TouchableOpacity,Alert  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import ChatScreen from "../ChatScreen/ChatScreen";
import Help from "./help";
import Logout from "./logout";
import styles from "./DrawerStyle";
import { useUser } from "../contexts/UserContext";

const Drawer = createDrawerNavigator();

function ChatDrawerNavigator({ route }) {
  const navigation = useNavigation();
  const { userProfile } = route.params || {};
  const { firstName, lastName, picture } = userProfile || {};

  const [recentItems, setRecentItems] = useState([
    {
      id: 1,
      title: "Wireframe Description Description Description Description",
    },
    { id: 2, title: "Schedule a meeting." },
    { id: 3, title: "Feeling Fever" },
    { id: 4, title: "What are the symptoms of dyria?" },
  ]);

  console.log("coming form continue", firstName, lastName);
  const { user } = useUser();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.drawerHeader}>
            <Image
              source={
                picture ? { uri: picture } : require("../../images/s_icon.png")
              }
              style={styles.userImage}
            />
            <Text style={styles.userName}>{firstName}</Text>
          </View>

          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ width: "100%", height: 42 }}>
              <View style={{ height: 42, paddingLeft: 20, top: 10 }}>
                <Text style={styles.recentTitle}>Recents</Text>
              </View>
            </View>

            {recentItems.map((item) => (
              <View key={item.id} style={styles.recentItem}>
                <Image
                  style={styles.folderIcon}
                  source={require("../../images/folder_icon.png")}
                  resizeMode="contain"
                />
                <TouchableOpacity style={{ width: "70%", height: 24 }} onPress={() =>  navigation.navigate("ChatScreen", { title: item.title })} >
                  <Text
                    style={styles.recentText}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        headerStyle: styles.headerStyle,
        headerTintColor: styles.headerTintColor.color,
        headerTitleStyle: styles.headerTitleStyle,
        drawerActiveTintColor: styles.drawerActiveTintColor.color,
        drawerLabelStyle: styles.drawerLabelStyle,
      }}
    >
      <Drawer.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          drawerLabel: "Chat",
          title: "",
          drawerIcon: () => (
            <MaterialCommunityIcons name="chat" size={20} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTintColor: "#FFFFFF",
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerLabel: "Help",
          title: "Help",
          drawerIcon: () => (
            <MaterialCommunityIcons name="help-circle" size={20} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#20242D",
          },
          headerTintColor: "#FFFFFF",
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: "Logout",
          title: "Logout",
          drawerIcon: () => (
            <SimpleLineIcons name="logout" size={20} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#20242D",
          },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Drawer.Navigator>
  );
}

export default ChatDrawerNavigator;