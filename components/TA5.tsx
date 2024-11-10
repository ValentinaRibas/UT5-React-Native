import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const gallery = [
  { img: require('../assets/images/cat.jpg'), title: 'Gato' },
  { img: require('../assets/images/dog.jpg'), title: 'Perro' },
  { img: require('../assets/images/horse.jpg'), title: 'Caballo' },
];

const TA5 = () => {
  return (
    <FlatList data={gallery} renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.img} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 30
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default TA5;
