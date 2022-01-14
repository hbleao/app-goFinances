import React from 'react';

import { 
  Container, 
  Header,
  UserWrapper, 
  UserInfo,
  Photo,
  User,
  UserGreeting, 
  UserName,
  IconPower,
  HighLightCards,
  Transations,
  TransationsTitle,
  TransactionList,
  LogoutButton
} from './styles';

import { 
  HighLightCard, 
  TransactionCard 
} from '../../components';

import { DataListProps } from './types';
import { useTransaction } from '../../hooks/useTransaction';
import { formattedMonetaryValue } from '../../helpers';

export type PresentationProps = {
  transactions: DataListProps[];
}

export const Presentation =  ({ transactions }: PresentationProps) => {
  const { handleTransactionSum } = useTransaction();

  const { entries, expensive, total } = handleTransactionSum();

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/35975531?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Henrique</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <IconPower name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard 
          kind='up'
          title='Entradas'
          amount={formattedMonetaryValue(entries.amount)}
          lastTransaction={`última entrada dia ${entries.lastInput}`}
        />
        <HighLightCard
          kind='down'
          title='Saídas'
          amount={formattedMonetaryValue(expensive.amount)}
          lastTransaction={`última entrada dia ${expensive.lastInput}`}
        />
        <HighLightCard
          kind='total'
          title='Total'
          amount={formattedMonetaryValue(total)}
          lastTransaction={`01 a ${expensive.lastInput}`}
        />
      </HighLightCards>

      <Transations>
        <TransationsTitle>Listagem</TransationsTitle>
        <TransactionList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard  data={item} />}
        />
      </Transations>
    </Container>
  )
}