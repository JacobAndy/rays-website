import React, { Component } from "react";
import "../../Sass/output.css";

class DonationSubscription extends Component {
  state = {};
  render() {
    return (
      <div className="sub-box">
        <input type="checkbox" />
        <h4>Repeat Your Impact</h4>
        <select>
          <option>WEEKLY</option>
          <option>MONTHLY</option>
        </select>
      </div>
    );
  }
}
export default DonationSubscription;
