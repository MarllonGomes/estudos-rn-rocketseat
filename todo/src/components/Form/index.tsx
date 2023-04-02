import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  addTask: (task: string) => void;
}

export function Form({ addTask }: Props) {

  const [taskText, setTaskText] = useState('');

  function handleAddNewTask() {
    if(taskText.trim() === '') {
      return Alert.alert('Escreva o nome da tarefa');
    }
    addTask(taskText);
    setTaskText('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddNewTask}
      >
        <Image 
          source={require("../../../assets/plus.png")} 
          resizeMode="contain"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}