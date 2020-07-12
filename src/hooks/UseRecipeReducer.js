import React from "react";
import { kebabCase } from "lodash";

import { db } from "../services/firebase";

const initialState = {
  form: {
    directions: "",
    ingredients: "",
    title: "",
    published: false,
  },
  notification: {
    notificationOpen: false,
    message: "",
    title: "",
    type: "",
  },
  viewModalOpen: false,
  addModalOpen: false,
  recipeData: {},
  recipeId: "",
  recipes: [],
  isEditing: false,
  loading: false,
};

const recipeReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET_RECIPES":
      newState = { ...state, recipes: action?.recipes };
      return newState;
    case "REMOVE_RECIPE":
      return state;
    case "ADD_RECIPE":
      newState = { ...state };
      const { title, ingredients, directions } = action.payload;
      newState.recipes = [
        ...newState.recipes, // we are copying here recipes from the old state and adding a new one
        { title, ingredients, directions },
      ];

      return newState;
    case "EDIT_RECIPE":
      // state?.recipes(recipes.filter((recipes) => id !== e.target.id));
      console.log("actionaction", action);
      return state;

    case "REMOVE_RECIPE":
      // state?.recipes(recipes.filter((recipes) => id !== e.target.id));
      return state;

    default:
      return state;
  }
};
//gitpush

const useRecipeReducer = () => {
  const [recipes, dispatch] = React.useReducer(recipeReducer, initialState);

  return [recipes, dispatch];
};

export default useRecipeReducer;
