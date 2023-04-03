import { View } from "react-native";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { styles } from "./styles";
import { Counters } from "../../components/Counters";
import { TasksList } from "../../components/TasksList";

export type Task = {
  id: string,
  title: string,
  done: boolean,
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: uuid.v4().toString(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(oldState => [...oldState, data]);
  }

  function handleToggleTaskDone(id: string) {
    setTasks(oldState => oldState.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        }
      }
      return task;
    }))
  }

  function handleRemoveTask(id: string) {
    setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form addTask={handleAddTask} />
      <Counters tasks={tasks} />
      <TasksList 
        tasks={tasks} 
        onToggleTaskDone={handleToggleTaskDone}
        onRemoveTask={handleRemoveTask}
      />
    </View>
  );
}
