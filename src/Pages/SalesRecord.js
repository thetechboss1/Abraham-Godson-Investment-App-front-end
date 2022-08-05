import React, { useState } from "react";
import CreateSalesRecord from "../Components/CreateSalesRecord";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const SalesRecord = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="Sales Record" desc="All sales records" adminAccount />
        <div className="flex justify-end">
          <button onClick={() => setAddModal(true)} className="button">
            Add +
          </button>
          <CreateSalesRecord open={addModal} handleClose={() => setAddModal(false)}/>
        </div>
          
        <table className="general_table mt-10">
          <thead className="bg-gray-200">
            <tr>
              <th>S/N</th>
              <th>Property</th>
              <th>Realtor</th>
              <th>Payment status</th>
              <th>Deposit</th>
              <th>Commission</th>
              <th>Client</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((idx) => (
              <tr>
                <td>0{idx}</td>
                <td>Villa In Alexandria</td>
                <td>Hope Igwe</td>
                <td>Completed</td>
                <td>₦3,000,000.00</td>
                <td>paid</td>
                <td>Mr Uche</td>
                <td>uche@gmail.com</td>
                <td>0905689355</td>
                <td>10/6/2022</td>

                <td className="flex items-center gap-3 justify-center">
                  <i
                    onClick={() => setAddModal(true)}
                    className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default SalesRecord;
