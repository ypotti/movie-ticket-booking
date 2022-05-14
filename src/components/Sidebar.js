import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="d-none d-md-block p-3 bg-secondary">
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

export default Sidebar;
