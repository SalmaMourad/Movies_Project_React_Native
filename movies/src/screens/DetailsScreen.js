import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.posterContainer}>
          
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.poster}
          />

          <LinearGradient
            colors={[
              'transparent',
              'rgba(0,0,0,0.4)',
              '#0B0B0B',
            ]}
            style={styles.gradient}
          />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.favButton}>
            <Ionicons
              name="heart-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>

        </View>

        <View style={styles.content}>
          
          <Text style={styles.title}>
            {movie.title}
          </Text>

          <View style={styles.infoRow}>
            
            <View style={styles.infoCard}>
              <Ionicons
                name="star"
                size={18}
                color="#FFD700"
              />

              <Text style={styles.infoText}>
                {movie.vote_average}
              </Text>
            </View>

            <View style={styles.infoCard}>
              <Ionicons
                name="calendar-outline"
                size={18}
                color="#4DA6FF"
              />

              <Text style={styles.infoText}>
                {movie.release_date}
              </Text>
            </View>

          </View>

          <Text style={styles.heading}>
            Story Line
          </Text>

          <Text style={styles.description}>
            {movie.overview}
          </Text>

          <View style={styles.buttonsContainer}>
            
            <TouchableOpacity style={styles.watchButton}>
              <Ionicons
                name="play"
                size={20}
                color="white"
              />

              <Text style={styles.watchText}>
                Watch Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadButton}>
              <Ionicons
                name="download-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>

          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },

  posterContainer: {
    position: 'relative',
  },

  poster: {
    width: width,
    height: height * 0.65,
  },

  gradient: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 250,
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  favButton: {
    position: 'absolute',
    top: 55,
    right: 20,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    paddingHorizontal: 22,
    marginTop: -40,
    paddingBottom: 40,
  },

  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 18,
    lineHeight: 42,
  },

  infoRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 18,
    marginRight: 12,
  },

  infoText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '600',
  },

  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    color: '#CFCFCF',
    fontSize: 16,
    lineHeight: 30,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 35,
    alignItems: 'center',
  },

  watchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E50914',
    paddingVertical: 16,
    borderRadius: 18,
    flex: 1,
    marginRight: 15,
  },

  watchText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  downloadButton: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});