import {View, Text} from 'react-native';
import React from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
