import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

import { useSelector, useDispatch } from 'react-redux';

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam('mealId');

  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal =>
      meal.id === mealId
    )
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [mealId, dispatch]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavorite})
  }, [currentMealIsFavorite]);

  const backCategory = () => {
    props.navigation.popToTop();
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => <Text style={styles.item} key={ingredient}>{ingredient}</Text>)}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => <Text style={styles.item} key={step}>{step}</Text>)}
      </View>
    </ScrollView>
  );
}

MealDetailsScreen.navigationOptions = navigationData => {
  
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavoriteRef = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favorite' iconName={ isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavoriteRef} />
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content: {
    padding: 10
  },
  item: {
    backgroundColor: '#eee',
    elevation: 5,
    marginVertical: 3,
    padding: 2
  }
})

export default MealDetailsScreen;