import React, { Component } from "react";
import "../../Sass/output.css";
import DonationAmount from "./AmountSelector/DonationAmount";
import queryString from "query-string";
import DonationSubscription from "./DonationSubscription";
import { Link } from "react-router-dom";
import DonationProgress from "./DonationProgress";

//Stripe NPM

class Donate extends Component {
  state = {
    amount: "",
    query: "",
    active: "1"
  };
  // componentDidMount() {
  //   const params = queryString.parse(this.props.location.search);
  //   this.setState({ query: params });
  //   console.log(this.state.query);
  // }
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
        <DonationProgress />
        {query.amount ? (
          <p>test</p>
        ) : (
          <div>
            <DonationAmount update={this.handleAmount} />
            <DonationSubscription />
          </div>
        )}
        <Link to={`/donate/details/?amount=${amount}`}>
          <div>NEXT</div>
        </Link>
      </section>
    );
  }
}
export default Donate;
