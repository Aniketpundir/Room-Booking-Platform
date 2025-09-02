import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import profile_img from "../../assets/profileimg.jpg";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const [userToken, setUserToken] = useState("");
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  localStorage.setItem("user_token", "1234567");

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    setUserToken(token);
  }, []);

  const handleClick = (name) => {
    setActiveItem(name);
  };

  const Logout = () => {
    localStorage.removeItem("user_token");
    setUserToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-middele">
        <ul>
          <Link to="/home">
            <li
              className={`button ${activeItem === "Home" ? "clicked" : ""}`}
              onClick={() => handleClick("Home")}
            >
              Home
            </li>
          </Link>

          <Link to="/About">
            <li
              className={`button ${activeItem === "About Us" ? "clicked" : ""}`}
              onClick={() => handleClick("About Us")}
            >
              About Us
            </li>
          </Link>
        </ul>
      </div>

      <div className="navbar-right">
        {!userToken ? (
          <Link to="/login">
            <button className="login-button">Log In</button>
          </Link>
        ) : (
          <div className="navbar-login-profile">
            <div className="login-profile-img">
              <img
                className="navbar-login-profile-img"
                src={profile_img}
                alt="Profile_Image"
              />
              <p className="login-profile-name">Aniket Pundir</p>
            </div>

            <div className="login-profile-options">
              <ul>
                <Link to="/user-profile">
                  <li>
                    <RiAccountCircleFill />
                    <p>Account Profile</p>
                  </li>
                </Link>
                <hr />
                <Link to="/room-application">
                  <li>
                    <CiBookmark />
                    <p>Room Applications</p>
                  </li>
                </Link>
                <hr />
                <li>
                  <IoIosLogOut />
                  <button onClick={Logout}>Log out</button>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
