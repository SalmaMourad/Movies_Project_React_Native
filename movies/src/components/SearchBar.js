
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({
  value,
  onChange,
  onClear,
}) {
  return (
    <View style={styles.container}>
      
      <Ionicons
        name="search"
        size={22}
        color="#9CA3AF"
        style={styles.searchIcon}
      />

      <TextInput
        placeholder="Search movies..."
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />

      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Ionicons
            name="close-circle"
            size={22}
            color="#9CA3AF"
          />
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1A1A1A',

    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,

    paddingHorizontal: 15,
    height: 58,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  searchIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
});