import { Modal } from "@mui/material";
import React, { useState } from "react";
import CreateHouse from "../Components/CreateHouse";

const ListHouse = () => {
  const [addModal, setAddModal] = useState(false);
  const [descModal, setDescModal] = useState(false);
  return (
    <div>
      <div className="-mt-14 flex justify-end">
        <button onClick={() => setAddModal(true)} className="button">
          Add +
        </button>
      </div>
      <CreateHouse open={addModal} handleClose={() => setAddModal(false)} />
      <table className="list_property_table mt-10">
        <thead className="bg-gray-200">
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Price</th>
            <th>Bedroom</th>
            <th>Bathroom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((idx) => (
            <tr>
              <td>0{idx}</td>
              <td>2-Bed Apartment | The Orchid</td>
              <td>Ebeju Lekki, Lagos</td>
              <td>Lorem, ipsum dolor sit amet.</td>
              <td>₦30,000,000.00</td>
              <td>2</td>
              <td>3</td>
              <td className="flex items-center gap-3 justify-center">
                <i className="ri-eye-line cursor-pointer hover:text-primary text-lg"></i>
                <i className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"></i>
                <i className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* description modal */}
      <Modal open={descModal} onClose={() => setDescModal(false)}>
        <div className="CModal" style={{ maxWidth: 500 }}>
          <div className="flex justify-between items-center mb-7">
            <h5 className="font-semibold text-accent text-lg">
              Create New Property
            </h5>
            <i
              className="fas fa-times cursor-pointer text-xl"
              onClick={() => setDescModal(false)}
            ></i>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListHouse;
