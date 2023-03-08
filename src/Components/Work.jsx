import React from "react";

const Work = ({pic, pic2}) => {
  return (
    <div className="work">
      <div className="leftSec">
        <h1>Organized a national level Debate competition in JNU</h1>
        <div className="imgGallery">
          <img src={pic} alt="" />
          <img src={pic2} alt="" />
        </div>
      </div>
      <div className="middleSec">
        <div className="line"></div>
        <div className="iconBorder">
          <i className="lni lni-heart-fill love"></i>
        </div>
        <div className="line"></div>
      </div>
      <div className="rightSec">
        <span>24 March, 2021</span>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. In publishing and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content.In publishing and graphic design, Lorem
          ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful
          content. In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Work;
