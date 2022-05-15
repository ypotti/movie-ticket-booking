import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const Sidebar = ({ page, setPage }) => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(`/${route}`);
    setPage(route);
  };

  return (
    <div className="d-none d-md-block  Sidebar col-2 shadow">
      <div className="Sidebar__titlebox">
        <h1 className="p-2 Sidebar__title">MovieGLU</h1>
      </div>
      <div
        className={`Sidebar__Item  ${page === "dashboard" ? "selected" : ""}`}
        onClick={() => navigateTo("dashboard")}
      >
        <MdSpaceDashboard className="Sidebar__icon" />
        <span className="Sidebar__text">Dashboard</span>
      </div>
      <div
        className={`Sidebar__Item  ${page === "movies" ? "selected" : ""}`}
        onClick={() => navigateTo("movies")}
      >
        <BiMoviePlay className="Sidebar__icon" />
        <span className="Sidebar__text">Movies</span>
      </div>
    </div>
  );
};

export default Sidebar;
