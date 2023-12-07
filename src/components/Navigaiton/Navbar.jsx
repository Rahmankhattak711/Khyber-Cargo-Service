import React from "react";
import { Link, NavLink } from "react-router-dom";
import jpeg from "../images/logo.jpeg";

function Navbar() {
  return (
    <header className="header1 flex flex-col-reverse md:flex-row font-display justify-between items-center pl-1 md:pl-10 pr-1 md:pr-10 h-auto md:h-20 bg-[rgb(0,0,0)]">
      <Link>
        <img className="h-[80px] w-[80px] rounded-full p-1" src={jpeg} />
      </Link>
      <div className="header2">
        <ul className="flex flex-wrap">
          <li className="m-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-white font-extrabold" : "text-gray-400"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${isActive ? "text-white font-extrabold" : "text-gray-400"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink
              to="/Service"
              className={({ isActive }) =>
                `${isActive ? "text-white font-extrabold" : "text-gray-400"}`
              }
            >
              Service
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink
              to="/Gallery"
              className={({ isActive }) =>
                `${isActive ? "text-white font-extrabold" : "text-gray-400"}`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${isActive ? "text-white font-extrabold" : "text-gray-400"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
