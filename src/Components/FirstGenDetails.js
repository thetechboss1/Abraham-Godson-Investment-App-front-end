import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import PageToper from "./PageToper";

const FirstGenDetails = ({ close, id }) => {
  const { userInfo } = useContext(PageContext);
  const [fullDetails, setFullDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/user/profile/byID/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setFullDetails(response.data.user);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [userInfo?.token, id]);

  return (
    <div className="Container">
      <PageToper
        title={`${fullDetails.fullname} - Profile`}
        desc={fullDetails.location}
      />
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
              placeholder={fullDetails.fullname}
              disabled
              className="placeholder:text-black"
            />
          </div>
          <div className="form-control">
            <label>Address</label>
            <input
              type="text"
              placeholder={fullDetails.houseAdress}
              disabled
              className="placeholder:text-black"
            />
          </div>
          <div className="form-control">
            <label>Phone number</label>
            <input
              type="text"
              placeholder={fullDetails.phone}
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
