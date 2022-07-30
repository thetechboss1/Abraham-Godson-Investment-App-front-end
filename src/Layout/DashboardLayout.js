import React, { useState } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="flex w-full relative">
        <div className="sidebarWrap lg:flex hidden">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <main className={isOpen ? `flex-1 lg:ml-60` : `flex-1 lg:ml-16`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
