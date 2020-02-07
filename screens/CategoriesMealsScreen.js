import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const CategoriesMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId.toString()) != -1);

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
}

CategoriesMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  }
};

export default CategoriesMealScreen;