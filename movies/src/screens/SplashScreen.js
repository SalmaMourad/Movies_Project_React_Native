import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Movies App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },

  logo: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
});