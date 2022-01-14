import Styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { CategoryActive } from './types';

export const Container = Styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Category = Styled(TouchableOpacity)<CategoryActive>`
  ${({ theme, isActive }) => css`
    flex: 1;
    width: 100%;
    padding: ${RFValue(16)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${isActive ? theme.colors.secondaryLight : theme.colors.background };
  `}
`;

export const Icon = Styled(Feather)`
  margin-right: 16px;
  font-size: ${RFValue(20)}px;
`;

export const CategoryName = Styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: 20px;
`;

export const Separator = Styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.text};
  `}
`;

export const Footer = Styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 24px;
  `}
`;
