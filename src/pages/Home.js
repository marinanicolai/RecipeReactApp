import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import UseRecipeReducer from "../hooks/UseRecipeReducer";

const HomePage = () => {
  return (
    <div className="home">
      <Header></Header>
      <Sidebar />
      <UseRecipeReducer />
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
