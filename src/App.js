import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          {routes}
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
