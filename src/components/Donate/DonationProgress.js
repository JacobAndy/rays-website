import React from "react";
import DonationDot from "./DonationDot";

function DonationProgress() {
  return (
    <div className="donation-progress">
      <DonationDot
        active={
          window.location.href === "http://localhost:3000/donate" ||
          window.location.href === "http://localhost:3000/donate/"
            ? true
            : false
        }
        number="1"
        name="Amount"
      />
      <DonationDot
        active={window.location.href.includes("/donate/details") ? true : false}
        number="2"
        name="Details"
      />
      <DonationDot
        active={
          window.location.href.includes("/donate/checkout") ? true : false
        }
        number="3"
        name="Payment"
      />
    </div>
  );
}
export default DonationProgress;
