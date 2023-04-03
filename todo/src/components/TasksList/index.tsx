import { FlatList, Image, Text, View } from "react-native";
import { Task } from "../../screens/Home";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

type TasksListProps = {
  tasks: Task[];
  onToggleTaskDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

export function TasksList({tasks, onToggleTaskDone, onRemoveTask}: TasksListProps) {
  return (
    <FlatList 
      style={styles.container}
      data={tasks.sort((a, b) => a.done ? 1 : -1)}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TaskItem 
          task={item} 
          onRemoveTask={onRemoveTask} 
          onToggleTaskDone={onToggleTaskDone}  
        />
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Image 
            source={require('../../../assets/empty-icon.png')}
            resizeMode="contain"
            style={styles.emptyImage}
          />
          <Text style={styles.emptyTitle}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.emptySubtitle}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      )}
    />
  )
}