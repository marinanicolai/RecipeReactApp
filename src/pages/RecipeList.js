import React from "react";
import { Card, Col, Row, Empty, Spin, Button, notification } from "antd";

import AddRecipeModal from "../components/modals/AddRecipeModal";
import RecipeCard from "../components/RecipeCard";
import Sidebar from "../components/Sidebar";

import useRecipeReducer from "../hooks/useRecipeReducer";

function RecipeList() {
  const [recipeState, dispatch] = useRecipeReducer();
  const { addModalOpen, form, isEditing, recipes } = recipeState;

  const handleChange = (event) => {};

  const handleCloseModal = () => {};

  const handleSubmit = () => {};

  const handleOnEdit = ({ id, directions, ingredients, title }) => {
    dispatch({
      type: "EDIT_RECIPE",
      id,
      directions,
      ingredients,
      title,
      modalOpen: true,
      isEditing: true,
    });
  };

  const handleOnDelete = ({ id }) => {
    // dispatch({ type: "REMOVE_RECIPES", recipes: recipeData });
  };

  const onCreate = (values) => {
    dispatch({
      type: "ADD_RECIPE",
      payload: values,
    });
  };

  return (
    <>
      <Sidebar>
        {recipes?.length > 0 ? (
          <Row gutter={16}>
            {recipes.map((recipe) => (
              <Col span={6} key={recipe.id}>
                <RecipeCard
                  title={recipe.title}
                  content={
                    <>
                      <Card
                        type="inner"
                        title="Ingredients"
                        style={{ marginBottom: "15px" }}
                      >
                        {`${recipe?.ingredients?.substring(0, 50)}.....`}
                      </Card>
                      <Card type="inner" title="Directions">
                        {`${recipe?.directions?.substring(0, 50)}.....`}
                      </Card>
                    </>
                  }
                  handleOnEdit={handleOnEdit}
                  handleOnDelete={handleOnDelete}
                  {...recipe}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Empty />
        )}
        <AddRecipeModal
          modalOpen={addModalOpen || isEditing}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onCreate={onCreate}
          {...form}
        />
      </Sidebar>
    </>
  );
}

export default RecipeList;
