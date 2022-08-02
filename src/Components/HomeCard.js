import React from "react";

const HomeCard = ({ title, icon, number, bg }) => {
  return (
    <div className="homeCard" style={{background: `${bg}`}}>
      <i className={`${icon} text-4xl`}></i>

      <div>
        <h5 className="font-medium pb-4">{title}</h5>
        <span className="font-medium text-xl block">{number}</span>
      </div>
    </div>
  );
};

export default HomeCard;
