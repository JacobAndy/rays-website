import React, { Component } from "react";
import "../../Sass/output.css";
import DonationDot from "./DonationDot";
import DonationAmount from "./AmountSelector/DonationAmount";
import queryString from "query-string";
import DonationSubscription from "./DonationSubscription";
import { Link } from "react-router-dom";

class Donate extends Component {
  state = {
    amount: "50",
    query: ""
  };
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    this.setState({ query: params });
    console.log(params);
  }
  render() {
    let { query, amount } = this.state;
    return (
      <section>
        <div className="donation-progress">
          <DonationDot number="1" name="Amount" />
          <DonationDot number="2" name="Details" />
          <DonationDot number="3" name="Payment" />
        </div>
        {query.amount ? (
          <p>test</p>
        ) : (
          <div>
            <DonationAmount />
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
