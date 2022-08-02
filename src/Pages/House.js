import React, { useState } from "react";
import ShareProperty from "../Components/ShareProperty";

const House = () => {
  const [openShare, setOpenShare] = useState(false);

  return (
    <div className="propertyWrap mt-7 grid grid-cols-3 gap-x-5 gap-y-7">
      {[1, 2, 3, 4, 5].map(() => (
        <div className="box rounded cursor-pointer">
          <div className="top rounded-tr">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg"
              alt=""
              className="rounded-tr"
            />
          </div>
          <div className="bottom">
            <h3 className="text-lg font-medium pb-5 pt-1">
              Villa In Alexandria
            </h3>

            <div className="advants flex justify-between">
              <div>
                <span>Bedrooms</span>
                <div>
                  <i className="fas fa-th-large"></i>
                  <span>3</span>
                </div>
              </div>
              <div>
                <span>Bathrooms</span>
                <div>
                  <i className="fas fa-shower"></i>
                  <span>2</span>
                </div>
              </div>
              <div>
                <span>Area</span>
                <div>
                  <i className="fas fa-vector-square"></i>
                  <span>
                    3500<span>Sq Ft</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-7">
              <span className="text-sm block font-medium text-accent">
                ₦30,000,000.00
              </span>

              <button className="py-1 px-2 bg-secondary text-white text-sm flex items-center gap-2">
                <span>Share</span>
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
  );
};

export default House;
