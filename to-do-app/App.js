import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>
          <View styke={styles.items}>
            {
              taskItems.map((item, index) => {
                return <Task key={index} text={item} />
              })
            }
            <Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
          </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Adicione uma nova tarefa'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: bold,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: row,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#c0c0c0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    borderWidth: 1,
  }
});
