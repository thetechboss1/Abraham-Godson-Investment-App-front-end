import React from "react";
import avatar from "../Images/avatar.png";

const SecondGen = () => {
  const listDownline = (
    <div className="rounded-md px-4 py-3 border  bg-gray-100 cursor-pointer shadow-sm shadow-secondary hover:shadow-primary">
      <div className="flex items-center justify-between">
        <div>
          <img src={avatar} alt="avatar" className="h-16" />
        </div>
        <div>
          <h5 className="font-medium text-base pb-1">Emmanuel Smith</h5>
          <p className="text-accent text-sm">Abuja, Nigeria</p>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => listDownline)}
      </div>
    </div>
  );
};

export default SecondGen;
