import React from "react";
import { kebabCase } from "lodash";

import { db } from "../services/firebase";

const initialState = {
  form: {
    directions: "",
    ingredients: "",
    title: "",
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
    case "OPEN_MODAL":
      const modalType = action?.modalType;

      if (modalType === "add") {
        return { ...state, addModalOpen: true };
      }

      return newState;

    case "SET_RECIPES":
      newState = { ...state, recipes: action?.recipes };
      console.log({ newState, action }, action.recipes);
      return newState;

    case "ADD_RECIPE":
      newState = { ...state, addModalOpen: false };
      const { title, ingredients, directions } = action.payload;

      const id = kebabCase(title);

      newState.recipes = [
        ...newState.recipes,
        { id, title, ingredients, directions },
      ];

      return newState;

    case "EDIT_RECIPE":
      console.log("actionaction", action);
      return state;

    case "REMOVE_RECIPE":
    const recipes = state.recipes.filter(
      (recipe) => action.payload.id !== recipe.id
    );
    newState = { ...state, recipes };
      return newState;

    case "CANCEL":
    return state;  

    default:
      return state;
  }
};


const useRecipeReducer = () => {
  const [recipes, dispatch] = React.useReducer(recipeReducer, initialState);

  return [recipes, dispatch];
};

export default useRecipeReducer;
