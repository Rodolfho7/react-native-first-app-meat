import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};


const mealsReducer = (state = initialState, action) =>{
  
  switch(action.type) {
    case TOGGLE_FAVORITE:
      const existIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if(existIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavoriteMeals
        };
      }
      else {
        const favorite = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals].concat(favorite)
        };
      }
    
      case SET_FILTERS:
        const appliedFilters = action.filters;
        const filteredMeals = state.filteredMeals.filter(meal => {
          if(appliedFilters.glutenFree && !meal.isGlutenFree) {
            return false;
          }
          if(appliedFilters.lactoreFree && !meal.isLactoseFree) {
            return false;
          }
          if(appliedFilters.vegetarian && !meal.isVegetarian) {
            return false;
          }
          if(appliedFilters.vegan && !meal.isVegan) {
            return false;
          }
          return true;
        });

        return {
          ...state,
          filteredMeals: filteredMeals
        };

    default:
      return state;
  }

  return state;
}

export default mealsReducer;