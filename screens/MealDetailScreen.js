import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

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

  const mealId = navigationData.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={() => { console.log('favorite pressed') }} />
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