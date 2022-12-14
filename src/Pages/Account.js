import { Dialog, Slide } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import EditAccount from "../Components/AccountSettings/EditAccount";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";
import avatar from "../Images/avatar.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AccountContext } from "../Context/AccountContextProvider";
import { url } from "../Api";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Account = () => {
  const { userAccount, userInfo } = useContext(AccountContext);
  const [openFullDialog, setOpenFullDialog] = useState(false);
  const [getUpline, setGetUpline] = useState({})
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    notify();
  }
  const notify = () => toast.success("Copied!");

  useEffect(() => {
    const fn = async () => {
      let res = await axios.get(`${url}/user/refferalData`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      setGetUpline(res.data.upline);
    };
    fn();
  }, [userInfo?.token]);




  return (
    <DashboardLayout>
      {/* edit dialog */}
      <ToastContainer />
      <Dialog fullScreen open={openFullDialog} TransitionComponent={Transition}>
        <DashboardLayout>
          <EditAccount close={() => setOpenFullDialog(false)} />
        </DashboardLayout>
      </Dialog>
      <div className="Container">
        <PageToper title="My Account" desc={userAccount.fullname} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="flex justify-center">
              <img src={avatar} alt="avatar" className="h-20 md:h-40" />
            </div>
            <h5 className="text-center font-semibold pt-3 md:text-2xl text-xl text-gray-600">
              {userAccount.fullname}
            </h5>
            <div className="flex justify-center items-center gap-5 text-xs text-accent mt-3 mb-4">
              <span>Abraham Godson Realtors</span>
              <span className="flex items-center">
                <i className="ri-phone-fill text-secondary pr-2 text-sm"></i>
                <span>{userAccount.phone}</span>
              </span>
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

                <div className="flex items-center bg-gray-100 px-2">
                  <input
                    type="text"
                    ref={textAreaRef}
                    value={`https://agrn.com.ng/register?ref=${userAccount.refID}`}
                    className="focus:outline-none w-full bg-gray-100 py-2 text-sm rounded-md"
                  />
                  <i
                    className="ri-file-copy-line hover:text-primary text-lg cursor-pointer"
                    onClick={copyToClipboard}
                  ></i>
                </div>
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
                  <h5 className="font-medium text-base pb-1">{getUpline && getUpline.fullname}</h5>
                  <p className="text-accent text-sm">{getUpline && getUpline.email}</p>
                  <h5 className="font-medium text-base pb-1">{!getUpline && "No Upline"}</h5>
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
              <Link to="/downline" className="button">
                1st Generation
              </Link>
              <Link to="/downline" className="button">
                2nd Generation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Account;
