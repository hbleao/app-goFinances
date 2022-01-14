import React from 'react';
import { Controller } from 'react-hook-form';

import { Input } from '../Input';

import { Container, FieldError } from './styles';

import { InputControlledProps } from './types';

export const InputControlled = ({ 
  control,
  name,
  error,
  ...rest
}: InputControlledProps) => {

  return (
    <Container>
      <Controller 
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {!!error && <FieldError>{error}</FieldError>}
    </Container>
  )
}