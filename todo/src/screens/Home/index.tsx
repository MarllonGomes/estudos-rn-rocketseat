import { View } from "react-native";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { styles } from "./styles";
import { Counters } from "../../components/Counters";

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

  return (
    <View style={styles.container}>
      <Header />
      <Form addTask={handleAddTask} />
      <Counters tasks={tasks} />
    </View>
  );
}
