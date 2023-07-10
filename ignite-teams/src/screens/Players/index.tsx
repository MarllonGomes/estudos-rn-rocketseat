import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, FlatList, Keyboard } from "react-native";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "../../storage/player/playerGetByGroupAndTeam";
import { playerRemoveByGroup } from "../../storage/player/playerRemoveByGroup";
import { AppError } from "../../utils/AppError";
import * as S from "./styles";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";
import { Loading } from "../../components/Loading";

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const navigation = useNavigation();
  const { group } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);

  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchPlayers();
    }, [team])
  );

  async function fetchPlayers() {
    setIsLoading(true);
    try {
      const players = await playerGetByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Ops!", error.message);
      }

      return Alert.alert("Ops!", "Não foi possível carregar os jogadores");
    }
    setIsLoading(false);
  }

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Ops!", "Informe o nome do jogador");
    }

    try {
      await playerAddByGroup({ name: newPlayerName, team: team }, group);
      fetchPlayers();
      setNewPlayerName("");
      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Ops!", error.message);
      }

      return Alert.alert("Ops!", "Não foi possível adicionar o jogador");
    }
  }

  async function handleRemovePlayer(player: string) {
    try {
      await playerRemoveByGroup(player, group);
      fetchPlayers();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Ops!", error.message);
      }

      return Alert.alert("Ops!", "Não foi possível remover o jogador");
    }
  }

  function handleClickRemoveGroup() {
    Alert.alert("Remover turma", "Tem certeza que deseja remover essa turma?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => handleRemoveGroup() },
    ]);
  }

  async function handleRemoveGroup() {
    try {
      await groupRemoveByName(group);

      navigation.navigate("groups");
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Ops!", error.message);
      }

      return Alert.alert("Ops!", "Não foi possível remover a turma");
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <S.Form>
        <Input
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              text={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <PlayerCard name={item} onRemove={() => handleRemovePlayer(item)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhum jogador adicionado" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}

      <Button
        type="SECONDARY"
        title="Remover turma"
        style={{ marginTop: 20 }}
        onPress={() => handleClickRemoveGroup()}
      />
    </S.Container>
  );
}
