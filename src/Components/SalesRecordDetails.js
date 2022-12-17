import axios from 'axios';
import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";

export const SalesRecordDetails = ({ close, id }) => {
  const { userInfo } = useContext(PageContext);
  const [, set] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/user/profile/byID/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setUserAccount(response.data.user.upline);
        setAccountOwner(response.data.user);
        setSales(response.data.sales);
      })

      .catch((err) => {});
  }, [userInfo?.token, id]);


  return (
    <div>SalesRecordDetails</div>
  )
}
