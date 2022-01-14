import React, { useState } from 'react';
import { Alert } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';

import { Presentation } from './presentation';

import { useForm } from 'react-hook-form';

import { FormData } from './types';
import { storageKey } from '../../constants/storage';
import { schema } from '../../constants/screens/Register';
import { useTransaction } from '../../hooks/useTransaction';

export const Register = ({ navigation }: any) => {
  const { postTransactionIntoAsyncStorage } = useTransaction();
  const { 
    control,
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [transactionType, setTransactionType] = useState<'income' | 'outcome'>('income');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'name',
  });

  function handleTransactionType (type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  function handleCloseCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenCategoryModal() {
    setCategoryModalOpen(true);
  }

  async function handleSubmitRegister(form: FormData) {
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação');
    }

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const dataFormRegister = {
      id: String(uuid.v4()),
      name: form.name,
      type: transactionType,
      amount: form.amount,
      categoryKey: category.key,
      date: new Date()
    }

    await postTransactionIntoAsyncStorage({
      storageKey: storageKey.transactions,
      transaction: dataFormRegister
    });

    setTransactionType('income');
    setCategory({ key: 'category', name: 'name' });
    reset();

    navigation.navigate('Listagem');
  }

  return (
    <Presentation
      control={control}
      errors={errors}
      transactionType={transactionType}
      category={category}
      handleTransactionType={handleTransactionType}
      handleOpenCategoryModal={handleOpenCategoryModal}
      handleSubmit={handleSubmit}
      handleSubmitRegister={handleSubmitRegister}
      categoryModalOpen={categoryModalOpen}
      handleCloseCategoryModal={handleCloseCategoryModal}
      setCategory={setCategory}
    />
  )
}
