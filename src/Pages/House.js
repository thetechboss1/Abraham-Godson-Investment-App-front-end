import React from "react";

const House = () => {
  return (
    <div className="propertyWrap mt-7 grid grid-cols-3">
      <div class="box rounded cursor-pointer">
        <div class="top rounded-tr">
          <img
            src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg"
            alt=""
          />
          <span>
            <i class="fas fa-heart"></i>
            <i class="fas fa-exchange-alt"></i>
          </span>
        </div>
        <div class="bottom">
          <h3 className="text-lg font-medium pb-5 pt-1">Villa In Alexandria</h3>

          <div class="advants flex justify-between">
            <div>
              <span>Bedrooms</span>
              <div>
                <i class="fas fa-th-large"></i>
                <span>3</span>
              </div>
            </div>
            <div>
              <span>Bathrooms</span>
              <div>
                <i class="fas fa-shower"></i>
                <span>3.5</span>
              </div>
            </div>
            <div>
              <span>Area</span>
              <div>
                <i class="fas fa-vector-square"></i>
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
              <span>See More</span>
              <i className="ri-arrow-right-line font-semibold"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
