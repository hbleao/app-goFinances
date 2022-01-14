import React from 'react';

import { 
  Container,
  Icon,
  Title
} from './styles';

import { icons } from '../../../constants/components/TransactionTypeButton'

import { TransactionTypeButtonProps } from './types';

export const TransactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: TransactionTypeButtonProps) => {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
