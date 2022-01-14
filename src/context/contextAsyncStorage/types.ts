import { ReactNode } from "react"

export type TransactionProps = {
  id: string;
  type: 'income' | 'outcome';
  name: string;
  amount: string;
  categoryKey: string;
  date: Date;
}

export type AsyncStorageProviderProps = {
  children: ReactNode;
}

export type TransactionByIdProps = {
  storageKey: string;
  id: string;
}

export type postTransactionIntoAsyncStorage = {
  storageKey: string;
  transaction: TransactionProps;
}

type TransactionSumProps = {
  amount: number;
  lastInput: string;
}

type transactionSum = {
  entries: TransactionSumProps;
  expensive: TransactionSumProps;
  total: number;
};

export type AsyncStorageContextProps = {
  transactions: TransactionProps[];
  getTransactionsIntoAsyncStorage: (storageKey: string) => void;
  postTransactionIntoAsyncStorage: ({ storageKey, transaction }: postTransactionIntoAsyncStorage) => void;
  deleteTransactionById: ({ id, storageKey }:TransactionByIdProps) => void;
  patchTransactionById: ({ id, storageKey }:TransactionByIdProps) => void;
  handleTransactionSum: () => transactionSum; 
}
