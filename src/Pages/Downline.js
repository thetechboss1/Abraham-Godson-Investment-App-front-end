import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

import FirstGen from "./FirstGen";
import SecondGen from "./SecondGen";

const Downline = () => {
  const userToken = JSON.parse(localStorage.getItem("user_info"));

  const [switchGen, setSwitchGen] = useState(true);
  const [myDownlineFirstGen, setMyDownlineFirstGen] = useState([]);
  const [myDownlineSecondGen, setMyDownlineSecondGen] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${url}/user/refferalData`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userToken.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        // setmyDownline(response.data.user.fullname);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [userToken]);

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

          {switchGen ? <FirstGen /> : <SecondGen />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Downline;
