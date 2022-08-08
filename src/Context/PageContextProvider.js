import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../Api";
export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

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
        }}
      >
        {props.children}
      </PageContext.Provider>
    </>
  );
};
export default PageContextProvider;
