import React, { useEffect, useState } from "react";
import { Autocomplete, Modal, TextField } from "@mui/material";
import { Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import "../css/form.css";
import axios from "axios";
import { url } from "../Api";

const CreateSalesRecord = ({ open, handleClose }) => {
  // const [realtorsInputValue, setRealtorsInputValue] = useState("");
  // const [propertiesInputValue, setPropertiesInputValue] = useState("");
  const [realtors, setRealtors] = useState([]);
  const [properties, setProperties] = useState([]);

  // handle form
  // const initialValues = {
  //   property: propertiesInputValue,
  // };

  const validationSchema = Yup.object({});

  const onSubmit = (values) => {};

  const formik = useFormik({
    // initialValues,
    onSubmit,
    validationSchema,
  });

  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  useEffect(() => {
    axios({
      url: `${url}/sales`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo.token}`,
      },
    }).then((response) => {
      console.log(response);
    });

    axios({
      url: `${url}/admin/realtors`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo.token}`,
      },
    }).then((response) => {
      let data = response.data.realtors;
      setRealtors(data);
    });

    axios({
      url: `${url}/properties`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo.token}`,
      },
    }).then((response) => {
      let data = response.data.properties;
      setProperties(data);
    });
  }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="CModal scrollBar" style={{ maxWidth: 700 }}>
        <div className="flex justify-between items-center mb-7">
          <h5 className="font-semibold text-accent text-lg">
            Create Sales Record
          </h5>
          <i
            className="fas fa-times cursor-pointer text-xl"
            onClick={handleClose}
          ></i>
        </div>
        {/* property,user,deposit,buyerDetails,commissionPaid} */}
        <form className="grid grid-cols-2 gap-x-4">
          <div className="form-control">
            <label>Property</label>
            <select>
              <option value="">-Select Property --</option>
              {properties &&
                properties.map((item) => (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-control">
            <label>Realtor</label>
            <select>
              <option value="">-Select realtor --</option>
              {realtors &&
                realtors.map((user) => (
                  <option value={user._id} key={user._id}>
                    {user.fullname}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-control">
            <label>Amount Paid</label>
            <input type="number" />
          </div>

          <div className="form-control">
            <label>Buyers Name</label>
            <input type="text" />
          </div>

          <div className="form-control">
            <label>Buyers phone</label>
            <input type="tel" />
          </div>

          <div className="form-control">
            <label>Buyers email</label>
            <input type="email" />
          </div>

          <div className="form-control">
            <label>Commission Paid</label>
            <select>
              <option value="">-select Commission status--</option>
              <option value="true">paid</option>
              <option value="false">unpaid</option>
            </select>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateSalesRecord;
