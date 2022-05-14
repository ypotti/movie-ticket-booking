import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Movies from "../components/Movies";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";

const Home = () => {
  return (
    <div className="Home d-flex flex-column justify-content-between">
      <div className="d-flex">
        <Sidebar />
        <Outlet>
          <Dashboard />
          <Movies />
        </Outlet>
      </div>
      <Bottombar />
    </div>
  );
};

export default Home;
