import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TransactionProps, AsyncStorageProviderProps, AsyncStorageContextProps, TransactionByIdProps, postTransactionIntoAsyncStorage } from './types';
import { formattedDateByMonth } from '../../helpers';
import { storageKey } from '../../constants/storage';

export const AsyncStorageContext = createContext({} as AsyncStorageContextProps);

export const AsyncStorageProvider = ({ children }: AsyncStorageProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function getTransactionsIntoAsyncStorage(storageKey: string) {
    const transactionsStorage = await AsyncStorage.getItem(storageKey);
    const transactions: TransactionProps[] = transactionsStorage ? JSON.parse(transactionsStorage) : [];

    setTransactions(transactions);
  }

  async function postTransactionIntoAsyncStorage({ storageKey, transaction }: postTransactionIntoAsyncStorage) {
    try {
      const newTransaction = [
        ...transactions,
        transaction
      ];
  
      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify(newTransaction)
      );
    } catch (error) {
      console.error('handleSubmitRegister:', error);
      Alert.alert('Não foi possível salvar os dados.')
    }
  }

  function patchTransactionById({ id, storageKey }:TransactionByIdProps) {

  }

  function deleteTransactionById({ id, storageKey }:TransactionByIdProps) {

  }

  function handleTransactionSum() {
    function someTransactionsByType(type: 'income' | 'outcome') {
      return transactions.reduce((acc, transaction) => {
        return acc += transaction.type === type ? Number(transaction.amount) : 0
      }, 0)
    }

    function getLastDateRegister(type: 'income' | 'outcome') {
      const filteredTransactionsByType = 
      transactions.filter(transaction => transaction.type === type);
      
      const listTransactionDate = 
        filteredTransactionsByType.map(i => new Date(i.date).getTime());
      
      const lastTransaction = new Date(Math.max.apply(Math, listTransactionDate))
      
      return `${lastTransaction.getDate()} de ${formattedDateByMonth(lastTransaction)}`;
    }

    return {
      entries: {
        amount: someTransactionsByType('income'),
        lastInput: getLastDateRegister('income')
      },
      expensive: {
        amount: someTransactionsByType('outcome'),
        lastInput: getLastDateRegister('outcome')
      },
      total: someTransactionsByType('income') - someTransactionsByType('outcome')
    }
  }

  useEffect(() => {
    getTransactionsIntoAsyncStorage(storageKey.transactions);
  }, []);

  return (
    <AsyncStorageContext.Provider value={{
      transactions,
      getTransactionsIntoAsyncStorage,
      postTransactionIntoAsyncStorage,
      patchTransactionById,
      deleteTransactionById,
      handleTransactionSum
    }}>
      {children}
    </AsyncStorageContext.Provider>
  )
}
