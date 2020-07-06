import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const SideBar = (props) => {
  return (
    <Layout className="cover">
      <Sider id="sider-menu" breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">
            <UserOutlined />
            <span className="nav-ingredients">Home</span>
          </Menu.Item>
          <Menu.Item key="recipe-list">
            <Link to="/recipe-list">Recipes</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">Sign In</Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout></Layout>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0" }}>{props.children}</Content>
    </Layout>
  );
};
export default SideBar;
