import React from "react";
import PageToper from "../Components/PageToper";

const HouseDetails = ({ close }) => {
  return (
    <>
      <div className="Container pb-10">
        <PageToper title="2-Bed Apartment | The Orchid" desc="Ebeju Lekki, Lagos" />
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
              src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg"
              alt="villa"
              className="rounded w-full"
            />
          </div>
          <div>
            <h3 className="font-semibold pb-2 text-xl">₦30,000,000.00</h3>
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
                <li>Elevator</li>
                <li>Spa</li>
                <li>Pool</li>
                <li>Gym</li>
                <li>24-hour</li>
              </ul>
              <div className="border-r" />
              <div>
                <div className="flex items-center gap-5">
                  <div>
                    <span className="text-sm">Bedroom</span>
                    <div className="flex items-center gap-3">
                      <i className="ri-hotel-bed-line text-xl"></i>
                      <span>3</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm">Bathroom</span>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-shower text-lg"></i>
                      <span>2</span>
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
