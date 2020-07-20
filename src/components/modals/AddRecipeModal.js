import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { statement } from "@babel/template";

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
  directions,
  published,
  ...props
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={modalOpen}
      title="Create a new recipe"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}

     onCancel={handleCloseModal}
       //console.log("cancel clicked")

     
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Recipe title"
          rules={[
            {
              required: true,
              message: "Please input the title of recipe!",
            },
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
}) => {
  return (
    <div>
      <Button type="primary" onClick={handleOpenAddModal}>
        New recipe
      </Button>
      <AddRecipeForm
        modalOpen={modalOpen}
        onCreate={handleSubmit}
        onCancel={handleCloseModal}
      />
    </div>
  );
};

export default AddRecipeModal;
