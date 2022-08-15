import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

import FirstGen from "./FirstGen";
import SecondGen from "./SecondGen";

const Downline = () => {
  const {userInfo} = useContext(PageContext)
  const [loading, setLoading] = useState(false)

  const [switchGen, setSwitchGen] = useState(true);
  const [myDownlineFirstGen, setMyDownlineFirstGen] = useState([]);
  const [myDownlineSecondGen, setMyDownlineSecondGen] = useState([]);

  const getD = useCallback(() => {
    setLoading(true)
    const fn = async () => {
      let res = await axios.get(`${url}/user/refferalData`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      setMyDownlineFirstGen(res.data.data.firstlv);
      setMyDownlineSecondGen(res.data.data.secondlv);
      setLoading(false)
    };
    fn();
  }, [userInfo.token]);

  useEffect(() => {
    getD();
  }, [getD]);


  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="My Downline" desc="List of realtors under me" />

        <div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={switchGen ? "button" : "transparentButton"}
              onClick={() => setSwitchGen(true)}
            >
              1st Generation
            </button>
            <button
              className={switchGen ? "transparentButton" : "button"}
              onClick={() => setSwitchGen(false)}
            >
              2nd Generation
            </button>
          </div>

          {switchGen ? (
            <FirstGen loading={loading} myDownlineFirstGen={myDownlineFirstGen} />
          ) : (
            <SecondGen myDownlineSecondGen={myDownlineSecondGen} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Downline;
