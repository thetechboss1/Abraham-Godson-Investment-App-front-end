import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  const [moduleDrawer, setModuleDrawer] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setModuleDrawer({ ...moduleDrawer, [anchor]: open });
  };

  return (
    <>
      <div className="bg-primary">
        <div className="Container flex justify-between items-center text-white py-2">
          <h4 className="font-bold text-lg">Abraham Godson</h4>
          <i className="ri-menu-line text-xl font-bold cursor-pointer" onClick={toggleDrawer("left", true)}></i>
        </div>
      </div>

      {/* sidebar drawer */}
      <Drawer open={moduleDrawer["left"]} onClose={toggleDrawer("left", false)}>
        <div className="Container flex justify-end">
          <i
            className="ri-close-line text-right pt-5 text-xl cursor-pointer"
            onClick={toggleDrawer("left", false)}
          ></i>
        </div>
        <div
          className="flex items-center overflow-auto"
          style={{ height: "97vh" }}
        >
          <div className="Container flex gap-4 flex-col text-accent font-medium">
            <NavLink to="/" className="sidebar_link_mobile">
              <i className="ri-scales-line text-base"></i>
              <span>Home</span>
            </NavLink>
            <NavLink to="/" className="sidebar_link_mobile">
              <i className="ri-money-dollar-circle-line text-base"></i>
              <span>Payroll</span>
            </NavLink>
            <NavLink to="/" className="sidebar_link_mobile">
              <i className="ri-team-line text-base"></i>
              <span>Manage employee</span>
            </NavLink>
            <NavLink to="/" className="sidebar_link_mobile">
              <i className="ri-user-shared-2-line text-base"></i>
              <span>Recruitment</span>
            </NavLink>
            <NavLink to="/" className="sidebar_link_mobile">
              <i className="ri-honour-line text-base"></i>
              <span>Attendance</span>
            </NavLink>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Topbar;
