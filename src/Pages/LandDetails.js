import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";

const LandDetails = ({ close, id }) => {
  const { userInfo } = useContext(PageContext);
  const [fullDetails, setFullDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/properties/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setFullDetails(response.data.property);
      })

      .catch((err) => {
        console.error("err", err);
      });
  }, [userInfo?.token, id]);

  return (
    <>
      <div className="Container">
        <PageToper title={fullDetails.name} desc={fullDetails.location} />
        <div className="mb-6 flex justify-between items-center">
          <button className="button flex items-center gap-2" onClick={close}>
            <span>All Properties</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <img
              src={fullDetails.image}
              alt="villa"
              className="rounded w-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg md:text-xl">
              {fullDetails.price &&
                fullDetails.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
            </h3>
            <h6 className=" border-b-2 inline-block mt-1 pb-1 font-medium">
              Initial deposit:
              <span className="text-accent">
                {fullDetails.intialDeposit && fullDetails.intialDeposit.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </span>
            </h6>
            <h4 className="font-medium py-2">
              Land title:
              <span className="text-accent">
                {fullDetails.title && fullDetails.title}
              </span>
            </h4>

            <p className="text-sm text-justify">{fullDetails.description}</p>

            <div className="border-b mt-3" />
            <div className="flex mt-3 gap-7 ">
              <ul className="list-disc pl-4 text-sm">
                {fullDetails.moreDetails && fullDetails.moreDetails.map((ts) => (
                  <li key={ts}>{ts}</li>
                ))}
              </ul>
              <div className="border-r" />
              <div>
                <div>
                  <span className="text-sm">Plot size</span>
                  <div className="flex items-center gap-3">
                    <i className="ri-landscape-line text-xl"></i>
                    <span className="text-sm">{fullDetails.details}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandDetails;
