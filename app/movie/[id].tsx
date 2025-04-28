import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const MovieDetails = () => {
    // Correctly destructure the id from useLocalSearchParams
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            {/* Display the id properly - added conditional rendering */}
            <Text style={styles.text}>Movie Details: {id || 'No ID provided'}</Text>
        </View>
    );
};

export default MovieDetails; // Changed the export name to match the component name

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});