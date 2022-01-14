import React from 'react';
import { Container, Title } from './styles';

import { ButtonProps } from './types';

export const Button = ({ text, onPress, ...rest }: ButtonProps) => {

  return (
    <Container onPress={onPress} {...rest}>
      <Title>{text}</Title>
    </Container>
  )
}
