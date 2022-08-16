import { Modal } from "@mui/material";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { AdminHouseDetail } from "../Components/AdminHouseAndLandDetails";
import CreateHouse from "../Components/CreateHouse";
import EditHouse from "../Components/EditHouse";
import { PageContext } from "../Context/PageContextProvider";

const AdminListHouse = () => {
  const [addModal, setAddModal] = useState(false);
  const [descModal, setDescModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const { userInfo } = useContext(PageContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getId, setGetId] = useState("");

  const getProperties = useCallback(() => {
    setLoading(true);
    const fn1 = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      let data = res.data.properties;
      let house = data.filter((property) => {
        return property.type === "House";
      });
      setProperties(house);
      setLoading(false);
    };
    fn1();
  }, [userInfo?.token]);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  const deleteProperty = (id) => {
    const fn1 = async () => {
      alert("Are you sure you want to delete property");
      let res = await axios.delete(`${url}/properties/${id}`, {
        headers: {
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      const newProperty = properties.filter((item) => item.id !== id);
      setProperties(newProperty);
      if (res) {
        window.location.reload();
      }
    };
    fn1();
  };

  const openDetails = (id) => {
    setGetId(id);
    setDescModal(true);
  };

  const openEdit = (id) => {
    setEditModal(true);
    setGetId(id);
  };

  return (
    <div>
      <div className="-mt-14 flex justify-end">
        <button onClick={() => setAddModal(true)} className="button">
          Add +
        </button>
      </div>
      <CreateHouse open={addModal} handleClose={() => setAddModal(false)} />
      <AdminHouseDetail
        id={getId}
        open={descModal}
        handleClose={() => setDescModal(false)}
      />
      <EditHouse
        id={getId}
        open={editModal}
        handleClose={() => setEditModal(false)}
      />
      {!loading && properties.length === 0 && (
        <div>
          <h5 className="pt-4 font-medium text-lg"> No Property yet</h5>
        </div>
      )}

      {loading && (
        <div>
          <h5 className="pt-4 font-medium text-lg">Loading....</h5>
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
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.description.slice(0, 31)}...</td>
                    <td>
                      {item.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </td>
                    <td>{item.details[0]}</td>
                    <td>{item.details[1]}</td>
                    <td>
                      {item.intialDeposit.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </td>
                    <td className="flex items-center gap-3 justify-center">
                      <i
                        onClick={() => openDetails(item._id)}
                        className="ri-eye-line cursor-pointer hover:text-primary text-lg"
                      ></i>
                      <i
                        onClick={() => openEdit(item._id)}
                        className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
                      ></i>
                      <i
                        onClick={() => deleteProperty(item._id)}
                        className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"
                      ></i>
                    </td>
                  </tr>
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

export default AdminListHouse;
