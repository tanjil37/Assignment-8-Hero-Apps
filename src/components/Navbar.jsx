import { Github } from "lucide-react";
import React from "react";
import { NavLink } from "react-router"; 
import logo from "../../src/assets/logo.png";
const Navbar = () => {
  const activeStyle =
    "text-[#632EE3] border-b-2 border-[#632EE3] font-semibold"; 
  const normalStyle = "text-gray-700 hover:text-[#632EE3]";

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto text-center">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-1 text-xl">
            <img className="w-8 h-8" src={logo} alt="" />
            <span className="text-base font-bold linear-text">HERO.IO</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* GitHub Button */}
        <div className="navbar-end">
          <NavLink
            to="https://github.com/tanjil37"
            target="_blank"
            className="btn btn-primary text-white"
          >
            <Github />
            Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
