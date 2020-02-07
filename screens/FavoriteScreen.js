import React from 'react';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavoriteScreen = props => {

  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList listData={favoriteMeals} navigation={props.navigation} />
  );
}

FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='menu' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  }
}

export default FavoriteScreen;