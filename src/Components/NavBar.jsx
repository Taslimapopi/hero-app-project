import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/allApps'>Apps</NavLink>
              </li>
              <li>
                <NavLink to='/installedApp'>Installions</NavLink>
              </li>

            </ul>
          </div>
          <NavLink to='/'><img className="h-8 w-8" src={logo} alt="" /></NavLink>
          <Link to='/' className=" text-xl font-semibold text-[#632EE3]">HERO.io</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/allApps'>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/installedApp'>Installions</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
