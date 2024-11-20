import React, { useEffect } from 'react';
import { View, Text, Button,StatusBar,SafeAreaView,Image, ImageBackground  } from 'react-native';
import styles from './SplashScreenStyle';
import Chronos from "../../images/chronos_text.svg"

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Continue'); 
    }, 2000); 

  
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <ImageBackground 
      source={require('../../images/bg_img.png')} 
      style={styles.backgroundImage} 
      resizeMode="cover" 
    >
       <StatusBar barStyle="light-content" backgroundColor="#2E323A" />
       <View style={styles.image_container}> 
        <Image source={require("../../images/doctor.png")} resizeMode="cover"/>
       </View>

       <View style={styles. chronos_text_box}>
      <Chronos />
       </View>
        </ImageBackground>
  );
};

export default SplashScreen;