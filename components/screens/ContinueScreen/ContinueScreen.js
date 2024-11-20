import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styles from "./ContinueScreenStyle";
import { useFonts } from "expo-font";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

// Get window dimensions
const { width } = Dimensions.get("window");

// Define Google OAuth client IDs
const androidClientId =
  "795686246788-ao0a68k0mokjh8s17pai6uvb0b4gk085.apps.googleusercontent.com";
const iosClientId =
  "795686246788-n3cndiso7jb195n0sajnquqosvp15k3q.apps.googleusercontent.com";
const webClientId =
  "795686246788-5a7jsk7c9i4efm6k1r6dgo17fh99q9b7.apps.googleusercontent.com";

const ContinueScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Load fonts for the app (useFonts is a hook)
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("../fonts/Roboto/Roboto-Bold.ttf"),
  });

  // Slide data for the carousel
  const slides = [
    {
      text: "Let’s break",
      color: "#FFFFFF",
      image: require("../../images/circle.png"),
    },
    {
      text: "Need Help?",
      color: "#3D3D3D",
      image: require("../../images/white_circle.png"),
    },
    {
      text: "Have Questions?",
      color: "#FFC1C1",
      image: require("../../images/black_circle.png"),
    },
  ];

  // Handle carousel item snap
  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  // Google authentication configuration
  const config = {
    androidClientId,
    iosClientId,
    webClientId,
  };

  // Google authentication hook
  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const getUserProfile = async (token) => {
    if (!token) return; // early return if token is falsy

    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const user = await response.json();
      console.log("User profile:", user);

      // Extracting name and email from the user profile
      const { name, email,picture  } = user;

      // Splitting the full name into first and last name (assuming space-separated full name)
      const nameParts = name.split(" ");
      const firstName = nameParts[0]; // First part is first name
      const lastName = nameParts.slice(1).join(" "); // Remaining parts are last name(s)

      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("User Email:", email);
      console.log("User Image:", picture);

      // Storing values in state
      setUserProfile({ firstName, lastName, email,picture  });

      sendToBackend(firstName, lastName, email);

      // Optionally store these values in state or handle them in any other way
      return { firstName, lastName, email, picture };
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  

  const sendToBackend = async (firstName, lastName, email) => {
    console.log(`prfile data xx`,firstName);
    console.log(`prfile data xx`,lastName);
    console.log(`prfile data`,email);
    try {
      const response = await fetch('http://192.168.0.35:3000/chronos_ai/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User profile saved successfully', data);
      } else {
        console.error('Error saving user profile', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // Ensure authentication session is completed when the component mounts
  useEffect(() => {
    WebBrowser.maybeCompleteAuthSession(); // Ensures any ongoing authentication session is handled
  }, []);

  // Handle the token after successful authentication
  const handleToken = async () => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication?.accessToken) {
        console.log("Access token:", authentication.accessToken);
  
        // Fetch the user profile
        const userProfile = await getUserProfile(authentication.accessToken);
  
        if (userProfile) {
          const { firstName, lastName, picture } = userProfile;
          console.log("names and image for chat screen ", firstName, lastName, picture);
  
          // Navigate to the Chat screen with the user's name
          navigation.navigate("Chat", {
            userProfile: {
              firstName,
              lastName,
              picture,
            }
          });
          
        } else {
          console.log("Failed to fetch user profile.");
        }
      } else {
        console.log("Access token is missing.");
      }
    }
  };
  

  // Effect to handle authentication response (runs only when the response changes)
  useEffect(() => {
    console.log("Google auth response:", response);

    if (response?.type === "success") {
      handleToken();
    }

    if (response?.type === "error") {
      console.error("Google authentication error:", response);
      // Optionally, show an error message to the user
    }
  }, [response]);

  // If fonts are not loaded, show a loading indicator
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: slides[currentIndex].color },
      ]}
    >
      {/* Carousel */}
      <View style={styles.carousel_container}>
        <Carousel
          width={width}
          height={"60%"}
          data={slides}
          onSnapToItem={handleSnapToItem}
          renderItem={({ item }) => (
            <View
              style={[styles.carousel_slide, { backgroundColor: item.color }]}
            >
              <View style={styles.text_cont}>
                <Text
                  style={[
                    styles.break_text,
                    {
                      fontFamily: "Roboto-Bold",
                      color: item.color === "#FFFFFF" ? "#000" : "#FFF",
                    },
                  ]}
                >
                  {item.text}
                </Text>
              </View>
              <View style={styles.img_cont}>
                <Image source={item.image} style={styles.circleIcon} />
              </View>
            </View>
          )}
          autoPlay={true}
          autoPlayInterval={2000}
          loop={true}
        />
      </View>

      {/* Footer with Google authentication */}
      <View style={styles.footer_container}>
        <View style={styles.google_container}>
          <TouchableOpacity
            style={styles.google_box}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Chat")}
          >
            <View style={styles.google_content_box}>
              <View style={styles.google_img_box}>
                <Image
                  source={require("../../images/google.png")}
                  resizeMode="cover"
                  style={{width:24,height:24}}
                />
              </View>

              <View style={styles.text_box}>
                <Text
                  style={[styles.google_text, { fontFamily: "Roboto-Regular" }]}
                >
                  Continue with Google
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContinueScreen;