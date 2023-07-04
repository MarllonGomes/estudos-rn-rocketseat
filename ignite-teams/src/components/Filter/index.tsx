import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & S.FilterStyleProps & {
  text: string;
};

export function Filter({ text, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}