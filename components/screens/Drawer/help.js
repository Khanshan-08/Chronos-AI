import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/HelpStyle';

export default function Help() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Help & Support</Text>
            
            <View style={styles.section}>
                <Text style={styles.title}>How to Use Chronos</Text>
                <Text style={styles.content}>
                    1. Ask AI about diseases by typing symptoms or names.{"\n"}
                    2. Get detailed information on symptoms and treatments.{"\n"}
                    3. Use the chat interface for accurate answers.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.title}>FAQ's</Text>
                <Text style={styles.content}>
                    <Text style={styles.question}>Q: Is Chronos free to use?{"\n"}</Text>
                    A: Yes, it's completely free.{"\n\n"}
                    <Text style={styles.question}>Q: Can I rely on the information?{"\n"}</Text>
                    A: Always consult a medical professional for serious issues. Chronos provides general advice.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.title}>Need More Help?</Text>
                <Text style={styles.content}>
                    If you have any issues or suggestions, feel free to reach out to us.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Contact Support</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

