import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

const AddRecipeForm = ({
  modalOpen,
  handleSubmit,
  handleCloseModal,
  handleChecked,
  handleChange,
  onCancel,
  onCreate,
  title,
  ingredients,
  directions
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={modalOpen}
      title="Create a new recipe"
      okText="Create"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={handleCloseModal}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title,
          ingredients,
          directions
        }}
      >
        <Form.Item
          name="title"
          label="Recipe title"
          rules={[
            {
              required: true,
              message: "Please input the title of recipe!"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="ingredients" label="Ingredients">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="directions" label="Directions">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddRecipeModal = ({
  handleOpenAddModal,
  handleCloseModal,
  handleSubmit,
  modalOpen,
  ingredients,
  directions,
  title
}) => {
  return (
    <div>
      <Button type="primary" onClick={handleOpenAddModal}>
        New recipe
      </Button>
      <AddRecipeForm
        modalOpen={modalOpen}
        onCreate={handleSubmit}
        handleCloseModal={handleCloseModal}
        ingredients={ingredients}
        directions={directions}
        title={title}
      />
    </div>
  );
};

export default AddRecipeModal;
