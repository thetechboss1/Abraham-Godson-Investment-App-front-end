import { Modal } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import { pStyle } from "./RealtorsDetails";

export const SalesRecordDetails = ({ handleClose, open, id }) => {
  const { userInfo } = useContext(PageContext);
  const [sale, setSale] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/sales/single/view/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setSale(response.data.sales);
      })

      .catch((err) => {});
  }, [userInfo?.token, id]);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="CModal scrollBar" style={{ maxWidth: 600 }}>
        <h4 className="font-semibold text-lg pb-4">More Sale Details</h4>

        <div className="form-control">
          <label>Created Date</label>
          <input
            type="text"
            placeholder={sale.createdAt?.split("T")[0]}
            disabled={true}
            className={pStyle}
          />
        </div>
        <div className="form-control">
          <label>Created Date</label>
          <input
            type="text"
            placeholder={sale?.updatedAt?.split("T")[0]}
            disabled={true}
            className={pStyle}
          />
        </div>
        <div className="form-control">
          <label>Full name</label>
          <input
            type="text"
            placeholder={sale.buyerDetails?.buyerName}
            disabled={true}
            className={pStyle}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            placeholder={sale.buyerDetails?.buyerEmail}
            disabled={true}
            className={pStyle}
          />
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            type="text"
            placeholder={sale.buyerDetails?.buyerPhone}
            disabled={true}
            className={pStyle}
          />
        </div>
      </div>
    </Modal>
  );
};
