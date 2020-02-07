import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavoriteScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  //const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
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