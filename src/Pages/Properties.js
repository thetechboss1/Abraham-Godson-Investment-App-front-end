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
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(PageContext);

  const getProperties = useCallback(() => {
    setLoading(true);
    const fn = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      setProperties(res.data.properties);
      setLoading(false);
    };
    fn();
  }, [userInfo?.token]);

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

          {switchProperty ? (
            <House properties={properties} loading={loading} />
          ) : (
            <Land  properties={properties} loading={loading} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Properties;
