import React from 'react';
import { FlatList } from 'react-native';

import {
  Category,
  CategoryName,
  Container,
  Footer,
  Icon,
  Separator,
} from './styles';

import { Button, Header } from '../../components';

import { categories } from '../../constants/screens/CategorySelect';

import { CategorySelectProps, CategoryProps } from './types';

export const CategorySelect = ({
  category,
  closeSelectCategory,
  setCategory
}: CategorySelectProps) => {

  function handleCategorySelect(category: CategoryProps) {
    setCategory(category)
  }

  return (
    <Container>
      <Header title="Categorias" />
      <FlatList 
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category 
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <CategoryName>{item.name}</CategoryName>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button text='Selecionar' onPress={closeSelectCategory} />
      </Footer>
    </Container>
  )
}
