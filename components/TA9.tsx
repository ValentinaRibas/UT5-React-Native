import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const TA9 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistema operativo: {Platform.OS === 'ios' ? 'iOS' : 'Android'}
      </Text>
      {Platform.select({
        ios: (
          <Text style={styles.text}>
            Texto para iOS
          </Text>
        ),
        android: (
          <Text style={styles.text}>
            Texto para Android
          </Text>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default TA9;