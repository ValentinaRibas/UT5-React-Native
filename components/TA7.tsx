import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const TA7 = () => {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');
  const apiKey = 'f51cab6c';

  const searchMovie = async () => {
    if (movieName.trim()) {
      try {
        const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
        if (!response.ok){
            console.log(response);
            throw new Error("Error al obtener la película");
        }
        const data = await response.json();
        console.log(data);
        setMovieData(data);
        setError('');
      } catch (err) {
        setError('Error al buscar la película');
        setMovieData(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de una película"
        value={movieName}
        onChangeText={setMovieName}
      />
      <Button title="Buscar" onPress={searchMovie} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {movieData && (
        <View style={styles.movieContainer}>
          <Image source={{ uri: movieData.Poster }} style={styles.poster} />
          <Text style={styles.title}>{movieData.Title}</Text>
          <Text style={styles.plot}>{movieData.Plot}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  movieContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  plot: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TA7;
