import React, { Component } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <Home />
          <Chat />
          <Signup />
          <Todo />
          <Login />
        </ul>
      </div>
    );
  }
}

export default App;
