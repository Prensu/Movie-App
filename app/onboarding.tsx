import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding</Text>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // optional: makes background white
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});
