import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Styled, { css } from "styled-components/native";

export const Container = Styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 16px;
  `}
`;

export const Category = Styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;

export const Icon = Styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`;