import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = {
  title: string;
  type?: S.ButtonTypeStyleProps;
} & TouchableOpacityProps

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}