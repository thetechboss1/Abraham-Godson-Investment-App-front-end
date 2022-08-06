import { Backdrop, CircularProgress } from "@mui/material";
import React, { useState, useEffect, createContext } from "react";
export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [openBackDrop, setOpenBackDrop] = useState(false);
  return (
    <>
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
