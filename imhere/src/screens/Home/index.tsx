import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista de participantes com este nome.');
    }
    
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante', 
      `Deseja remover ${name} da lista de participantes?`,
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name));
        }}
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          value={participantName}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => `${item}${Math.random()}`}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante adicionado</Text>
        )}
      />
    </View>
  );
}
