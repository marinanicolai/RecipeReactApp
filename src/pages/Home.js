import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Home</h1>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
