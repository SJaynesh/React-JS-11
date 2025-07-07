import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { ToastContainer, toast } from "react-toastify";

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
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code == "auth/invalid-credential") {
          toast.error("User not exist....");
        } else if (err.code == "auth/invalid-email") {
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

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        toast.success("User Login Successfully...");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);

        toast.error(`Something went wrong... : ${err.code}`);
      });
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
              placeholder="Enter Email..."
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
            Login
          </button>

          <p>
            Don't have an account yer ? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>

      <div className="h-100 d-flex align-items-center justify-content-center">
        <button className="btn btn-info" onClick={loginWithGoogle}>
          Sign In With Google
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
