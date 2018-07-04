import React from "react";
import "../../Sass/output.css";

function DonationDot({ name, number, active }) {
  return (
    <div className={active !== number && "opaChange"}>
      <h4>{name}</h4>
      <div className="donation-progress__donation-dots">
        <p>{number}</p>
      </div>
    </div>
  );
}
export default DonationDot;
