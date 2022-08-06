import React from "react";
import PageToper from "./PageToper";

const SecondGenDetails = ({ close }) => {
  return (
    <div className="Container">
      <PageToper title="Emmanuel smith - Profile" desc="Abuja park, Abuja" />
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
            placeholder="Reuben Arinze"
            disabled
            className="placeholder:text-black"
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            placeholder="reuben@gmail.com"
            disabled
            className="placeholder:text-black"
          />
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            type="text"
            placeholder="09067459078"
            disabled
            className="placeholder:text-black"
          />
        </div>
        <div className="form-control">
          <label>Property sold</label>
          <input
            type="text"
            placeholder="20"
            disabled
            className="placeholder:text-black"
          />
        </div>
        <div className="form-control">
          <label>Downline status</label>
          <input
            type="text"
            placeholder="Second Generation"
            disabled
            className="placeholder:text-black"
          />
        </div>
         </div>
      </div>
    </div>
  );
};

export default SecondGenDetails;
