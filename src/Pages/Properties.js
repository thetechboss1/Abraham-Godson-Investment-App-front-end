import React, { useState } from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";
import House from "./House";
import Land from "./Land";

const Properties = () => {
  const [switchProperty, setSwitchProperty] = useState(true);
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="Properties" desc="Listed Properties" />
        <div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={switchProperty ? "button" : "transparentButton"}
              onClick={() => setSwitchProperty(true)}
            >
              House
            </button>
            <button
              className={switchProperty ? "transparentButton" : "button"}
              onClick={() => setSwitchProperty(false)}
            >
              Land
            </button>
          </div>

          {switchProperty ? <House /> : <Land />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Properties;
