/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Navigation from "./src/components/Navigation"

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return <Navigation />
}

export default App;
