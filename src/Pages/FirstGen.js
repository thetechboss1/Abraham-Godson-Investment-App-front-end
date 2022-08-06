import React, { useState } from "react";
import FirstGenDetails from "../Components/FirstGenDetails";
import avatar from "../Images/avatar.png";
import DashboardLayout from "../Layout/DashboardLayout";
import { Dialog, Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FirstGen = () => {
  const [openFullDialog, setOpenFullDialog] = useState(false);
  const listDownline = (
    <div onClick={() => setOpenFullDialog(true)} className="rounded-md px-4 py-3 border  bg-gray-100 cursor-pointer shadow-sm shadow-secondary hover:shadow-primary">
      <div className="flex items-center justify-between">
        <div>
          <img src={avatar} alt="avatar" className="h-16" />
        </div>
        <div>
          <h5 className="font-medium text-base pb-1">Reuben Arinze</h5>
          <p className="text-accent text-sm">Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Dialog fullScreen open={openFullDialog} TransitionComponent={Transition}>
        <DashboardLayout>
          <FirstGenDetails close={() => setOpenFullDialog(false)} />
        </DashboardLayout>
      </Dialog>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => listDownline)}
        </div>
      </div>
    </>
  );
};

export default FirstGen;
