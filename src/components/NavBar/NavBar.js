import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      burgerToggle: false
    };
  }
  render() {
    let { burgerToggle } = this.state;
    return (
      <div
        className={
          burgerToggle
            ? "navbar-holder navbar-holder-slide-mobile"
            : "navbar-holder"
        }
        onClick={() => {
          this.setState({ burgerToggle: !this.state.burgerToggle });
        }}
      >
        <div className="burger-holder">
          <div className={burgerToggle ? "topBun topBunActive" : "topBun"} />
          <div className={burgerToggle ? null : "middleBun"} />
          <div
            className={burgerToggle ? "bottomBun bottomBunActive" : "bottomBun"}
          />
        </div>
        <section
          className={
            burgerToggle
              ? "navbar-info navbar-info-slide-mobile"
              : "navbar-info"
          }
        >
          {/* <Link to="/courses">
            <p>Courses</p>
          </Link> */}
          <Link to="/blogs">
            <p>Blogs</p>
          </Link>
          <Link to="/store">
            <p>Store</p>
          </Link>
          <Link to="/">
            <h4>Ray McCollum</h4>
          </Link>
          {/* <Link to="/messages">
            <p>Messages</p>
          </Link> */}
          <Link to="/donate">
            <p>Donate</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </section>
      </div>
    );
  }
}
export default NavBar;
