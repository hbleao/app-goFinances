import Styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from "react-native";

export const Container = Styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius: 5px;
    align-items: center;
    padding: 16px;
  `}
`;

export const Title = Styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.shape};
  `}
`;