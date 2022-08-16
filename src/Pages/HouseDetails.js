import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";

const HouseDetails = ({ close, id }) => {
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
        
      });
  }, [userInfo?.token, id]);


  return (
    <>
      <div className="Container pb-10">
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
              alt={fullDetails.name}
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
            <h6 className=" border-b-2 inline-block my-2 pb-1 font-medium">
              Initial deposit:{" "}
              <span className="text-accent">
                {fullDetails.intialDeposit &&
                  fullDetails.intialDeposit.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
              </span>
            </h6>
            <p className="text-sm text-justify">{fullDetails.description}</p>

            <div className="border-b mt-3" />
            <div className="flex mt-3 gap-7 ">
              <ul className="list-disc pl-4 text-sm">
                {fullDetails.moreDetails &&
                  fullDetails.moreDetails.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
              </ul>
              <div className="border-r" />
              <div>
                <div className="flex items-center gap-5">
                  <div>
                    <span className="text-sm">Bedroom</span>
                    <div className="flex items-center gap-3">
                      <i className="ri-hotel-bed-line text-xl"></i>
                      <span>
                        {fullDetails.details && fullDetails.details[0]}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm">Bathroom</span>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-shower text-lg"></i>
                      <span>
                        {fullDetails.details && fullDetails.details[1]}
                      </span>
                    </div>
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

export default HouseDetails;
