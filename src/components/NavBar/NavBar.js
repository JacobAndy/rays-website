import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-holder">
        <section className="navbar-info">
          <Link to="/courses">
            <p>Courses</p>
          </Link>
          <Link to="">
            <p>Blogs</p>
          </Link>
          <Link to="">
            <p>Store</p>
          </Link>
          <Link to="/">
            <h4>Ray McCollum</h4>
          </Link>
          <Link to="">
            <p>Messages</p>
          </Link>
          <Link to="">
            <p>Donate</p>
          </Link>
          <Link to="">
            <p>Contact</p>
          </Link>
        </section>
      </div>
    );
  }
}
export default NavBar;
