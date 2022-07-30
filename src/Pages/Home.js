import React from "react";
import HomeCard from "../Components/HomeCard";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const Home = () => {
  return (
    <>
      <DashboardLayout>
        <div className="Container">
          <PageToper title=" Onyekachi Smile" desc=" Hello, Welcome back 🖐" />

          <div className="grid gap-6 grid-cols-3 mt-10">
            <HomeCard
              title="Total Property Sold"
              bg="rgb(121, 19, 229)"
              number="20"
              icon=" ri-building-3-line"
            />
            <HomeCard
              title="My Referrals "
              bg="rgb(34, 34, 34)"
              icon="ri-line-chart-line"
              number="100"
            />

            <HomeCard
              title="My Downline"
              bg="rgb(13, 96, 216)"
              number="50"
              icon="ri-award-line"
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Home;
