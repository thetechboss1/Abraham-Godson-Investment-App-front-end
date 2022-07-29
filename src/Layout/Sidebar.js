import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo1.png";

const Sidebar = () => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  return (
    <div className="sidebar px-4 py-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-x-7">
          <i className="ri-menu-line text-xl font-bold cursor-pointer"></i>
          <h4 className="font-bold text-xl">Abraham Godson</h4>
        </div>

        {/*  */}
        <div className="mt-12">
          <NavLink to="/" className="sidebar_link">
            <i className="ri-home-smile-line"></i> <span>Home</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <i className="ri-building-3-line"></i> <span>Properties</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <i className="ri-vip-crown-line"></i> <span>My Upline</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <i className="ri-award-line"></i> <span>My Downline</span>
          </NavLink>
          <NavLink to="/" className="sidebar_link">
            <i className="ri-shield-user-line"></i> <span>Account</span>
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-x-7 cursor-pointer">
        <i className="ri-logout-circle-r-line text-xl font-medium"></i>
        <span className="text-base">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
