import React from "react";
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
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
