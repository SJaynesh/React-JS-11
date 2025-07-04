import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { ToastContainer, toast } from "react-toastify";

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    if (!email) {
      setError({ email: "Please Enter email...." });
      return false;
    }

    if (!password) {
      setError({ password: "Please Enter password...." });
      return false;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        toast.success("User Login Successfully...");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.code);
      });

    setEmail("");
    setPassword("");
    setError({});
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Page</h1>

      <h4>Welcome Back</h4>

      <div className="h-100 d-flex align-items-center justify-content-center">
        <form onSubmit={loginUser}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id="exampleInputPassword1"
            />
            {error.password && (
              <div className="text-danger">
                <p>{error.password}</p>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <p>
            Don't have an account yer ? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
