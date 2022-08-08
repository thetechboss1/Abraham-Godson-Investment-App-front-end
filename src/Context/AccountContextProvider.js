import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { url } from "../Api";

export const AccountContext = createContext();

const AccountContextProvider = (props) => {
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  // retrieve user info
  const [userAccount, setUserAccount] = useState({});
  useEffect(() => {
    axios
      .get(`${url}/user/profile`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      })
      .then((response) => {
        // console.log("test",response.data.user);
        setUserAccount(response.data.user);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [userInfo.token]);

  return (
    <>
      <AccountContext.Provider
        value={{
          userAccount,
        }}
      >
        {props.children}
      </AccountContext.Provider>
    </>
  );
};
export default AccountContextProvider;
