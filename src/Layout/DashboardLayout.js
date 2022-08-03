import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="pb-10">
    <div className="topbar">
      <Topbar/>
    </div>
      <div className="flex w-full relative">
        <div className="sidebarWrap lg:flex hidden">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <main className={isOpen ? `flex-1 lg:ml-60` : `flex-1 lg:ml-16`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
