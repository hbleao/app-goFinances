import React from 'react';

import { 
  Container,
  Header,
  Title,
  IconArrow,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

import { kindIcons } from '../../constants/components/HighLightCard';

import { HighLightCardProps } from './types';

export const HighLightCard = ({ 
  kind,
  title,
  amount, 
  lastTransaction
}: HighLightCardProps) => {

  return (
    <Container kind={kind}>
      <Header>
        <Title kind={kind}>{title}</Title>
        <IconArrow 
          name={kindIcons[kind]} 
          kind={kind} 
        />
      </Header>
      <Footer>
        <Amount kind={kind}>{amount}</Amount>
        <LastTransaction kind={kind}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}