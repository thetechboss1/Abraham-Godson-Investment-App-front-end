import React, { useCallback, useContext, useEffect, useState } from "react";
import ShareProperty from "../Components/ShareProperty";
import { Dialog, Slide } from "@mui/material";
import HouseDetails from "./HouseDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import { PageContext } from "../Context/PageContextProvider";
import { url } from "../Api";
import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const House = ({ properties, loading }) => {
  const [openShare, setOpenShare] = useState(false);
  const [openFullDialog, setOpenFullDialog] = useState(false);
  const [getId, setGetId] = useState("");

  const openDetails = (id) => {
    setGetId(id);
    setOpenFullDialog(true);
  };

  const listHouse = properties.filter((p) => {
    return p.type === "House";
  });


  return (
    <>
      {/* House details */}
      <Dialog fullScreen open={openFullDialog} TransitionComponent={Transition}>
        <DashboardLayout>
          <HouseDetails id={getId} close={() => setOpenFullDialog(false)} />
        </DashboardLayout>
      </Dialog>

      {/* sear bar */}
      <form className="flex items-center justify-end md:-mt-16">
        <div className="relative w-full md:w-56">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search property"
          />
        </div>
      </form>

      {loading && (
        <div>
          <h5 className="pt-4 font-medium text-lg">Loading....</h5>
        </div>
      )}

      {/* {listHouse.length === 0 && (
        <div>
          <h5 className="pt-4 font-medium text-lg">No Property Yet</h5>
        </div>
      )} */}

      <div className="propertyWrap mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        {listHouse.map((item) => (
          <div className="box rounded cursor-pointer">
            <div
              className="top rounded-tr"
              onClick={() => openDetails(item._id)}
            >
              <img src={item.image} alt={item.name} className="rounded-tr" />
            </div>
            <div className="bottom">
              <h3 className="text-lg font-medium pb-5 pt-1">{item.name}</h3>

              <div className="advants flex justify-between">
                <div>
                  <span>Bedroom</span>
                  <div>
                    <i className="ri-hotel-bed-line text-xl"></i>
                    <span>{item.details[0]}</span>
                  </div>
                </div>
                <div>
                  <span>Bathroom</span>
                  <div>
                    <i className="fas fa-shower text-lg"></i>
                    <span>{item.details[1]}</span>
                  </div>
                </div>
                <div>
                  <span>Location</span>
                  <div>
                    <h5 className="text-sm font-medium">{item.location}</h5>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-7">
                <span className="text-sm block font-medium text-accent">
                  {item.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </span>

                <button className="py-1 px-2 bg-secondary text-white text-sm flex items-center gap-2">
                  <span onClick={() => setOpenShare(true)}>Share</span>
                  <ShareProperty
                    open={openShare}
                    handleClose={() => setOpenShare(false)}
                  />
                  <i className="ri-share-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default House;
