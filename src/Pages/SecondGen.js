import React, { useState } from "react";
import avatar from "../Images/avatar.png";
import DashboardLayout from "../Layout/DashboardLayout";
import { Dialog, Slide } from "@mui/material";
import SecondGenDetails from "../Components/SecondGenDetails";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SecondGen = ({ myDownlineSecondGen }) => {
  const [openFullDialog, setOpenFullDialog] = useState(false);
  return (
    <>
      <Dialog fullScreen open={openFullDialog} TransitionComponent={Transition}>
        <DashboardLayout>
          <SecondGenDetails close={() => setOpenFullDialog(false)} />
        </DashboardLayout>
      </Dialog>

      <div>
        {myDownlineSecondGen.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myDownlineSecondGen.map((info) => {
              console.log("info", info);
              return (
                <div
                  onClick={() => setOpenFullDialog(true)}
                  className="rounded-md px-4 py-3 border  bg-gray-100 cursor-pointer shadow-sm shadow-secondary hover:shadow-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <img src={avatar} alt="avatar" className="h-16" />
                    </div>
                    <div>
                      <h5 className="font-medium text-base pb-1">
                        {/* {info.fullname} */}
                        Test name
                      </h5>
                      <p className="text-accent text-sm">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h5 className="pt-4 font-medium text-lg"> No Downline yet</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default SecondGen;
