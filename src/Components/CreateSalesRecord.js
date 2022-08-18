import React, { useCallback, useContext, useEffect, useState } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import { url } from "../Api";
import { toast } from "react-toastify";
import { PageContext } from "../Context/PageContextProvider";

const CreateSalesRecord = ({ open, handleClose }) => {
  const { userInfo } = useContext(PageContext);
  const [realtors, setRealtors] = useState([]);
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState("");
  const [property, setProperty] = useState("");
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  const [commissionPaid, setCommissionPaid] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    let data = {
      property,
      user,
      deposit,
      buyerDetails: {
        buyerName,
        buyerEmail,
        buyerPhone,
      },
      commissionPaid: commissionPaid === "true" ? true : false,
      status,
    };
    axios({
      url: `${url}/sales/create`,
      method: "post",
      data,
      headers: {
        authorization: `bearer ${userInfo?.token}`,
      },
    })
      .then((result) => {
        toast.success("sales added successfully");
        setSending(false);
      })
      .catch((err) => {
        setSending(false);
      });
  };

  const fetchAllData = useCallback(() => {
    // === realtors ===//
    axios({
      url: `${url}/admin/realtors`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo?.token}`,
      },
    }).then((response) => {
      let data = response.data.realtors;
      setRealtors(data);
    });

    // ==  fetch properties ===//
    axios({
      url: `${url}/properties`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo?.token}`,
      },
    }).then((response) => {
      let data = response.data.properties;
      setProperties(data);
    });
  }, [userInfo?.token]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

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
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-4"
          onSubmit={onSubmit}
        >
          <div className="form-control">
            <label>Property</label>
            <select onChange={(e) => setProperty(e.target.value)} required>
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
            <select onChange={(e) => setUser(e.target.value)} required>
              <option value="">--Select realtor--</option>
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
            <input
              type="number"
              onChange={(e) => setDeposit(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label>Buyers Name</label>
            <input
              type="text"
              onChange={(e) => setBuyerName(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label>Buyers phone</label>
            <input
              type="tel"
              onChange={(e) => setBuyerPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label>Buyers email</label>
            <input
              type="email"
              onChange={(e) => setBuyerEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label>Payment status</label>
            <select onChange={(e) => setStatus(e.target.value)} required>
              <option value="">-select Payment status--</option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>

          <div className="form-control">
            <label>Commission Paid</label>
            <select
              onChange={(e) => setCommissionPaid(e.target.value)}
              required
            >
              <option value="">-select Commission status--</option>
              <option value="true">paid</option>
              <option value="false">unpaid</option>
            </select>
          </div>

          <div>
            <button type="submit" className="button">
              {sending ? "Sending" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateSalesRecord;
