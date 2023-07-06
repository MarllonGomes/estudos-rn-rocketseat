import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { groupsGetAll } from "../../storage/group/groupsGetAll";
import * as S from "./styles";
import { AppError } from "../../utils/AppError";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      setGroups(await groupsGetAll());
    } catch (error) {
      if(error instanceof AppError) {
        return Alert.alert('Listar Grupos', error.message);
      }
      console.error(error);
      return Alert.alert("Erro ao buscar turmas");
    }
  }

  function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={() => handleOpenGroup(item)} 
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada" />
        )}
      />
      <Button onPress={handleNewGroup} title="Criar nova turma" />
    </S.Container>
  );
}
