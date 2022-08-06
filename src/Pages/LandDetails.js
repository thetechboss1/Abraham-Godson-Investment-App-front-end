import React from "react";
import PageToper from "../Components/PageToper";

const LandDetails = ({ close }) => {
  return (
    <>
      <div className="Container">
        <PageToper title=" Villa In Alexandria" desc="Sangotedo, Lagos" />
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
              src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="villa"
              className="rounded w-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg md:text-xl">₦20,000,000.00</h3>
            <h6 className=" border-b-2 inline-block mt-1 pb-1 font-medium">
              Initial deposit:{" "}
              <span className="text-accent">₦1,000,000.00</span>
            </h6>
            <h4 className="font-medium py-2">
              Land title:{" "}
              <span className="text-accent">Deep of Rectification</span>
            </h4>

            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
              reiciendis atque amet placeat, magnam delectus, rerum voluptatibus
              aliquam officiis vitae, provident impedit quae? Deserunt iste
              iusto veritatis quidem laboriosam?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus eos reiciendis atque amet
              placeat, magnam delectus, rerum voluptatibus aliquam officiis
              vitae, provident impedit quae? Deserunt iste iusto veritatis
              quidem
            </p>

            <div className="border-b mt-3" />
            <div className="flex mt-3 gap-7 ">
              <ul className="list-disc pl-4 text-sm">
                <li>Dry land</li>
                <li>Close to road</li>
                <li>Pool</li>
                <li>Gym</li>
                <li>24-hour</li>
              </ul>
              <div className="border-r" />
              <div>
                <div>
                  <span className="text-sm">Plot size</span>
                  <div className="flex items-center gap-3">
                    <i className="ri-landscape-line text-xl"></i>
                    <span className="text-sm">3500Sq Ft</span>
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
