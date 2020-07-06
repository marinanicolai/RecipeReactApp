import React, { Component } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RecipeList from "./pages/RecipeList";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <Home />
          <Chat />
          <Signup />
          <Login />
          <RecipeList />
        </ul>
      </div>
    );
  }
}

export default App;
