import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Input } from "@components/Input";

export function NewGroup() {

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight 
          title="Nova turma" 
          subtitle="Crie a turma para adicionar as pessoas" 
        />
        <Input />
        
        <Button title="Criar turma" style={{marginTop: 20}} />
      </S.Content>
    </S.Container>
  );
}
