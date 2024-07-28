import React from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../Images/home.png";
import hantel from "../Images/hantel.svg";
import profil from "../Images/profil.svg";
import home_white from "../Images/home_white.svg";
import hantel2 from "../Images/hantel2.svg";
import profil_white from "../Images/profil_white.svg";
import "../index.css";

const Navigation = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <nav>
      <ul className="bg-black flex fixed bottom-0 left-0 w-full justify-around h-[50px] content-center items-center">
        <li className="block">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            <img src={isActive("/") ? home_white : home} alt="home" />
          </Link>
        </li>
        <li className="block">
          <Link
            to="/Programs"
            className={isActive("/Programs") ? "active" : ""}>
            <img src={isActive("/Programs") ? hantel2 : hantel} alt="" />
          </Link>
        </li>
        <li className="block">
          <Link to="/Profile" className={isActive("/Profile") ? "active" : ""}>
            <img src={isActive("/Profile") ? profil_white : profil} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
