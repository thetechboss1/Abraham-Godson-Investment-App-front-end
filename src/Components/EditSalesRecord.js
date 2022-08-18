import React, { useCallback, useContext, useEffect, useState } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import { url } from "../Api";
import { toast } from "react-toastify";
import { PageContext } from "../Context/PageContextProvider";

const EditSalesRecord = ({ open, handleClose }) => {
  const { userInfo } = useContext(PageContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  const [commissionPaid, setCommissionPaid] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    let data = {
      deposit,
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
        // toast.success("sales added successfully");
        setSending(false);
      })
      .catch((err) => {
        setSending(false);
      });
  };

  // const fetchAllData = useCallback(() => {}, [userInfo?.token]);

  // useEffect(() => {
  //   fetchAllData();
  // }, [fetchAllData]);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="CModal scrollBar" style={{ maxWidth: 600 }}>
        <div className="flex justify-between items-center mb-7">
          <h5 className="font-semibold text-accent text-lg">
            Edit Sales Record
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
            <label>Amount Paid</label>
            <input
              type="number"
              onChange={(e) => setDeposit(e.target.value)}
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
              <option value="" required>
                -select Commission status--
              </option>
              <option value="true">paid</option>
              <option value="false">unpaid</option>
            </select>
          </div>

          <div>
            <h4 className="invisible">space</h4>
            <button type="submit" className="button">
              {sending ? "Updating" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditSalesRecord;
