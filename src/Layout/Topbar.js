import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Topbar = () => {
  const [moduleDrawer, setModuleDrawer] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setModuleDrawer({ ...moduleDrawer, [anchor]: open });
  };

  return (
    <>
      <div className="bg-primary w-full">
        <div className="Container flex justify-between items-center text-white py-2">
          <h4 className="font-bold text-lg">Abraham Godson</h4>
          <i
            className="ri-menu-line text-xl font-bold cursor-pointer"
            onClick={toggleDrawer("left", true)}
          ></i>
        </div>
      </div>

      {/* sidebar drawer */}
      <Drawer open={moduleDrawer["left"]} onClose={toggleDrawer("left", false)}>
        <div className="px-4 pb-8 pt-5 flex  flex-col justify-between h-screen overflow-hidden ">
          <div>
            <div className="Container flex justify-end">
              <i
                className="ri-close-line text-right text-xl cursor-pointer"
                onClick={toggleDrawer("left", false)}
              ></i>
            </div>
            
            {/* Normal user view */}
            <div className="mt-14">
              <div className="flex gap-5 flex-col text-accent font-medium">
                <NavLink to="/" className="sidebar_link_mobile">
                  <i className="ri-home-smile-line text-base"></i>
                  <span>Home</span>
                </NavLink>
               
                <NavLink to="/downline" className="sidebar_link_mobile">
                  <i className="ri-award-line text-base"></i>
                  <span>Downline</span>
                </NavLink>
                <NavLink to="/properties" className="sidebar_link_mobile">
                  <i className="ri-building-3-line text-base"></i>
                  <span>Properties</span>
                </NavLink>
                <NavLink to="/account" className="sidebar_link_mobile">
                  <i className="ri-shield-user-line text-base"></i>
                  <span>Account</span>
                </NavLink>
              </div>
            </div>

            {/* Admin view */}
            <div className="mt-14 hidden">
              <div className="flex gap-5 flex-col text-accent font-medium">
                <NavLink to="/" className="sidebar_link_mobile">
                  <i className="ri-home-smile-line text-base"></i>
                  <span>Home</span>
                </NavLink>
                <NavLink to="/users" className="sidebar_link_mobile">
                  <i className="ri-vip-crown-line text-base"></i>
                  <span>Users</span>
                </NavLink>
                <NavLink to="/admin-properties" className="sidebar_link_mobile">
                  <i className="ri-award-line text-base"></i>
                  <span>Properties</span>
                </NavLink>
                <NavLink to="/admin-account" className="sidebar_link_mobile">
                  <i className="ri-building-3-line text-base"></i>
                  <span>Account</span>
                </NavLink>
               
              </div>
            </div>

          </div>

          <div className="flex items-center gap-x-7 cursor-pointer justify-start">
            <Tooltip title="Logout" placement="right-start">
              <i className="ri-logout-circle-r-line text-xl font-medium"></i>
            </Tooltip>

            <span className="text-base">Logout</span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Topbar;
