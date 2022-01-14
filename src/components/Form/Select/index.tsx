import React from 'react';

import { Container, Category, Icon } from './styles';

import { SelectProps } from './types';

export const Select = ({ title, onPress }: SelectProps) => {

  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
}