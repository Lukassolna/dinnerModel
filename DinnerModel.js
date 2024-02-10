/* 
   The Model keeps only abstract data and has no notions of graphics or interaction
*/

import resolvePromise from "./resolvePromise";
import { searchDishes, getDishDetails } from "./dishSource";
import { promise } from "parse-git-config";

export default {
  // we export a JavaScript object: { p1:v1, p2:v2, method(param){ statements; }, }
  // other model properties will be initialized here in the coming lab steps
  numberOfGuests: 2,
  dishes: [],
  currentDish: null,
  searchParams: {},
  searchResultsPromiseState: {},
  currentDishPromiseState: {},

  setNumberOfGuests(nr) {
    if (Number.isInteger(nr) != 1 || nr < 1) {
      throw new Error("number of guests not a positive integer");
    } else {
      this.numberOfGuests = nr;
    }
  },

  addToMenu(dishToAdd) {
    this.dishes = [...this.dishes, dishToAdd];
  },

  removeFromMenu(dishToRemove) {
    function shouldWeKeepDishCB(dish) {
      if (dish.id != dishToRemove.id) {
        return true;
      }
    }
    this.dishes = this.dishes.filter(shouldWeKeepDishCB);
  },

  setCurrentDish(id) {
    if (id !== this.currentDish & id !== undefined) {
        resolvePromise(getDishDetails(id), this.currentDishPromiseState);
        this.currentDish = id;
      }
  },

  setSearchQuery(queryText) {
    this.searchParams.query = queryText;
  },

  setSearchType(type) {
    this.searchParams.type = type;
  },

  doSearch(searchParams) {
    resolvePromise(searchDishes(searchParams), this.searchResultsPromiseState);
  },

  // more methods will be added here, don't forget to separate them with comma!
};
