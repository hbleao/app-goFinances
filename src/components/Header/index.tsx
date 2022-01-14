import React from 'react';

import { Container, Title } from './styles';

import { HeaderProps } from './types';

export const Header = ({ title }: HeaderProps) => {

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
