import React, { useContext } from "react";
import HomeCard from "../Components/HomeCard";
import PageToper from "../Components/PageToper";
import { AccountContext } from "../Context/AccountContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

const Home = () => {
  const {userAccount} = useContext(AccountContext)
  return (
    <>
      <DashboardLayout>
        <div className="Container mb-10">
          <PageToper title={userAccount.fullname} desc=" Hello, Welcome back 🖐" />

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
    </>
  );
};

export default Home;
