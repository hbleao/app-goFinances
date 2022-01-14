import React from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { 
  Container, 
  Form, 
  Fields, 
  TransactionTypes,
  Selection
} from './styles';

import { 
  InputControlled, 
  Button, 
  TransactionTypeButton, 
  Select,
  Header
} from '../../components';

import { CategorySelect } from '../CategorySelect';

import { PresentationProps } from './types';

export const Presentation = ({
  control,
  errors,
  transactionType,
  category,
  handleTransactionType,
  handleOpenCategoryModal,
  handleSubmit,
  handleSubmitRegister,
  categoryModalOpen,
  handleCloseCategoryModal,
  setCategory
}: PresentationProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title='Cadastro' />

        <Form>
          <Fields>
            <InputControlled 
              name="name"
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputControlled
              name="amount"
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />
            <TransactionTypes>
              <TransactionTypeButton
                type='up'
                title='income'
                isActive={transactionType === 'income'}
                onPress={() => handleTransactionType('income')}
              />
              <TransactionTypeButton
                type='down' 
                title='outcome'
                isActive={transactionType === 'outcome'}
                onPress={() => handleTransactionType('outcome')}
              />
            </TransactionTypes>
            <Selection>
              <Select
                title={category.name}
                onPress={handleOpenCategoryModal}  
              />
            </Selection>
          </Fields>
          <Button 
            text="Cadastrar" 
            onPress={handleSubmit(handleSubmitRegister)}
          />
        </Form>
        <Modal visible={categoryModalOpen} style={{ flex: 1 }} >
          <CategorySelect
            category={category}
            closeSelectCategory={handleCloseCategoryModal}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}