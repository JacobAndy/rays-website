import React, { Component } from "react";
import "../../Sass/output.css";
import DonationDot from "./DonationDot";
import DonationAmount from "./AmountSelector/DonationAmount";
import queryString from "query-string";
import DonationSubscription from "./DonationSubscription";
import { Link } from "react-router-dom";

//Stripe NPM

class Donate extends Component {
  state = {
    amount: "",
    query: "",
    active: "1"
  };
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    this.setState({ query: params });
    console.log(this.state.query);
  }
  handleAmount = amount => {
    this.setState({ amount: amount.slice(1) });
  };
  toggleActive = num => {
    this.setState({ active: num });
  };
  render() {
    let { query, amount } = this.state;
    return (
      <section>
        <div className="donation-progress">
          <DonationDot active={this.state.active} number="1" name="Amount" />
          <DonationDot active={this.state.active} number="2" name="Details" />
          <DonationDot active={this.state.active} number="3" name="Payment" />
        </div>
        {query.amount ? (
          <p>test</p>
        ) : (
          <div>
            <DonationAmount update={this.handleAmount} />
            <DonationSubscription />
          </div>
        )}
        <Link to={`/donate/?amount=${amount}`}>
          <div>NEXT</div>
        </Link>
      </section>
    );
  }
}
export default Donate;
