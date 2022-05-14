import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Movies from "../components/Movies";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    });
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="Home d-flex flex-column justify-content-between">
      <div>
        <button className="btn btn-outline-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
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
