import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      {/* Splash  */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      {/* Drawer */}
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
      />

      {/* Details */}
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />

    </Stack.Navigator>
  );
}