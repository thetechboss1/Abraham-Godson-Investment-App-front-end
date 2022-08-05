import React, { useState } from "react";
import CreateRealtor from "../Components/CreateRealtor";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const AllRealtors = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper
          title="All Realtors"
          desc="List of all realtors"
          adminAccount
        />

        <div>
          <div className="flex justify-end">
            <button onClick={() => setAddModal(true)} className="button">
              Add +
            </button>
            <CreateRealtor
              open={addModal}
              handleClose={() => setAddModal(false)}
            />
          </div>
          <table className="general_table mt-5">
            <thead className="bg-gray-200">
              <tr>
                <th>S/N</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Referral Phone</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((idx) => (
                <tr>
                  <td>0{idx}</td>
                  <td>Reuben Arinze</td>
                  <td>reuben@gmail.com</td>
                  <td>09057893278</td>
                  <td>08056234565</td>

                  <td className="flex items-center gap-3 justify-center">
                    {/* <i
                  onClick={() => setDescModal(true)}
                  className="ri-eye-line cursor-pointer hover:text-primary text-lg"
                ></i> */}
                    <i
                      // onClick={() => setAddModal(true)}
                      className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
                    ></i>
                    {/* <i
                      onClick={() => alert("Delete Item")}
                      className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"
                    ></i> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllRealtors;
