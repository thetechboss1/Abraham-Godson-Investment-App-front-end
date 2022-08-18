import { Backdrop, CircularProgress } from "@mui/material";
import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const PageContext = createContext();

const PageContextProvider = (props) => {
  const navigate = useNavigate();
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  const logout = () => {
    localStorage.clear("user_info");
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      {/* backdrop */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
        onClick={() => setOpenBackDrop(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <PageContext.Provider
        value={{
          setOpenBackDrop,
          userInfo,
          logout,
          checkLogin,
          setCheckLogin,
        }}
      >
        {props.children}
      </PageContext.Provider>
    </>
  );
};
export default PageContextProvider;
