import React, { Component } from "react";
import "../../Sass/output.css";
import DonationDot from "./DonationDot";
import DonationAmount from "./DonationAmount";

class Donate extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="donation-progress">
          <div>
            <h4>Amount</h4>
            <DonationDot number="1" />
          </div>
          <div>
            <h4>Details</h4>
            <DonationDot number="2" />
          </div>
          <div>
            <h4>Payment</h4>
            <DonationDot number="3" />
          </div>
          {/* <div className="donation-progress__donation-dots">
            <div>
              <h4>Amount</h4>
            </div>
            <p>1</p>
          </div>
          <div className="donation-progress__donation-dots">
            <div>
              <h4>Details</h4>
            </div>
            <p>2</p>
          </div>
          <div className="donation-progress__donation-dots">
            <div>
              <h4>Payment</h4>
            </div>
            <p>3</p>
          </div> */}
        </div>
      </main>
    );
  }
}
export default Donate;
