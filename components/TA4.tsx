import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const TA4 = () => {
  const [image, setImage] = useState(require('../assets/images/cat.jpg'));

  const changeImage = () => {
    setImage((prevImage) =>
      prevImage === require('../assets/images/cat.jpg')
        ? require('../assets/images/dog.jpg')
        : require('../assets/images/cat.jpg')
    );
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Button title="Cambiar Imagen" onPress={changeImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default TA4;
