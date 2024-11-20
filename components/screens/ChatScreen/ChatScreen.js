import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import styles from "./ChatScreenStyle.jsx";
import diseasesAndSymptoms from "../diseasesAndSymptoms.js";
import TypingAnimation from "../Animations/TextAnimation.js";
import TypingIndicator from "../Animations/TypingIndicator.js";
import * as Speech from "expo-speech";
import * as Clipboard from 'expo-clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get("window");

const ChatScreen = ({ route }) => {
  const navigation = useNavigation();
  const title = route?.params?.title || "Default Title"; 
  const [inputHeight, setInputHeight] = useState(53);
  const [inputText, setInputText] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showInitialContent, setShowInitialContent] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isliked, setIsliked] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);


  const scrollViewRef = useRef(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("../fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const questions = [
    "symptoms of Asthma?",
    "symptoms of Fever?",
    "What are the symptoms of Diarrhea?"
  ];

  // Function to handle sending messages
  const handleSend = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: inputText, name: "You",disliked: false },
      ]);
      setInputText(""); // Clear input
      setShowInitialContent(false); // Hide initial content

      const foundDisease = Object.keys(diseasesAndSymptoms).find((disease) =>
        inputText.toLowerCase().includes(disease.toLowerCase())
      );

      // Show typing indicator for 1 second before AI response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false); // Hide typing indicator
        if (foundDisease) {
          const diseaseData = diseasesAndSymptoms[foundDisease];
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "ai",
              text: `The symptoms of ${foundDisease} are: ${diseaseData.symptoms.join(
                ", "
              )}. \n\nTo treat ${foundDisease}, ${diseaseData.treatment}`,
              name: "ChronosAI",
              disliked: false
            },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "ai",
              text: "I'm sorry, I couldn't find information on that disease.",
              name: "ChronosAI",
              disliked: false
            },
          ]);
        }
      }, 2000);
    }
  };
  const handleContentSizeChange = (width, scrollview_height) => {
    console.log("Content container height:", scrollview_height);

      scrollViewRef.current.measure((x, y, width, height) => {
        console.log("Scroll view height:", height);
        console.log("Content container height:", scrollview_height)
        if (scrollview_height > height){
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
          }
        }
      });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });
  
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const footerHeight = keyboardVisible ? 120 : 200; // Adjust this value as needed

  // Auto-scroll to the bottom whenever messages or typing state changes
  /* useEffect(() => {
    if (scrollViewRef.current) {
      console.log("Scroll view ref:", scrollViewRef.current.height);
      scrollViewRef.current.measure((x, y, width, height) => {
        console.log("Scroll view height:", height);
      });
    }

  }, [messages, isTyping]);
  */

  //speak function 
  const speak = (text) => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      Speech.speak(text, {
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
      });
      setIsSpeaking(true);
    }
  };

  //dislike function where user can dislike response 
  const toggleDislike = (index) => {
    setMessages((prevMessages) =>
      prevMessages.map((message, i) =>
        i === index ? { ...message, disliked: !message.disliked } : message
      )
    );
  };

   //like function where user can like response 
  const togglelike = () => {
    setIsliked((prevState) => !prevState);
  };

   //copy function where user can copy AI  response 
  const handleCopy = async (text) => {
    await Clipboard.setStringAsync(text); 
    Alert.alert('Text copied to clipboard!'); 
    console.log('Text copied to clipboard:', text);
  };

  console.log("here is title from the recent history :",title);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <ImageBackground
      source={require("../../images/bg_img.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {showInitialContent && (
          <View
            style={[
              styles.Question_section_box,
              isInputFocused ? styles.shifted : null,
            ]}
          >
            <View style={styles.doctor_section_box}>
              <View style={styles.doc_img_box}>
                <Image
                  source={require("../../images/chat_doctor.png")}
                  style={{ width: 104, height: 117 }}
                />
              </View>
              <View style={styles.text_box}>
                <TypingAnimation
                  text="How can I help you today?"
                  typingSpeed={50}
                  style={styles.help_text}
                />
              </View>
            </View>

            <View style={styles.FQA_section_box}>
              <View style={styles.text_FAQ_box}>
                <Text style={{ fontSize: 13, color: "#65686E" }}>
                  Frequently asked questions
                </Text>
              </View>
              <View style={styles.FQA_content_box}>
                {questions.map((question, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.expandableView}
                    activeOpacity={0.4}
                    onPress={() => setInputText(question)}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 17,
                        color: "#ffffff",
                      }}
                    >
                      {question}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Chatbox with scrollable messages */}
        {!showInitialContent && 
        <View style={{marginTop: 60, maxHeight: (height * 0.85) - 120}}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.chatScrollView}
          onLayout={() => {
            if (scrollViewRef.current) {
              scrollViewRef.current.measure((x, y, width, height) => {
                console.log("Scroll view height on layout:", height);
              });
            }
          }}
          onContentSizeChange={handleContentSizeChange}
          contentContainerStyle={styles.chatContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}  
      showsHorizontalScrollIndicator={false}
        >
          <View style={styles.chat_box}>
            {messages.map((message, index) => (
              <View
                key={index}
                style={
                  message.type === "user" ? styles.user_chat : styles.AI_chat
                }
              >
                <View style={styles.user_info}>
                  <View style={styles.user_logo}>
                    <Image
                      source={
                        message.type === "user"
                          ? require("../../images/user_chat_icon.png")
                          : require("../../images/ai_icon.png")
                      }
                      style={{ width: 34, height: 34 }}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.user_name}>
                    <Text style={styles.user}>{message.name}</Text>
                  </View>
                </View>

                <View style={styles.chat_text_box}>
                  <Text style={{ fontSize: 16, color: "#fff", lineHeight: 26 }}>
                    {message.text}
                  </Text>
                  {message.type === "ai" && (
                    <View style={styles.AI_options}>
                      <TouchableOpacity onPress={() => speak(message.text)}>
                        <Image
                          source={
                            isSpeaking
                              ? require("../../images/speaker_icon_active.png")
                              : require("../../images/speaker_icon.png")
                          }
                          style={{ width: 19, height: 16 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => handleCopy(message.text)}>
                        <Image
                          source={require("../../images/copy.png")}
                          style={{ width: 14, height: 14, marginLeft: 10 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => toggleDislike(index)}>
                        <Image
                          source={
                            message.disliked
                              ? require("../../images/dislike_active.png")
                              : require("../../images/dislike.png")
                          }
                          style={{ width: 15, height: 14, marginLeft: 10 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image
                          source={require("../../images/reload.png")}
                          style={{ width: 14, height: 15, marginLeft: 10 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={togglelike}>
                      <Image
                        source={
                          isliked
                          ? require("../../images/like_active.png")
                          : require("../../images/like.png")
                        }
                        style={{ width: 15, height: 14, marginLeft: 10 }}
                      />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))}

            {isTyping && (
              <View style={styles.AI_chat}>
                <View style={{ marginLeft: "10%" }}>
                  <TypingIndicator style={{ marginLeft: 20 }} />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
        </View>
}
        {/* Input area and send button */}
        <View style={styles.footer}>
          <View style={styles.footer_content}>
          <View style={[styles.chat_input_box, { height: inputHeight }]}>
            <View style={[styles.input_box, { height: inputHeight }]}>
              <TextInput
                placeholder="Type here...."
                placeholderTextColor="#65686E"
                value={inputText}
                multiline={true}
                scrollEnabled={true}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onChangeText={(text) => setInputText(text)}
                onContentSizeChange={(contentWidth, contentHeight) => {
                  setInputHeight(contentHeight > 53 ? contentHeight : 53);
                }}
                style={[styles.textInput, { height: inputHeight }]}
              />
            </View>

            <TouchableOpacity style={styles.voice_box}>
              <Image source={require("../../images/voice.png")} style={{width:15,height:22}} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.proceed_button_box}
            onPress={handleSend}
          >
            <Image
              source={require("../../images/arrow_btn.png")}
              resizeMode="cover"
              style={{ width: 54, height: 54 }}
            />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;