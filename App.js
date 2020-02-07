import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    <MealsNavigator />
  );
}