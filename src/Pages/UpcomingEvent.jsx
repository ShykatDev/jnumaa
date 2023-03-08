import React from "react";
import { fiesta } from "../assets";

const UpcomingEvent = () => {
  return (
    <div id="upcomingEvent">
      <div className="eventSlice">
        <div className="banner">
          <img src={fiesta} alt="" />
        </div>
        <div className="details">
          <div className="iconBg">
            <i className="lni lni-flower ico"></i>
          </div>
          <small>Upcomming Event</small>
          <h1>Marketing Fiesta'23</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            laboriosam ipsum ducimus, labore error doloribus odit voluptatibus
            officiis. Deserunt commodi non vitae consequatur eligendi voluptatem
            enim dolor ipsa odio ducimus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, omnis dolore harum debitis neque laboriosam illo rem reprehenderit consequatur adipisci itaque minus excepturi odit impedit officia, illum, eius ratione! Ab!
          </p>

          <div className="notification">
            <input type="text" placeholder="Enter your email" />
            <button>Notify me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
