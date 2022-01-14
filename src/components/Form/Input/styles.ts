import Styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = Styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px;
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
    background-color: ${theme.colors.shape};
    color: ${theme.colors.textDark};
    border-radius: 5px;
    margin-bottom: 8px;
  `}
`;