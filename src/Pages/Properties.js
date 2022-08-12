import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";
import House from "./House";
import Land from "./Land";

const Properties = () => {
  const [switchProperty, setSwitchProperty] = useState(true);


  const { userInfo } = useContext(PageContext);

  const getProperties = useCallback(() => {
    const fn = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      // console.log("prop",res.data.properties);
    };
    fn();
  }, [userInfo.token]);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="Properties" desc="Listed Properties" />
        <div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={switchProperty ? "button" : "transparentButton"}
              onClick={() => setSwitchProperty(true)}
            >
              House
            </button>
            <button
              className={switchProperty ? "transparentButton" : "button"}
              onClick={() => setSwitchProperty(false)}
            >
              Land
            </button>
          </div>

          {switchProperty ? <House /> : <Land />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Properties;
