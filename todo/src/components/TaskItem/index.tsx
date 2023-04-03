import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../screens/Home";
import { styles } from "./styles";

type TaskItemProps = {
  task: Task;
  onToggleTaskDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

export function TaskItem({task, onToggleTaskDone, onRemoveTask}: TaskItemProps) {

  function handleClickRemoveTask() {
    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => onRemoveTask(task.id)
        }
      ]
    )
  }

  return (
    <View 
      style={task.done ? 
        {...styles.container, ...styles.containerDone} :
        styles.container
      }
    >
      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => onToggleTaskDone(task.id)}
      >
        <Image 
          style={styles.checkIcon}
          source={task.done ?
            require('../../../assets/done-icon.png') :
            require('../../../assets/undone-icon.png')
          }
        />
      </TouchableOpacity>
      
      <Text 
        style={task.done ?
          {...styles.text, ...styles.textDone} :
          styles.text
        }
      >
        {task.title}
      </Text>

      <TouchableOpacity
        style={styles.trashButton}
        onPress={handleClickRemoveTask}
      >
        <Image
          style={styles.trashIcon}
          resizeMode="contain"
          source={require('../../../assets/trash-icon.png')}
        />
      </TouchableOpacity>

    </View>
  )
}