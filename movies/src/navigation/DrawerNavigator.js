import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#0B0B0B',
      }}>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator

      drawerContent={props => (
        <CustomDrawerContent {...props} />
      )}

      screenOptions={{
        headerStyle: {
          backgroundColor: '#0B0B0B',
        },

        headerTintColor: 'white',

        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },

        headerShadowVisible: false,

        drawerStyle: {
          backgroundColor: '#0B0B0B',
          width: 260,
        },

        drawerActiveBackgroundColor: '#E50914',

        drawerActiveTintColor: 'white',

        drawerInactiveTintColor: '#B0B0B0',

        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
          fontWeight: '600',
        },
      }}>

      {/* Home */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Favourites */}
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="heart"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}