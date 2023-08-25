import React, { useState } from "react";
import "../style/login.css";
import Logo from "../asssests/logo.webp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  let history = useNavigate();

  function check() {
    if (username === "" || password === "") {
      toast.error("Enter Credentials!", {
        autoClose: 2500,
      });
    } else {
      toast.success("Login Successful", {
        autoClose: 2500,
      });
      history("/Attendence", { state: { username: username } });
    }
  }

  return (
    <>
      <div className="body-container"> </div>
      <div className="flex-box login-container">
        <div className="login-box flex-box">
          <div className="flex-box">
            <img className="zomato-logo" src={Logo} alt="background-img"></img>
          </div>
          <div className="flex-box">
            <div className="input-box font-bold">
              <p className="font-bold">Username/Email</p>
              <input
                type="text"
                className="email"
                value={username}
                placeholder="Username or Id"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </div>
            <div className="input-box font-bold">
              <p className="font-bold">Password</p>
              <input
                type="password"
                className="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <p
              className="button hover:text-green-500 font-bold transition-all ease-in-out duration-200"
              onClick={check}
            >
              Login / SignUp
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
