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
  const [houselen, setHouselen] = useState(0);
  const [landlen, setLandlen] = useState(0);
  const [paidlen, setPaidlen] = useState(0);
  const [unpaidlen, setUnpaidlen] = useState(0);

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

    // == GET ALL PROPERTIES ===//
    axios({
      url: `${url}/properties`,
      method: "get",
      headers: {
        Authorization: `bearer ${userInfo.token}`,
      },
    })
      .then((result) => {
        let data = result.data.properties;
        let land = data.filter((property) => {
          return property.type === "land";
        });

        setLandlen(land.length);
        let house = data.filter((property) => {
          return property.type === "house";
        });
        setHouselen(house.length);
      })
      .catch((err) => {});

    // == Get ALL SALES ==//
    axios({
      url: `${url}/sales`,
      method: "get",
      headers: {
        Authorization: `bearer ${userInfo.token}`,
      },
    })
      .then((result) => {
        let data = result.data.sales;
        let paid = data.filter((sale) => {
          return sale.commissionPaid === true;
        });
        setPaidlen(paid.length);
        let unpaid = data.filter((sales) => {
          return sales.commissionPaid === false;
        });
        setUnpaidlen(unpaid.length);
      })
      .catch((err) => {});
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
            number={houselen}
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="Land"
            bg="gray"
            number={landlen}
            icon="ri-shield-user-line"
          />

          <HomeCard
            title="Paid Commission"
            bg="rgb(13, 96, 216)"
            number={paidlen}
            icon="ri-bank-card-line"
          />
          <HomeCard
            title="Unpaid Commission"
            bg="#ff6103"
            number={unpaidlen}
            icon="ri-refund-2-fill"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
