import React from "react";
import HomeCard from "../Components/HomeCard";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="Admin" desc=" Hello, Welcome back 🖐" adminAccount />

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <HomeCard
            title="All Realtors"
            bg="rgb(121, 19, 229)"
            number="1030"
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="All Properties"
            bg="rgb(34, 34, 34)"
            icon="ri-building-3-line"
            number="200"
          />

          <HomeCard
            title="Houses"
            bg="gray"
            number="100"
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="Lands"
            bg="gray"
            number="100"
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="Paid Commission"
            bg="rgb(13, 96, 216)"
            number="50"
            icon="ri-bank-card-line"
          />
          <HomeCard
            title="Unpaid Commission"
            bg="#ff6103"
            number="50"
            icon="ri-refund-2-fill"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
