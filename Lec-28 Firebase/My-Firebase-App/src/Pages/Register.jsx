import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const registerUser = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    if (!email) {
      setError({ email: "Please enter your email..." });
      return false;
    }

    if (!password) {
      setError({ password: "Please enter your password..." });
      return false;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => {
        toast.success("User Registion Successfully...");

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.code);

        if (err.code == "auth/invalid-email") {
          toast.error("Email is invalid");
        } else if (err.code == "auth/weak-password") {
          toast.error("Password is not strong. please enter min 6 length");
        } else if (err.code == "auth/email-already-in-use") {
          toast.error("Email is already exist....");
        } else {
          toast.error("Something went wrong...");
        }
      });

    setError({});
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register Page</h1>

      <h4>Welcome</h4>

      <div className="h-100 d-flex align-items-center justify-content-center">
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email..."
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {error.email && (
              <div className="text-danger">
                <p>{error.email}</p>
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password..."
              id="exampleInputPassword1"
            />
            {error.password && (
              <div className="text-danger">
                <p>{error.password}</p>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <p>
            Already have an account ? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
