import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../Api";
import HomeCard from "../Components/HomeCard";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const Home = () => {
  const userToken = JSON.parse(localStorage.getItem("user_info"));

  const [userName, setUserName] = useState("");
    useEffect(() => {
      axios
        .get(`${url}/user/profile`, {
          headers: {
            Accept: "application/json",
            Authorization: `bearer ${userToken.token}`,
          },
        })
        .then((response) => {
          setUserName(response.data.user.fullname);
        })
  
        .catch((err) => {
          console.log(err);
        });
    }, [userToken.token]);

  return (
    <>
      <DashboardLayout>
        <div className="Container mb-10">
          <PageToper title={userName} desc=" Hello, Welcome back 🖐" />

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
