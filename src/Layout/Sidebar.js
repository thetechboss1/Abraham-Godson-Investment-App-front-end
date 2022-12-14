import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { PageContext } from "../Context/PageContextProvider";
import logo from "../Images/app-logo-white.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logout, userInfo } = useContext(PageContext);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="sidebar px-4 pb-8 pt-7 flex  flex-col justify-between overflow-auto transition-all"
      style={{ width: isOpen ? "227px" : "63px" }}
    >
      <div>
        <div className="flex justify-center">
          <img src={logo} alt="logo" className={isOpen ? "h-20 mr-2" : "h-7"} />
        </div>

        {/* Admin view */}
        <div
          className={
            userInfo && userInfo.role === "user" ? "mt-12 hidden" : "mt-12"
          }
        >
          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Home" placement="right-start">
              <i className="ri-home-smile-line"></i>
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>Home</span>
          </NavLink>
          <NavLink to="/all-users" className="sidebar_link">
            <Tooltip title="Account" placement="right-start">
              <i className="ri-map-pin-user-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Realtors</span>
          </NavLink>

          <NavLink to="/properties" className="sidebar_link">
            <Tooltip title="properties" placement="right-start">
              <i className="ri-building-3-line"></i>
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>Properties</span>
          </NavLink>

          <NavLink to="/sales-records" className="sidebar_link">
            <Tooltip title="Sales-records" placement="right-start">
              <i className="ri-map-pin-user-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Sales Records</span>
          </NavLink>

          <NavLink to="/account" className="sidebar_link">
            <Tooltip title="admin-account" placement="right-start">
              <i className="ri-shield-user-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Account</span>
          </NavLink>
        </div>

        {/* Normal user view*/}
        <div
          className={
            userInfo && userInfo.role === "admin" ? "mt-12 hidden" : "mt-12"
          }
        >
          <NavLink to="/" className="sidebar_link">
            <Tooltip title="Home" placement="right-start">
              <i className="ri-home-smile-line"></i>
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>Home</span>
          </NavLink>

          <NavLink to="/downline" className="sidebar_link">
            <Tooltip title="Downline" placement="right-start">
              <i className="ri-award-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Downline</span>
          </NavLink>
          <NavLink to="/properties" className="sidebar_link">
            <Tooltip title="Properties" placement="right-start">
              <i className="ri-building-3-line"></i>
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>Properties</span>
          </NavLink>
          <NavLink to="/account" className="sidebar_link">
            <Tooltip title="Account" placement="right-start">
              <i className="ri-shield-user-line"></i>
            </Tooltip>

            <span className={isOpen ? "" : "hidden"}>Account</span>
          </NavLink>
        </div>
      </div>

      <div>
        <div
          className="flex items-center gap-x-7 cursor-pointer justify-start"
          onClick={logout}
        >
          <Tooltip title="Logout" placement="right-start">
            <i className="ri-logout-circle-r-line text-xl font-medium"></i>
          </Tooltip>

          <span className={isOpen ? "text-base" : "hidden"}>Logout</span>
        </div>

        <div
          className="flex items-center gap-x-7 cursor-pointer justify-start mt-3"
          onClick={toggle}
        >
          <Tooltip
            title={isOpen ? "Close sidebar" : "Open sidebar"}
            placement="right-start"
          >
            <i
              className={
                isOpen
                  ? "ri-arrow-left-line text-xl font-medium"
                  : "ri-arrow-right-line text-xl font-medium"
              }
            ></i>
          </Tooltip>

          <span className={isOpen ? "text-base" : "hidden"}>Switch</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
