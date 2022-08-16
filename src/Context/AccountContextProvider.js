import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { url } from "../Api";

export const AccountContext = createContext();

const AccountContextProvider = (props) => {
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  // retrieve user info
  const [userAccount, setUserAccount] = useState({});
  useEffect(() => {
    if(localStorage.getItem("user_info") !== null) {
      axios
      .get(`${url}/user/profile`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setUserAccount(response.data.user);
      })

      .catch((err) => {
        console.error(err);
      });
    }

  }, []);

  return (
    <>
      <AccountContext.Provider
        value={{
          userAccount,
          userInfo
        }}
      >
        {props.children}
      </AccountContext.Provider>
    </>
  );
};
export default AccountContextProvider;
