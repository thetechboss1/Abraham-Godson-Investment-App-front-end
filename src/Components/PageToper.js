import React from "react";
import { Link } from "react-router-dom";

const PageToper = ({ title, desc }) => {
  return (
    <div className="flex justify-between items-center pt-8 mb-10">
      <div>
        <h1 className="font-extrabold text-black text-xl md:text-2xl capitalize">
          {title}
        </h1>
        <span className="text-gray-600 text-sm">{desc}</span>
      </div>

      <Link to="/account">
        <i className="ri-user-line text-xl bg-primary h-10 w-10 flex justify-center items-center rounded-full text-white cursor-pointer hover:shadow-lg"></i>
      </Link>
    </div>
  );
};

export default PageToper;
