import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const TA8 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tamaño de pantalla: {width} x {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: width > 350 ? 24 : 18,
    color: height > 600 ? 'blue' : 'red',
  },
});

export default TA8;
