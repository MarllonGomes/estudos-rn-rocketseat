import { Text, View } from 'react-native';
import { styles } from './styles';
import { Task } from '../../screens/Home';

type Props = {
  tasks: Task[]
}

export function Counters({tasks}: Props) {

  const createdCount = tasks.length;
  const doneCount = tasks.filter(task => task.done).length;

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.counterNumber}>{createdCount}</Text>
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.doneText}>Concluídas</Text>
        <Text style={styles.counterNumber}>{doneCount}</Text>
      </View>
    </View>
  )
}