import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const Bottombar = () => {
  return (
    <div className="d-md-none d-flex justify-content-around p-3 bg-secondary Bottombar">
      <div>
        <MdSpaceDashboard />
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <BiMoviePlay />
        <Link to="/movies">Movies</Link>
      </div>
    </div>
  );
};

export default Bottombar;
