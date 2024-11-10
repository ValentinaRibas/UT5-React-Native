import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TA2 = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ingrese el texto..." value={text} onChangeText={setText}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: 'blue'
  }
});

export default TA2;