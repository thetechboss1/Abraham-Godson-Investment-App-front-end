import { Modal } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import { ViewerForm } from "./Helper/ViewerForm";
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
        <ViewerForm
          label="Created Date"
          placeholder={sale.createdAt?.split("T")[0]}
          type="input"
        />
        <ViewerForm
          label="Updated Date"
          placeholder={sale?.updatedAt?.split("T")[0]}
          type="input"
        />
        <ViewerForm
          label="Client Full Name"
          placeholder={sale.buyerDetails?.buyerName}
          type="input"
        />
        <ViewerForm
          label="Client Email"
          placeholder={sale.buyerDetails?.buyerEmail}
          type="input"
        />
        <ViewerForm
          label="Client Phone"
          placeholder={sale.buyerDetails?.buyerPhone}
          type="input"
        />
      </div>
    </Modal>
  );
};
