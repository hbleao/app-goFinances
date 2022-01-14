import Styled, { css } from 'styled-components/native';
import { TouchableOpacity } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import { TypeProps, ContainerProps } from './types';

export const Container = Styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, isActive }) => css`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 1.5px solid ${isActive ? theme.colors.background : theme.colors.text};
    border-radius: 5px;
  `}

  ${({ theme, isActive, type }) => isActive && type === 'up' && css`
    background: ${theme.colors.successLight};
  `}

  ${({ theme, isActive, type }) => !isActive && type === 'up' && css`
    border: 1.5px solid ${theme.colors.successLight};
  `}

  ${({ theme, isActive, type }) => isActive && type === 'down' && css`
    background: ${theme.colors.attentionLight};
  `}

  ${({ theme, isActive, type }) => !isActive && type === 'down' && css`
    border: 1.5px solid ${theme.colors.attentionLight};
  `}
`;


export const Icon  = Styled(Feather)<TypeProps>`
${({ theme, type }) => css`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${type === 'up' ? theme.colors.success : theme.colors.attention };
  `}
`;

export const Title = Styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    line-height: 19px;
  `}

`;
