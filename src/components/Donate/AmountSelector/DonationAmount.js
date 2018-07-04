import React, { Component } from "react";
import EachDonation from "./EachDonation";
import "../../../Sass/output.css";
import CurrencyInput from "react-currency-input";

class DonationAmount extends Component {
  state = {
    ten: false,
    twenty: false,
    fifty: false,
    hundred: false,
    twoFifty: false,
    fiveHundred: false,
    maskedvalue: "0.00"
  };
  changeCurrent = curr => {
    this.setState({ maskedvalue: "0.00" });
    for (let i in this.state) {
      if (this.state[curr] !== this.state[i]) {
        this.setState({ [i]: false });
      }
      this.setState({ [curr]: true });
    }
  };
  handleChange = (event, maskedvalue, floatvalue) => {
    this.props.update(maskedvalue);
    this.setState({
      ten: false,
      twenty: false,
      fifty: false,
      hundred: false,
      twoFifty: false,
      fiveHundred: false,
      selfInput: maskedvalue
    });
  };
  render() {
    let { ten, twenty, fifty, hundred, twoFifty, fiveHundred } = this.state;
    let { update } = this.props;
    return (
      <div className="donation-amount-holder">
        <EachDonation
          update={update}
          changeCurr={this.changeCurrent}
          active={ten}
          wordAmount="ten"
          amount="$10"
        />
        <EachDonation
          update={update}
          changeCurr={this.changeCurrent}
          changeCurr={this.changeCurrent}
          active={twenty}
          wordAmount="twenty"
          amount="$20"
        />
        <EachDonation
          update={update}
          changeCurr={this.changeCurrent}
          active={fifty}
          wordAmount="fifty"
          amount="$50"
        />
        <EachDonation
          update={update}
          changeCurr={this.changeCurrent}
          active={hundred}
          wordAmount="hundred"
          amount="$100"
        />
        <EachDonation
          update={update}
          changeCurr={this.changeCurrent}
          active={twoFifty}
          wordAmount="twoFifty"
          amount="$250"
        />
        <EachDonation
          update={update}
          changeCurr={this.changeCurrent}
          active={fiveHundred}
          wordAmount="fiveHundred"
          amount="$500"
        />
        {/* <input
          type="number"
          min="0"
          placeholder="$0.00"
          className="donation-amount-holder__user-input"
        /> */}
        <CurrencyInput
          className="donation-amount-holder__user-input"
          value={this.state.selfInput}
          onChangeEvent={this.handleChange}
          prefix="$"
        />
      </div>
    );
  }
}
export default DonationAmount;
