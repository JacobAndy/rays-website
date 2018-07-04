import React, { Component } from "react";
import "../../../Sass/output.css";

class EachDonation extends Component {
  render() {
    let { update, changeCurr, amount } = this.props;
    return (
      <div
        onClick={() => {
          changeCurr(this.props.wordAmount);
          update(amount);
        }}
        className={
          this.props.active
            ? "ea-donation"
            : "ea-donation ea-donation__opaChange"
        }
      >
        <p>{amount}</p>
      </div>
    );
  }
}
export default EachDonation;
