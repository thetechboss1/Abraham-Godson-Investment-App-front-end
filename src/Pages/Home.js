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
  const [summarize, setSummarize] = useState({});

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

    //==== get all sales paid and unpaid commission ====//
    const fn1 = async () => {
      let res = await axios.get(`${url}/sales/mysales/stats`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      setSummarize(res.data);
    };
    fn1();
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
              number={summarize.totalSale}
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
              number={summarize.paidCommisin}
              icon="ri-bank-card-line"
            />
            <HomeCard
              title="Unpaid Commission"
              bg="#ff6103"
              number={summarize.unPaidCommisin}
              icon="ri-refund-2-fill"
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Home;
