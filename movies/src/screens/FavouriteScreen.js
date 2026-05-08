import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

export default function FavouriteScreen({ navigation }) {
  const favourites = useSelector(state => state.favourites.movies);

  return (
    <View style={styles.container}>
      {favourites.length === 0 ? (
        <Text style={styles.empty}>No Favourite Movies</Text>
      ) : (
        <FlatList
          data={favourites}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard movie={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  empty: {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
  },
});