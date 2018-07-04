import React, { Component } from "react";
import "../../../Sass/output.css";

class EachDonation extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.changeCurr(this.props.wordAmount)}
        className={
          this.props.active
            ? "ea-donation"
            : "ea-donation ea-donation__opaChange"
        }
      >
        <p>{this.props.amount}</p>
      </div>
    );
  }
}
export default EachDonation;
