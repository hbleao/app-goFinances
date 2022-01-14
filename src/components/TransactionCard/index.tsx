import React from 'react';

import { 
  Container, 
  Title, 
  Amount, 
  Footer, 
  Category, 
  Icon, 
  CategoryName, 
  Date 
} from './styles';

import { categories } from '../../constants/screens/CategorySelect'

import { TransactionCardProps } from './types';
import { formattedDateAndTime, formattedMonetaryValue } from '../../helpers';
 
export const TransactionCard = ({
  data
}: TransactionCardProps) => {
  const [category] = categories.filter(item => item.key === data.categoryKey);
  
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === 'outcome' && '- '}
        {formattedMonetaryValue(data.amount)}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{formattedDateAndTime(data.date)}</Date>
      </Footer>
    </Container>
  )
}