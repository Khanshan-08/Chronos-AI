import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';

const TypingAnimation = ({ text, typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textWidth, setTextWidth] = useState(0);
  const translateX = new Animated.Value(0);

  const textLength = text.length;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prevText => prevText + text[index]);
      index += 1;
      if (index === textLength) {
        clearInterval(interval); // Stop interval once all text is displayed
      }
    }, typingSpeed);

    // Animate text from right to left
    Animated.timing(translateX, {
      toValue: -textWidth, // Move left by the width of the text
      duration: typingSpeed * textLength,
      useNativeDriver: true,
    }).start();

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <View>
      <Animated.Text
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setTextWidth(width);
        }}
        style={{
          transform: [{ translateX }],
          overflow: 'hidden', // Prevent text from spilling out
          color: 'white', // Set text color to white
          fontSize: 20, // Set font size to 20
          fontWeight: '500', // Set font weight to 500
        }}
      >
        {displayedText}
      </Animated.Text>
    </View>
  );
};

export default TypingAnimation;