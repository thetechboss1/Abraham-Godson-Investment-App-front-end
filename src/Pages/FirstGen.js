import React, { useState } from "react";
import FirstGenDetails from "../Components/FirstGenDetails";
import avatar from "../Images/avatar.png";
import DashboardLayout from "../Layout/DashboardLayout";
import { Dialog, Slide } from "@mui/material";
import { info } from "autoprefixer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FirstGen = ({ myDownlineFirstGen }) => {
  const [openFullDialog, setOpenFullDialog] = useState(false);

  return (
    <>
      <div>
        {myDownlineFirstGen.length === 0 ? (
          <div>
            <h5 className="pt-4 font-medium text-lg"> No Downline yet</h5>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myDownlineFirstGen.map((info) => {
              return (
                <>
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
                          {info.fullname}
                        </h5>
                        <p className="text-accent text-sm">{info.location}</p>
                      </div>
                    </div>
                  </div>
                  {/* full detail */}
                  <Dialog
                    fullScreen
                    open={openFullDialog}
                    TransitionComponent={Transition}
                  >
                    <DashboardLayout>
                      <FirstGenDetails
                        info={info}
                        close={() => setOpenFullDialog(false)}
                      />
                    </DashboardLayout>
                  </Dialog>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FirstGen;
