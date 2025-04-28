import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Saved = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Saved</Text>
        </View>
    );
};

export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});
