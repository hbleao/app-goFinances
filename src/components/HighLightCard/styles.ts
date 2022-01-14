import Styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { kindProps } from './types';

export const Container = Styled.View<kindProps>`
  ${({ theme, kind }) => css`
    width: ${RFValue(300)}px;
    background-color: ${kind === 'total' ? theme.colors.secondary :  theme.colors.shape};
    border-radius: 10px;
    padding: 16px 24px;
    margin-right: 16px;
  `}
`;

export const Header = Styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Title = Styled.Text<kindProps>`
  ${({ theme, kind }) => css`
    color: ${kind === 'total'
      ? theme.colors.shape
      : theme.colors.textDark};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;


export const IconArrow = Styled(Feather)<kindProps>`
  font-size: ${RFValue(40)}px;

  ${({ kind }) => kind === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `}
  ${({ kind }) => kind === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}
  ${({ kind }) => kind === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `}
`;

export const Footer = Styled.View``;

export const Amount = Styled.Text<kindProps>`
  ${({ theme, kind }) => css`
    width: 100%;
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(40)}px;
    color: ${kind === 'total'
    ? theme.colors.shape 
    : theme.colors.textDark};
    margin-top: 38px;
  `}
`;

export const LastTransaction = Styled.Text<kindProps>`
  ${({ theme, kind }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${kind === 'total'
    ? theme.colors.shape 
    : theme.colors.text};
  `}
`;
