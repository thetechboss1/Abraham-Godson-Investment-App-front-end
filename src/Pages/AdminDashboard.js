import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import HomeCard from "../Components/HomeCard";
import PageToper from "../Components/PageToper";
import { AccountContext } from "../Context/AccountContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

const AdminDashboard = () => {
  const { userAccount, userInfo } = useContext(AccountContext);
  const [realtors, setRealtors] = useState([]);
  const [properties, setProperties] = useState([]);

  const getAllData = useCallback(() => {
    //  ==== Get all realtors ===//
    const fn = async () => {
      let res = await axios.get(`${url}/admin/realtors`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      setRealtors(res.data.realtors);
    };
    fn();


    //==== get all properties ====//
    const fn1 = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      setProperties(res.data.properties);
    };
    fn1();

  }, [userInfo.token]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper
          title={`${userAccount.fullname} (Admin)`}
          desc=" Hello, Welcome back 🖐"
          adminAccount
        />

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <HomeCard
            title="All Realtors"
            bg="rgb(121, 19, 229)"
            number={realtors.length}
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="All Properties"
            bg="rgb(34, 34, 34)"
            icon="ri-building-3-line"
            number={properties.length}
          />

          <HomeCard
            title="House"
            bg="gray"
            number="100"
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="Land"
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
