import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex w-full relative">
        <div className="sidebarWrap">
          <Sidebar />
        </div>
        <main className="flex-1 lg:ml-52">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
