import React, { useState } from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

import FirstGen from "./FirstGen";
import SecondGen from "./SecondGen";

const Downline = () => {
  const [switchGen, setSwitchGen] = useState(true);
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="My Downline" desc="List of realtors under me" />

        <div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={switchGen ? "button" : "transparentButton"}
              onClick={() => setSwitchGen(true)}
            >
              1st Generation
            </button>
            <button
              className={switchGen ? "transparentButton" : "button"}
              onClick={() => setSwitchGen(false)}
            >
              2nd Generation
            </button>
          </div>

          {switchGen ? <FirstGen /> : <SecondGen />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Downline;
