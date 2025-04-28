import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import {images} from "a/constants/images";
import {Image, ImageBackground, Text} from "react-native";
import {icons} from "a/constants/icons";

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false, // 👈 Move it here
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
        </Tabs>
    );
};

export default _Layout;

const styles = StyleSheet.create({});
