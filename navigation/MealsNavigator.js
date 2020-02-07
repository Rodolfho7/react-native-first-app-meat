import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTitleStyle: {

  },
  headerTintColor: 'white'
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
        //   headerStyle: {
        //     backgroundColor: Colors.primaryColor
        //   },
        //   headerTintColor: 'white'
      }
    },
    CategoryMeals: {
      screen: CategoriesMealScreen,
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Colors.primaryColor
      //   },
      //   headerTintColor: 'white'
      // }
    },
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: tabInfo => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.accentColor
    }
  }
}

//const MealsFavTabNavigator = createBottomTabNavigator({
const MealsFavTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: 'white',
  shifting: true
}); //android only

// ,
// {
//   tabBarOptions: {
//     activeTintColor: Colors.accentColor
//   }
// });


const FilterNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    navigationOptions: {
      drawerLabel: 'Filterss'
    },
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FilterNavigator
});


export default createAppContainer(MainNavigator);