import { Dialog, Slide } from "@mui/material";
import React, { useState } from "react";
import EditAccount from "../Components/EditAccount";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";
import avatar from "../Images/avatar.png";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Account = () => {
  const [openFullDialog, setOpenFullDialog] = useState(false);
  return (
    <DashboardLayout>
      {/* edit dialog */}
      <Dialog fullScreen open={openFullDialog} TransitionComponent={Transition}>
        <DashboardLayout>
          <EditAccount close={() => setOpenFullDialog(false)} />
        </DashboardLayout>
      </Dialog>
      <div className="Container mb-10">
        <PageToper title="My Account" desc="Godswill Omenuko Onyekachi" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="flex justify-center">
              <img src={avatar} alt="avatar" className="h-20 md:h-40" />
            </div>
            <h5 className="text-center font-semibold pt-3 md:text-2xl text-xl text-gray-600">
              Godswill Omenuko
            </h5>
            <div className="flex justify-center items-center gap-5 text-xs text-accent mt-3 mb-4">
              <span>Abraham Godson Realtors</span>
              <span className="flex items-center">
                <i className="ri-map-pin-fill text-secondary pr-2 text-sm"></i>
                <span>Lagos, Nigeria</span>
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center mb-5 text-sm">
              <span>0</span>
              <i className="ri-star-fill"></i>
              <span>Rating</span>
            </div>
            <div className="lg:px-5">
              <button
                onClick={() => setOpenFullDialog(true)}
                type="button"
                className="transparentButton w-full mt-3"
              >
                Edit Profile
              </button>

              <div>
                <h5 className="text-base pt-5 pb-2 font-medium text-gray-600">
                  My Referral code
                </h5>
                <button className="flex items-center text-accent gap-5 rounded-md bg-gray-100 w-full py-2 px-3">
                  <span>https://googleapis.dev/</span>
                  <i className="ri-file-copy-line"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:border-l lg:border-slate-300 lg:pl-9">
            <h5 className="text-base pt-5 pb-3 font-medium text-gray-600">
              My Upline
            </h5>
            <div className="rounded-md px-4 py-3 border  bg-gray-100 cursor-pointer shadow-sm shadow-secondary hover:shadow-primary">
              <div className="flex items-center justify-between">
                <div>
                  <img src={avatar} alt="avatar" className="h-16" />
                </div>
                <div>
                  <h5 className="font-medium text-base pb-1">Reuben Arinze</h5>
                  <p className="text-accent text-sm">Lagos, Nigeria</p>
                </div>
                <div>
                  <i class="ri-shield-check-fill text-2xl text-secondary"></i>
                </div>
              </div>
            </div>
            <h5 className="text-base pt-10 pb-3 font-medium text-gray-600">
              My Downline
            </h5>
                <div className="flex items-center justify-around">
                <Link to="/downline" className="button">1st Generation</Link>
               <Link to="/downline" className="button">2nd Generation</Link>
                </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Account;
