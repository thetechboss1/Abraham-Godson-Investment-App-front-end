import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import HomeCard from "../Components/HomeCard";
import PageToper from "../Components/PageToper";
import { AccountContext } from "../Context/AccountContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

const Home = () => {
  const { userAccount, userInfo } = useContext(AccountContext);
  const [sales, setSales] = useState([]);
  const [myDownlineFirstGen, setMyDownlineFirstGen] = useState([]);

  const getAllData = useCallback(() => {
    //==== get downline ====
    const fn = async () => {
      let res = await axios.get(`${url}/user/refferalData`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      setMyDownlineFirstGen(res.data.data.firstlv);
    };
    fn();

    // === Get sales record ====
    axios({
      url: `${url}/sales`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo.token}`,
      },
    }).then((response) => {
      let data = response.data.sales;
      setSales(data);
    });
  }, [userInfo.token]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <>
      <DashboardLayout>
        <div className="Container mb-10">
          <PageToper
            title={userAccount.fullname}
            desc=" Hello, Welcome back 🖐"
          />

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <HomeCard
              title="Total Property Sold"
              bg="rgb(121, 19, 229)"
              number={sales.length}
              icon=" ri-building-3-line"
            />
            <HomeCard
              title="My Referrals "
              bg="rgb(34, 34, 34)"
              icon="ri-line-chart-line"
              number={myDownlineFirstGen.length}
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
