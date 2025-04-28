import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { Tabs } from 'expo-router'; // Make sure you have this installed

const _Layout = () => {
  return (
      <Tabs>
        <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: false,
            }}
        />
      </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
