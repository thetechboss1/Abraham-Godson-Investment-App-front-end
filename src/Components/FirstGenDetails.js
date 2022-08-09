import axios from "axios";
import React, { useContext, useEffect } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import PageToper from "./PageToper";

const FirstGenDetails = ({ close, info }) => {
const {userInfo} = useContext(PageContext)
  useEffect(() => {
    axios
      .get(`${url}/user/refferalData`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo.token}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        // setMyDownlineFirstGen(response.data.data.firstlv);
        // setMyDownlineSecondGen(response.data.data.secondlv);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Container">
      <PageToper title={`${info.fullname} - Profile`} desc={info.location} />
      <div className="mb-6 flex justify-between items-center">
        <button className="button flex items-center gap-2" onClick={close}>
          <span>My Downline</span>
          <i className="ri-arrow-right-line font-medium"></i>
        </button>
        <button
          onClick={close}
          className="transparentButton flex items-center gap-2"
        >
          <span className="md:flex hidden">Close</span>
          <i className="ri-close-line"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="form-control">
            <label>Full name</label>
            <input
              type="text"
              placeholder={info.fullname}
              disabled
              className="placeholder:text-black"
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              placeholder={info.email}
              disabled
              className="placeholder:text-black"
            />
          </div>
          <div className="form-control">
            <label>Phone number</label>
            <input
              type="text"
              placeholder={info.phone}
              disabled
              className="placeholder:text-black"
            />
          </div>
          <div className="form-control">
            <label>Property sold</label>
            <input
              type="text"
              placeholder="0"
              disabled
              className="placeholder:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstGenDetails;
