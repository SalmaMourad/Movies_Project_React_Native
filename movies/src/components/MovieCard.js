import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';

import {
  addFavourite,
  removeFavourite,
} from '../redux/favouriteSlice';

const { width } = Dimensions.get('window');

export default function MovieCard({
  movie,
  navigation,
}) {

  const dispatch = useDispatch();

  const favourites = useSelector(
    state => state.favourites.movies
  );

  const isFavourite = favourites.some(
    item => item.id === movie.id
  );

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(movie));
    } else {
      dispatch(addFavourite(movie));
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        navigation.navigate('Details', { movie })
      }>

      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.image}
      />

      <LinearGradient
        colors={[
          'transparent',
          'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.9)',
        ]}
        style={styles.overlay}
      />

      <TouchableOpacity
        style={styles.favouriteButton}
        onPress={handleFavourite}>

        <Ionicons
          name={
            isFavourite
              ? 'heart'
              : 'heart-outline'
          }
          size={24}
          color={
            isFavourite
              ? '#FF3040'
              : 'white'
          }
        />
      </TouchableOpacity>

      <View style={styles.content}>

        <Text
          numberOfLines={1}
          style={styles.title}>
          {movie.title}
        </Text>

        <View style={styles.bottomRow}>

          <View style={styles.ratingContainer}>
            <Ionicons
              name="star"
              size={16}
              color="#FFD700"
            />

            <Text style={styles.rating}>
              {movie.vote_average}
            </Text>
          </View>

          <Text style={styles.date}>
            {movie.release_date}
          </Text>

        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,

    height: 420,

    alignSelf: 'center',

    marginVertical: 15,

    borderRadius: 28,

    overflow: 'hidden',

    backgroundColor: '#111',

    elevation: 10,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',

    width: '100%',
    height: '100%',
  },

  favouriteButton: {
    position: 'absolute',

    top: 18,
    right: 18,

    width: 45,
    height: 45,

    borderRadius: 25,

    backgroundColor: 'rgba(0,0,0,0.45)',

    justifyContent: 'center',
    alignItems: 'center',

    backdropFilter: 'blur(10px)',
  },

  content: {
    position: 'absolute',

    bottom: 0,

    width: '100%',

    padding: 20,
  },

  title: {
    color: 'white',

    fontSize: 26,

    fontWeight: 'bold',

    marginBottom: 12,
  },

  bottomRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  ratingContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.15)',

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 14,
  },

  rating: {
    color: 'white',

    marginLeft: 5,

    fontSize: 15,

    fontWeight: '600',
  },

  date: {
    color: '#D1D1D1',

    fontSize: 14,
  },
});