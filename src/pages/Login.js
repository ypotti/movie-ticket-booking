import React, { useEffect, useState } from "react";
import "./index.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  const submitHandler = (e) => {
    e.preventDefault();
    // Signing in using Firebase function
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/", { replace: true });
        console.log(user);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login">
      <div className="Login__card shadow-lg m-3">
        <form className="Login__textbox p-5">
          <h2>Welcome back.. Login</h2>
          <p>It's great to have you back!</p>
          <p
            className={`text-danger text-center ${
              errorMessage ? "p-3" : "p-0"
            } Login__errorMessage`}
          >
            {errorMessage}
          </p>
          <label className="mt-3">Email:</label>
          <input
            className="form-control mt-2"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-3">Password</label>
          <input
            type="password"
            className="form-control mt-2"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="btn btn-primary mt-4"
            onClick={submitHandler}
          >
            Login
          </button>
        </form>
        <div className="Login__imagebox d-none d-md-block">
          <img
            src="https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=2048x2048"
            alt="movies"
            className="Login__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
