import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {

  const [group, setGroup] = useState('');	
  const navigation = useNavigation();  

  function handleNew() {
    navigation.navigate('players', { group });
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
        
        <Button title="Criar turma" style={{marginTop: 20}} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
}
