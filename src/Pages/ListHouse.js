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
      <table className="general_table mt-10">
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
                <i
                  onClick={() => setDescModal(true)}
                  className="ri-eye-line cursor-pointer hover:text-primary text-lg"
                ></i>
                <i
                  onClick={() => setAddModal(true)}
                  className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
                ></i>
                <i
                  onClick={() => alert("Delete Item")}
                  className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* description modal */}
      <Modal open={descModal} onClose={() => setDescModal(false)}>
        <div className="CModal" style={{ maxWidth: 600, height: "85%" }}>
          <div className="flex justify-between items-center mb-7">
            <h5 className="font-semibold text-accent text-lg">
              2-Bed Apartment | The Orchid
            </h5>
            <i
              className="fas fa-times cursor-pointer text-xl"
              onClick={() => setDescModal(false)}
            ></i>
          </div>

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg"
              alt=""
              className="rounded w-full h-72"
            />
          </div>

          <div>
            <h5 className="font-medium pt-3 pb-1">Description: </h5>
            <p className="text-justify text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vitae deleniti sunt officia vel dolorem esse, at
              nostrum blanditiis eum mollitia corrupti consequuntur laboriosam
              quod sed ut dignissimos aliquam eveniet.
            </p>

            <h5 className="font-medium pt-2 pb-1">Amenities: </h5>
            <ul className="list-disc pl-4 text-sm">
              <li>Elevator</li>
              <li>Spa</li>
              <li>Pool</li>
              <li>Gym</li>
              <li>24-hour</li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListHouse;
