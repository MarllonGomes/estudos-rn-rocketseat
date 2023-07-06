import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";
import { Alert } from "react-native";
import { AppError } from "../../utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if(group.trim().length === 0) {
        throw new AppError('Informe o nome da turma');
      }

      await groupCreate(group);
      setGroup("");
      navigation.navigate("players", { group });
    } catch (error) {
      if(error instanceof AppError) {
        return Alert.alert('Novo Grupo', error.message);
      }
      console.error(error);
      return Alert.alert("Erro ao criar turma");
    }
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input onChangeText={setGroup} placeholder="Nome da turma" />

        <Button
          title="Criar turma"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </S.Content>
    </S.Container>
  );
}
