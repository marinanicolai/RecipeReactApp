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

  const handleOpenAddModal = () =>
    dispatch({
      type: "OPEN_MODAL",
      modalType: "add",
    });

  const handleCloseModal = () => {};

  const handleSubmit = (values) => {
    dispatch({
      type: "ADD_RECIPE",
      payload: values,
    });
  };

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
    dispatch({
      type: "REMOVE_RECIPE",
      payload: { id },
    });
  };

  const onCreate = (values) => {
    dispatch({
      type: "ADD_RECIPE",
      payload: values,
    });
  };

  const handelCancelModal = ({ id }) => {
    dispatch({
      type: "CANCEL",
      payload: { id },
    })
     
  }

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
          handleOpenAddModal={handleOpenAddModal}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCancelModal={handelCancelModal}
          onCreate={onCreate}
          {...form}
        />
      </Sidebar>
    </>
  );
}

export default RecipeList;
