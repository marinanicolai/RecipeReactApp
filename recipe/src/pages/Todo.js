import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Todo extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>To do</h1>
        <Footer></Footer>
      </div>
    );
  }
}

export default Todo;
