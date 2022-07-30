import React from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="sidebar px-4 py-8 flex  flex-col justify-between overflow-hidden transition-all"
      style={{ width: isOpen ? "240px" : "63px" }}
    >
      <div>
        <div className="flex items-center gap-x-7">
          <Tooltip title={isOpen ? "Close sidebar": "Open sidebar"} placement="right-start">
            <i
              onClick={toggle}
              className="ri-menu-line text-xl font-bold cursor-pointer"
            ></i>
          </Tooltip>

          <h4 className={isOpen ? "font-bold text-xl" : "hidden"}>
            Abraham Godson
          </h4>
        </div>

        <div className="mt-12">
          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Home" placement="right-start">
              <i className="ri-home-smile-line"></i>
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>Home</span>
          </NavLink>

          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Upline" placement="right-start">
              <i className="ri-vip-crown-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Upline</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Downline" placement="right-start">
              <i className="ri-award-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Downline</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Properties" placement="right-start">
              <i className="ri-building-3-line"></i>
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>Properties</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Account" placement="right-start">
              <i className="ri-shield-user-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Account</span>
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-x-7 cursor-pointer justify-start">
        <Tooltip title="Logout" placement="right-start">
          <i className="ri-logout-circle-r-line text-xl font-medium"></i>
        </Tooltip>

        <span className={isOpen ? "text-base" : "hidden"}>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
