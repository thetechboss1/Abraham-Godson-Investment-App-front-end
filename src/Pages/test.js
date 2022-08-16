import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";
import CreateHouse from "./ListHouse";
import CreateLand from "./ListLand";

const AdminProperties = () => {
  const [switchProperty, setSwitchProperty] = useState(true);
  const { userInfo } = useContext(PageContext);
  const [properties, setProperties] = useState([]);

  const getProperties = useCallback(() => {
    const fn1 = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      setProperties(res.data.properties);
    };
    fn1();
  }, []);

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper
          title="All Properties"
          desc="List of all properties"
          adminAccount
        />
        <div>
          <div className="flex justify-between">
            <div className="flex items-center gap-4 mb-4">
              <button className="transparentButton">All</button>
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
            <div className="flex items-center gap-4 mb-4">
              <button
                className="button"
                // onClick={() => setSwitchProperty(true)}
              >
                Add House
              </button>
              <button
                className="transparentButton"
                // onClick={() => setSwitchProperty(false)}
              >
                Add Land
              </button>
            </div>
          </div>
          {properties.length === 0 && (
            <div>
              <h5 className="pt-4 font-medium text-lg"> No Property yet</h5>
            </div>
          )}
          {properties.length > 0 && (
            <table className="general_table mt-10">
              <thead className="bg-gray-200">
                <tr>
                  {/* <th>S/N</th> */}
                  <th>Name</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Bedroom</th>
                  <th>Bathroom</th>
                  <th>Initial deposit</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((item) => {
                  return (
                    <tr>
                      {/* <td>0{idx}</td> */}
                      <td>{item.name}</td>
                      <td>{item.location}</td>
                      <td>{item.location}</td>
                      <td>{item.price}</td>
                      <td>{item.moreDetails[0]}</td>
                      <td>{item.moreDetails[1]}</td>
                      <td>{item.intialDeposit}</td>
                      <td>{item.type}</td>
                      <td className="flex items-center gap-3 justify-center">
                        <i
                          // onClick={() => setDescModal(true)}
                          className="ri-eye-line cursor-pointer hover:text-primary text-lg"
                        ></i>
                        <i
                          // onClick={() => setAddModal(true)}
                          className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
                        ></i>
                        <i
                          onClick={() => alert("Delete Item")}
                          className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {/* {switchProperty ? <CreateHouse /> : <CreateLand />} */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminProperties;
