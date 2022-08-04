import React, { useState } from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";
import CreateHouse from "./ListHouse";
import CreateLand from "./ListLand";

const AdminProperties = () => {
  const [switchProperty, setSwitchProperty] = useState(true);
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper
          title="All Properties"
          desc="List of all properties"
          adminAccount
        />
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

          {switchProperty ? <CreateHouse /> : <CreateLand />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminProperties;
