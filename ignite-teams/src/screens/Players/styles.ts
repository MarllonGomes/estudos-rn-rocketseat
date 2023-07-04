import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))`
  align-self: center;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  
  min-height: 56px;
  max-height: 56px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderList = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;

  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-right: 5px;
`;