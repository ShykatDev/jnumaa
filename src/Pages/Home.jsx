import React from "react";
import { homebanner } from "../assets";

const Home = () => {
  return (
    <div id="home">
      <div className="content">
        <h1>
          Jagannath university<br></br>
          <span>marketing alumni association</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          praesentium modi rem quibusdam consectetur sunt quasi repellendus ab
          totam facilis, laboriosam aliquam atque qui quidem mollitia harum,
          consequuntur incidunt. Sint?
        </p>

        <div className="buttonGrp">
          <button className="joinBtn">Join as a alumni</button>
          <button className="registerBtn">Register for upcoming event</button>
        </div>
      </div>

      <img src={homebanner} alt="homebanner" className="homeBanner" />
    </div>
  );
};

export default Home;
