import React from "react";

export const ViewerForm = ({ label, placeholder, type }) => {
  return (
    <form>
      {type === "input" && (
        <div className="form-control">
          <label>{label}</label>
          <input
            type="text"
            placeholder={placeholder}
            disabled={true}
            className="placeholder:text-black bg-gray-100"
          />
        </div>
      )}
      {type === "textarea" && (
        <div className="form-control">
          <label>{label}</label>
          <textarea
            placeholder={placeholder}
            disabled={true}
            className="placeholder:text-black bg-gray-100 h-24"
          />
        </div>
      )}
    </form>
  );
};
