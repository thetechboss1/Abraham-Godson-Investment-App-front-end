import { Modal } from "@mui/material";
import React from "react";

const CreateHouse = ({ handleClose, open }) => {
  return (
    <Modal open={open}>
      <div className="CModal" style={{ maxWidth: 450 }}>
        <div className="flex items-center justify-between w-full mb-7">
          <h5 className="text-lg font-semibold text-accent">
            Share Property via
          </h5>
          <i
            className="fas fa-times cursor-pointer text-xl"
            onClick={handleClose}
          ></i>
        </div>

        <div></div>
      </div>
    </Modal>
  );
};

export default CreateHouse;
