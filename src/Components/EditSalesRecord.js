import React, { useContext, useEffect, useState } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import { url } from "../Api";
import { toast } from "react-toastify";
import { PageContext } from "../Context/PageContextProvider";

const EditSalesRecord = ({ open, handleClose, id }) => {
  const { userInfo } = useContext(PageContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  const [commissionPaid, setCommissionPaid] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    axios({
      url: `${url}/sales/${id}`,
      method: "patch",
      data: {
        deposit,
        status,
        commissionPaid: commissionPaid === "true" ? true : false,
      },
      headers: {
        authorization: `bearer ${userInfo?.token}`,
      },
    })
      .then((result) => {
        toast.success(result.data.message);
        setSending(false);
        handleClose();
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.data.message);
        setSending(false);
      });
  };

  useEffect(() => {
    axios
      .get(`${url}/sales/single/view/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        let val = response.data.sales;
        setDeposit(val.deposit);
        setStatus(val.status);
        setCommissionPaid(val.commissionPaid);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [userInfo?.token, id]);

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
              value={deposit}
            />
          </div>

          <div className="form-control">
            <label>Payment status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">-select Payment status--</option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>

          <div className="form-control">
            <label>Commission Paid</label>
            <select
              value={commissionPaid}
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
