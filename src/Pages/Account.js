import React from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const Account = () => {
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="My Account" desc="Godswill Omenuko Onyekachi" />
      </div>
    </DashboardLayout>
  );
};

export default Account;
