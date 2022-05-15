import React, { useEffect, useState } from "react";
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
  const path = window.location.pathname;
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(path.split("/")[1]);
  }, [path]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // navigate("/", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    });
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        // An error happened.
        alert("Logout Failed");
        console.log(error.message);
      });
  };
  return (
    <div className="Home d-flex flex-column justify-content-between">
      <div className="d-flex">
        <Sidebar setPage={setPage} page={page} />
        <div className="w-100">
          <div className="Home__Rightbox d-flex justify-content-between p-2 align-items-center ps-4">
            <h1 className="text-capitalize Sidebar__title">{page}</h1>
            <div>
              <button
                className="btn btn-outline-light me-5"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <Outlet>
            <Dashboard />
            <Movies />
          </Outlet>
        </div>
      </div>
      <Bottombar />
    </div>
  );
};

export default Home;
