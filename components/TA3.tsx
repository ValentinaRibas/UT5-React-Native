import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TA3 = () => {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, newTask ]);
    setNewTask('');
  }

  const removeTask = (task) => {
    setTaskList(taskList.filter((t) => t !== task));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa una nueva tarea"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Añadir" onPress={addTask} />
      <FlatList
        data={taskList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(item)}>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  taskText: {
    fontSize: 18,
    paddingHorizontal: 5
  }
});

export default TA3;
