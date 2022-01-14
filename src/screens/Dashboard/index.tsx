import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Presentation } from './presentation';

import { useTransaction } from '../../hooks/useTransaction';
import { storageKey } from '../../constants/storage';

export const Dashboard =  () => {
  const { transactions, getTransactionsIntoAsyncStorage } = useTransaction();
  
  useFocusEffect(useCallback(() => {
    getTransactionsIntoAsyncStorage(storageKey.transactions);
  }, []));

  return (
    <Presentation transactions={transactions} />
  )
}