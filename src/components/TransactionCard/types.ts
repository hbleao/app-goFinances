export type TypesProps = {
  type: 'income' | 'outcome'
}

export type TransactionCardItemProps = {
  type: 'income' | 'outcome';
  name: string;
  amount: string;
  categoryKey: string;
  date: Date;
}

export type TransactionCardProps = {
  data: TransactionCardItemProps;
}