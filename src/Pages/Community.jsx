import React from "react";
import { alumni, alumni2 } from "../assets";

const Community = () => {
  return (
    <div id="community">
      <div className="cards">
        <div className="communityCard">
          <div className="iconBg">
            <i className="lni lni-users ico"></i>
          </div>
          <h4>Our Total Alumni</h4>
          <h2>We are already a huge community</h2>
          <small>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate.
          </small>

          <img src={alumni} alt="alumni" className="alumni" />
        </div>

        <div className="communityCard">
          <div className="iconBg">
            <i className="lni lni-users ico"></i>
          </div>
          <h4>Our Ex Alumni</h4>
          <h2>The contribution from our alumni</h2>
          <small>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate.
          </small>

          <img src={alumni2} alt="alumni" className="alumni" />
        </div>
      </div>

      <div className="extraCariculam">
        <div className="activity">
          <div className="iconBg">
            <i className="lni lni-grow ico"></i>{" "}
          </div>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, placeat reprehenderit quos harum tenetur qui
            architecto tempore odit.
          </small>
        </div>
        <div className="activity">
          <div className="iconBg">
            <i className="lni lni-grow ico"></i>{" "}
          </div>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, placeat reprehenderit quos harum tenetur qui
            architecto tempore odit.
          </small>
        </div>
        <div className="activity">
          <div className="iconBg">
            <i className="lni lni-grow ico"></i>{" "}
          </div>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, placeat reprehenderit quos harum tenetur qui
            architecto tempore odit.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Community;
