import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import DonationProgress from "./DonationProgress";

class DonationDetails extends Component {
  state = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    streetAddressv2: "",
    state: "",
    city: "",
    postal: "",
    country: "",
    donationAmm: ""
  };
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    this.setState({ donationAmm: params.amount });
    console.log(params);
  }
  render() {
    return (
      <div>
        <DonationProgress />
        <input onChange={e => this.setState({ firstName: e.target.value })} />
        <p>First Name</p>
        <input onChange={e => this.setState({ lastName: e.target.value })} />
        <p>Last Name</p>
        <input
          onChange={e => this.setState({ streetAddress: e.target.value })}
        />
        <p>Street Address</p>
        <input
          onChange={e => this.setState({ streetAddressv2: e.target.value })}
        />
        <p>Street Address Line 2</p>
        <input onChange={e => this.setState({ state: e.target.value })} />
        <p>State/Province</p>
        <input onChange={e => this.setState({ city: e.target.value })} />
        <p>City</p>
        <input onChange={e => this.setState({ postal: e.target.value })} />
        <p>Postal/Zip Code</p>
        <input onChange={e => this.setState({ country: e.target.value })} />
        <p>Country</p>
        <Link to={`/donate/checkout/?amount=${this.state.donationAmm}`}>
          <p>Next</p>
        </Link>
      </div>
    );
  }
}
export default DonationDetails;
