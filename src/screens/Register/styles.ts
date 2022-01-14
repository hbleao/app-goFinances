import { RFValue } from 'react-native-responsive-fontsize';
import Styled, { css } from 'styled-components/native';

export const Container = Styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex:1;
  `}
`;

export const Form = Styled.View`
   ${({ theme }) => css`
    flex: 1;
    width: 100%;
    padding: ${RFValue(24)}px;
    justify-content: space-between;
  `}
`;

export const Fields = Styled.View``;

export const TransactionTypes = Styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0px 8px;
`;

export const Selection = Styled.View`
  margin-top: 16px
`;
