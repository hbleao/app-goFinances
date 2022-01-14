import Styled, { css } from 'styled-components/native';
import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

import { DataListProps } from './types';

export const Container = Styled.View`
  ${({ theme }) => css`
    flex: 1;
  `}
`;

export const Header = Styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  `}
`;

export const UserWrapper = Styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  `}
`;

export const UserInfo = Styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const Photo = Styled.Image`
  ${({ theme }) => css`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
  `}
`;

export const User = Styled.View`
  ${({ theme }) => css`
    margin-left: 16px;
  `}
`;

export const UserGreeting = Styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    line-height: 20px;
  `}
`;

export const UserName = Styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.bold};
    font-size:  ${RFValue(18)}px;
    line-height: 20px;
  `}
`;

export const IconPower = Styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.bold};
    font-size:  ${RFValue(24)}px;
  `}
`;

export const HighLightCards = Styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
  `}
`;

export const Transations = Styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
  `}
`;

export const TransationsTitle = Styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular}
    margin-bottom: 16px;
  `}
`;

export const TransactionList = Styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const LogoutButton = Styled(TouchableOpacity)`
  ${({ theme }) => css`

  `}
`;
