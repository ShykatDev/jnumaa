import React from "react";
import SectionTitleBorder from "../Components/SectionTitleBorder";

import { alumni, alumni2 } from "../assets";
import Work from "../Components/Work";

const OurWorks = () => {
  return (
    <div id="ourWorks">
      <h1>
        Our Works <span>!</span>
      </h1>
      <p>Here are some work smaples we have done.</p>
      <SectionTitleBorder />

      <div className="workSection">
        <Work pic={alumni} pic2={alumni2} />
        <Work pic={alumni} pic2={alumni2} />
        <Work pic={alumni} pic2={alumni2} />
      </div>
    </div>
  );
};

export default OurWorks;
