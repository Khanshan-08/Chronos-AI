import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const TypingIndicator = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  // Function to create a bounce animation for each dot
  const bounce = (dot) => {
    return Animated.sequence([
      Animated.timing(dot, {
        toValue: -8, // Increase bounce height for visibility
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(dot, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]);
  };

  useEffect(() => {
    // Start looping bounce animations with a stagger for each dot
    Animated.loop(
      Animated.stagger(150, [bounce(dot1), bounce(dot2), bounce(dot3)])
    ).start();
  }, [dot1, dot2, dot3]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot1 }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot2 }] }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot3 }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff', // Dark color for better contrast
    marginHorizontal: 4,
  },
});

export default TypingIndicator;