import React, {useState} from 'react';
import { Button, TextInput, View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
      if (task.trim()) {
          setTasks([...tasks, { id: Date.now().toString(), title: task }]);
          setTask('');
      }
  };
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
};

return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Add a new task"
            value={task}
            onChangeText={setTask}
        />
        <Button title="Add Task" onPress={addTask} />
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.taskContainer}>
                    <Text>{item.title}</Text>
                    <TouchableOpacity onPress={() => removeTask(item.id)}>
                        <Text style={styles.removeText}>Remove</Text>
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
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    removeText: {
        color: 'red',
    },
});

export default App;


