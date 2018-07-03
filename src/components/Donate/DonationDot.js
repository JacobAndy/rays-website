import React from "react";
import "../../Sass/output.css";

function DonationDot(props) {
  return <div className="donation-progress__donation-dots">{props.number}</div>;
}
export default DonationDot;
