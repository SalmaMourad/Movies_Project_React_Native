import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

import {
  getPopularMovies,
  searchMovies,
} from '../api/moviesApi';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getPopularMovies();
    setMovies(data);
  };

  const handleSearch = async text => {
    setSearch(text);

    if (text.trim() === '') {
      fetchMovies();
    } else {
      const data = await searchMovies(text);
      setMovies(data);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChange={handleSearch}
        onClear={() => {
          setSearch('');
          fetchMovies();
        }}
      />
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});