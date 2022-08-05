import React from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const AdminAccount = () => {
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="My Account" desc="Godswill Admin" adminAccount />
        <div>AdminAccount</div>
      </div>
    </DashboardLayout>
  );
};

export default AdminAccount;
