import React from "react";
import SectionTitleBorder from "./SectionTitleBorder";
import {homebanner} from '../assets'

const Remember = () => {
  return (
    <div id="remember">
      <h1>
        Want to become a part of this community <span>?</span>
      </h1>
      <p>
        If you not register yet, then register with your original details and
        become a part of this alumni
      </p>
      <SectionTitleBorder />

      <img src={homebanner} alt="" className="rememberBanner"/>

      <div className="remeberSection">
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default Remember;
