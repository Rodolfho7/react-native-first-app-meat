import React from 'react';

import { View, FlatList, StyleSheet } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {


  const naviCategoryMeals = itemData => {
    // props.navigation.navigate({
    //   routeName: 'CategoryMeals'
    // });
    //or

    props.navigation.navigate('CategoryMeals', {
      categoryId: itemData.item.id
    });
  }

  const renderGridItem = itemData => {
    return <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => naviCategoryMeals(itemData)}
    />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  );
}

CategoriesScreen.navigationOptions = navData => {
  //headerTitle: 'Meal Categories'
  // headerStyle: {
  //   backgroundColor: Colors.primaryColor
  // },
  // headerTintColor: 'white'
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default CategoriesScreen;