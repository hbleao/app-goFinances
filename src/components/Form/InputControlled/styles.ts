import { RFValue } from "react-native-responsive-fontsize";
import Styled, { css } from "styled-components/native";

export const Container = Styled.View`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const FieldError = Styled.Text`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 8px;
    color: ${theme.colors.attention};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;