import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>

      <Button
        type="SECONDARY"
        title="Remover turma"
        style={{ marginTop: 20 }}
      />
    </S.Container>
  );
}
