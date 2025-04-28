import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, // Take full screen height
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
        backgroundColor: '#fff',  // Background color (optional)
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});
