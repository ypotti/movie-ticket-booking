import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const Bottombar = ({ page, setPage }) => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(`/${route}`);
    setPage(route);
  };

  return (
    <div className="d-md-none d-flex bg-white Bottombar shadow">
      <div
        className={`Sidebar__Item w-50 text-center ${
          page === "dashboard" ? "selected" : ""
        }`}
        onClick={() => navigateTo("dashboard")}
      >
        <MdSpaceDashboard className="Sidebar__icon" />
        <span className="Sidebar__text">Dashboard</span>
      </div>
      <div
        className={`Sidebar__Item w-50 text-center ${
          page === "movies" ? "selected" : ""
        }`}
        onClick={() => navigateTo("movies")}
      >
        <BiMoviePlay className="Sidebar__icon" />
        <span className="Sidebar__text">Movies</span>
      </div>
    </div>
  );
};

export default Bottombar;
