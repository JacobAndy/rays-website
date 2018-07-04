import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
