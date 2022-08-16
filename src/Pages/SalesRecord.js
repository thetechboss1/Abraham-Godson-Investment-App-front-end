import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import CreateSalesRecord from "../Components/CreateSalesRecord";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

const SalesRecord = () => {
  const { userInfo } = useContext(PageContext);
  const [addModal, setAddModal] = useState(false);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${url}/sales`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo?.token}`,
      },
    }).then((response) => {
      let data = response.data.sales;
      setSales(data);
      setLoading(false);
    });
  }, [userInfo?.token]);

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title="Sales Record" desc="All sales records" adminAccount />
        <div className="flex justify-end">
          <button onClick={() => setAddModal(true)} className="button">
            Add +
          </button>
          <CreateSalesRecord
            open={addModal}
            handleClose={() => setAddModal(false)}
          />
        </div>

        {!loading && sales.length === 0 && (
          <div>
            <h5 className="pt-4 font-medium text-lg"> No Property yet</h5>
          </div>
        )}

        {loading && <h5 className="pt-4 font-medium text-lg">Loading....</h5>}

        {sales.length > 0 && (
          <table className="general_table mt-10">
            <thead className="bg-gray-200">
              <tr>
                <th>S/N</th>
                <th>Property</th>
                <th>Realtor</th>
                <th>Payment status</th>
                <th>Deposit</th>
                <th>Commission</th>
                <th>Type</th>
                <th>Client</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sales &&
                sales.map((sale, index) => (
                  <tr key={index}>
                    <td>0{index + 1}</td>
                    <td>{sale.property.name}</td>
                    <td>{sale.user.fullname}</td>
                    <td>{sale.status}</td>
                    <td>
                      {sale.deposit.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </td>
                    <td>{sale.commissionPaid ? "paid" : "unpaid"}</td>
                    <td>{sale.property.type}</td>
                    <td>{sale.buyerDetails.buyerName}</td>
                    <td>{sale.buyerDetails.buyerEmail}</td>
                    <td>{sale.buyerDetails.buyerPhone}</td>
                    <td>{sale.createdAt.split("T")[0]}</td>
                    <td>
                      <i
                        onClick={() => setAddModal(true)}
                        className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SalesRecord;
