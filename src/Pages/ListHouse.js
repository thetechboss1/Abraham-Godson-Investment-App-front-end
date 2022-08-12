import { Modal } from "@mui/material";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import CreateHouse from "../Components/CreateHouse";
import { PageContext } from "../Context/PageContextProvider";

const ListHouse = () => {
  const [addModal, setAddModal] = useState(false);
  const [descModal, setDescModal] = useState(false);
  const { userInfo } = useContext(PageContext);
  const [properties, setProperties] = useState([]);

  const getProperties = useCallback(() => {
    const fn1 = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      });
      let data = res.data.properties;
      let house = data.filter((property) => {
        return property.type === "house";
      });
      setProperties(house);
    };
    fn1();
  }, [userInfo.token]);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  return (
    <div>
      <div className="-mt-14 flex justify-end">
        <button onClick={() => setAddModal(true)} className="button">
          Add +
        </button>
      </div>
      <CreateHouse open={addModal} handleClose={() => setAddModal(false)} />
      {properties.length === 0 && (
        <div>
          <h5 className="pt-4 font-medium text-lg"> No Property yet</h5>
        </div>
      )}
      {properties.length > 0 && (
        <table className="general_table mt-10">
          <thead className="bg-gray-200">
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Location</th>
              <th>Description</th>
              <th>Price</th>
              <th>Bedroom</th>
              <th>Bathroom</th>
              <th>Initial deposit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>2</td>
                    <td>3</td>
                    <td>{item.intialDeposit}</td>
                    <td className="flex items-center gap-3 justify-center">
                      <i
                        onClick={() => setDescModal(true)}
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
                  {/* description modal */}
                  <Modal open={descModal} onClose={() => setDescModal(false)}>
                    <div
                      className="CModal scrollBar"
                      style={{ maxWidth: 600, height: "85%" }}
                    >
                      <div className="flex justify-between items-center mb-7">
                        <h5 className="font-semibold text-accent text-lg capitalize">
                          {item.name}
                        </h5>
                        <i
                          className="fas fa-times cursor-pointer text-xl"
                          onClick={() => setDescModal(false)}
                        ></i>
                      </div>

                      <div>
                        <img
                          src={item.image}
                          alt=""
                          className="rounded w-full h-72"
                        />
                      </div>

                      <div>
                        <h5 className="font-medium pt-3 pb-1">Description: </h5>
                        <p className="text-justify text-sm">
                          {item.description}
                        </p>

                        <h5 className="font-medium pt-2 pb-1">Amenities: </h5>
                        <ul className="list-disc pl-4 text-sm">
                          <li>Elevator</li>
                          <li>Spa</li>
                          <li>Pool</li>
                          <li>Gym</li>
                          <li>24-hour</li>
                        </ul>
                      </div>
                    </div>
                  </Modal>
                </>
              );
            })}
          </tbody>
        </table>
      )}

      {/* description modal */}
    </div>
  );
};

export default ListHouse;
