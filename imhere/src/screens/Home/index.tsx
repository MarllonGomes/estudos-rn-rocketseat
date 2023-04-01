import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {

  const participants = [
    'Marllon Gomes',
    'Monicona Franco',
    'Maria AP',
    'Constantino Rodrigues',
    'Cidolina',
    'Zaya',
    'Minhau',
    'Jane',
    'Angelica',
    'Dalberto',
    'Angela'
  ];

  function handleParticipantAdd() {
    if(participants.includes('Marllon Gomes')) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista de participantes com este nome.');
    }
    console.log("Clicou no botão");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante', 
      `Deseja remover ${name} da lista de participantes?`,
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => console.log('Sim')}
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
