import { RFValue } from 'react-native-responsive-fontsize';
import Styled, { css } from 'styled-components/native';


export const Container = Styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(112)}px;
    background-color: ${theme.colors.primary};
    padding-bottom: 24px;
    align-items: center;
    justify-content: flex-end;
  `}
`;

export const Title = Styled.Text`
   ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
  `}
`;