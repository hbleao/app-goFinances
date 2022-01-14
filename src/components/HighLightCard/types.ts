export type HighLightCardProps = {
  title: string;
  amount: string;
  lastTransaction: string;
  kind: 'up' | 'down' | 'total';
}

export type kindProps = {
  kind: 'up' | 'down' | 'total';
}