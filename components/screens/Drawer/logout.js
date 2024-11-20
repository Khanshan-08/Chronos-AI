import React, { useState } from "react";
import { View, Text, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import styles from "../styles/LogoutStyle";

export default function Logout({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout canceled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setIsLoading(true); // Show loader

            setTimeout(() => {
              try {
                // Add your logout logic here (e.g., API call, state reset)
                setIsLoading(false); // Hide loader
                Alert.alert("Logout Successful", "You have been logged out.");
                navigation.navigate("Continue");
              } catch (error) {
                setIsLoading(false);
                Alert.alert("Error", "An error occurred during logout. Please try again.");
              }
            }, 2000);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goodbye!</Text>
      <Text style={styles.infoText}>
        We're sad to see you go! Logging out ensures your account remains secure.
      </Text>
      <Text style={styles.infoText}>
        If you have any questions or need assistance, feel free to contact our support team.
      </Text>

      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#03375C" />
          <Text style={styles.loadingText}>Logging out...</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.logout_button, isLoading && styles.disabled_button]}
          onPress={handleLogout}
          disabled={isLoading}
        >
          <Text style={styles.logout_text}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
