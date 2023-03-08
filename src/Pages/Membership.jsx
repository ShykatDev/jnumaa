import React from "react";
import Package from "../Components/Package";
import SectionTitleBorder from "../Components/SectionTitleBorder";

const Membership = () => {
  return (
    <div id="memberShip">
      <h1>
        Our Membership <span>.</span>
      </h1>
      <p>This is our current package we offer!</p>
      <SectionTitleBorder />

      <div className="packages">
        <Package title={"Silver Member"} price={"00.00"} category={"Free"} />
        <Package title={"Platinum Member"} price={"5,500"} category={"Paid"} />
        <Package
          isActive={"active"}
          title={"Lifetime Member"}
          price={"10,000"}
          category={"Paid"}
        />
      </div>
    </div>
  );
};

export default Membership;
