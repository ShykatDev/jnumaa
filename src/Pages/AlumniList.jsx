import React from "react";
import SectionTitleBorder from "../Components/SectionTitleBorder";
import SingleAlumni from "../Components/SingleAlumni";

const AlumniList = () => {
  return (
    <div id="alumniSearch">
      <h1>Find an Alumni</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <SectionTitleBorder />

      <div className="searchBar">
        <h2>Our Alumni List</h2>
        <div className="search-area">
          <input type="text" value="Enter Name" />
          <button>
            <i className="lni lni-search-alt"></i>
          </button>
        </div>
      </div>

      <div className="searchResult">
        <div className="heading">
          <h4>ID</h4>
          <h4>Alumni Name</h4>
          <h4>Registration No</h4>
          <h4>Session</h4>
          <h4>Group</h4>
          <h4>Blood Group</h4>
        </div>
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />
        <SingleAlumni />

        <div className="viewMore">
          View full list <button><i className="lni lni-more-alt"></i></button>
        </div>
      </div>
    </div>
  );
};

export default AlumniList;
