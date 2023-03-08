import React from "react";

const MarqueeWrapper = ({ classN }) => {
  return (
    <div>
      <div className={classN}>
        <div className="marquee-title">
          / We are a <span className="text-stroke-black"> community </span>
          Join us and
          <span className="text-stroke-black"> together </span> / We build a
          <span className="text-stroke-black"> better </span>
          Association
        </div>
        <div className="marquee-title">
          / We are a <span className="text-stroke-black"> community </span>
          Join us and
          <span className="text-stroke-black"> together </span> / We build a
          <span className="text-stroke-black"> better </span>
          Association
        </div>
      </div>
    </div>
  );
};

export default MarqueeWrapper;
