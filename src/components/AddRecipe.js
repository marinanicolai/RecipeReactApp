import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Button, Modal, Form, Input } from "antd";

const AddRecipe = ({
  modalOpen,
  handleSubmit,
  handleCloseModal,
  handleChecked,
  handleChange,
  onCreate,
  onCancel,
  title,
  ingredients,
  directions,
  published,
  visible,
  ...props
}) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        modifier: "public",
      }}
      onFinish={onCreate}
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRecipe;
