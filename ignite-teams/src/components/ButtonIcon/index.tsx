import * as S from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconTypeStyleProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ type = 'PRIMARY', icon, ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
}
