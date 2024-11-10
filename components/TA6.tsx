import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { Swipeable } from 'react-native-gesture-handler';

const TA6 = () => {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTaskList([...taskList, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (task) => {
    setTaskList(taskList.filter((t) => t !== task));
  };

  const renderRightActions = (task) => {
    return (
      <RectButton style={styles.deleteButton} onPress={() => removeTask(task)}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </RectButton>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa una nueva tarea"
        value={newTask}
        onChangeText={setNewTask}
      />
      <View style={styles.addButton}>
        <Text onPress={addTask}>añadir</Text>
      </View>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
            <Swipeable renderRightActions={() => renderRightActions(item)}>
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item}</Text>
              </View>
            </Swipeable>
        )}
      />
    </GestureHandlerRootView>
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
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%'
  },
  taskText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '22',
    width: 70,
    borderRadius: 10
  }
});

export default TA6;
