import React from "react";
import { Link } from "react-router-dom";

const PageToper = ({ title, desc, closeEdit, close }) => {
  return (
    <div className="flex justify-between items-center pt-8 mb-10">
      <div>
        <h1 className="font-extrabold text-black text-xl md:text-2xl capitalize">
          {title}
        </h1>
        <span className="text-gray-600 text-sm">{desc}</span>
        <div className="w-11 h-1 bg-secondary mt-2" />
      </div>

      <div className="flex items-center gap-3">
        {closeEdit && (
          <button
            className="border px-2 rounded py-1 text-sm font-medium border-secondary text-secondary transition ease-in-out duration-300"
            onClick={close}
          >
            Cancel
          </button>
        )}
        <Link to="/account">
          <i className="ri-user-line text-xl bg-secondary h-10 w-10 flex justify-center items-center rounded-full text-white cursor-pointer hover:shadow-lg"></i>
        </Link>
      </div>
    </div>
  );
};

export default PageToper;
