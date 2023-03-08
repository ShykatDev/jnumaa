import React from "react";
import MarqueeWrapper from "../Components/MarqueeWrapper";

const BigText = () => {
  return (
    <div id="bigText">
      <div className="marquee">
        <h3>
          <MarqueeWrapper classN="marquee-wrapper mWrapper1" />
          <MarqueeWrapper classN="marquee-wrapper mWrapper2" />
          <MarqueeWrapper classN="marquee-wrapper mWrapper3" />
          <MarqueeWrapper classN="marquee-wrapper mWrapper4" />
        </h3>
      </div>
    </div>
  );
};

export default BigText;
