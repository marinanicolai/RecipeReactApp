import React, { Component } from "react";
import { Popconfirm, Card } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const RecipeCard = ({
  title,
  content,
  id,
  handleOnClick,
  handleOnEdit,
  handleOnDelete,
  directions,
  ingredients,
  published,
}) => {
  return (
    <Card
      hoverable
      title={title}
      bordered
      extra={
        <Fragment>
          <span
            className="pointer"
            onClick={() =>
              handleOnEdit({ id, directions, ingredients, title, published })
            }
          >
            <EditOutlined
              style={{
                fontSize: "1.25rem",
                color: "#08c",
                marginRight: "0.625rem",
              }}
            />
          </span>
          <Popconfirm
            title="Are you sure delete this recipe?"
            onConfirm={() =>
              handleOnDelete({
                id,
              })
            }
            okText="Yes"
            cancelText="No"
          >
            <span className="pointer">
              <DeleteOutlined />
            </span>
          </Popconfirm>
          <span className="pointer" onClick={() => handleOnClick(id)}>
            <EyeOutlined />
          </span>
        </Fragment>
      }
      style={{
        marginBottom: "50px",
      }}
    >
      {content}
    </Card>
  );
};

export default RecipeCard;
