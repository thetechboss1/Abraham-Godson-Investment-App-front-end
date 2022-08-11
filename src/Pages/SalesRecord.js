import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../Api";
import CreateSalesRecord from "../Components/CreateSalesRecord";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const SalesRecord = () => {
  const [addModal, setAddModal] = useState(false);
  const [sales, setSales] = useState([])
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  useEffect(() => {
    axios({
      url:`${url}/sales`,
      method:"GET",
      headers:{
        authorization:`bearer ${userInfo.token}`
      }
    })
    .then((response)=>{
    let data = response.data.sales
    setSales(data)
    })
  }, [userInfo.token])
  
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
            {sales&&sales.map((sale,index) => (
              <tr>
                <td>0{index +1}</td>
                <td>{sale.property.name}</td>
                <td>{sale.user.fullname}</td>
                <td>{sale.status}</td>
                <td>₦{sale.deposit}</td>
                <td>{sale.commissionPaid?"paid":"unpaid"}</td>
                <td>{sale.buyerDetails.name}</td>
                <td>{sale.buyerDetails.email}</td>
                <td>{sale.buyerDetails.phone}</td>
                <td>{sale.createdAt.split("T")[0]}</td>

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
