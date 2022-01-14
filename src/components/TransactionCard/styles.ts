import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import Styled, { css } from "styled-components/native";

import { TypesProps } from './types';

export const Container = Styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 5px;
    padding: 16px 24px;
    margin-bottom: 16px;
  `}
`;

export const Title = Styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `}
`;

export const Amount = Styled.Text<TypesProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.fonts.regular};
    margin-top: 2px;
    color: ${type === 'income' ?  theme.colors.success : theme.colors.attention};
  `}
`;

export const Footer = Styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
`;

export const Category = Styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = Styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
  `}
`;

export const CategoryName = Styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(17)}px;
    color: ${theme.colors.text};
    margin-left: 16px;
  `}
`;

export const Date = Styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(17)}px;
    color: ${theme.colors.text};
  `}
`;
