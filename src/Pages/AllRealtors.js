import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../Api";
import CreateRealtor from "../Components/CreateRealtor";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const AllRealtors = () => {
  const [addModal, setAddModal] = useState(false);
  const [realtors, setRealtors] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  useEffect(() => {
    axios({
      url: `${url}/admin/realtors`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo.token}`,
      },
    }).then((response) => {
      let data = response.data.realtors;
      setRealtors(data);
    });
  }, [userInfo.token]);

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
                <th>Acc name</th>
                <th>Acc number</th>
                <th>Bank name</th>
                <th>Sales</th>

                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {realtors &&
                realtors.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>08056234565</td>
                    <td>{user.bankDetails.bankHolder}</td>
                    <td>{user.bankDetails.bankAccount}</td>
                    <td>{user.bankDetails.bankName}</td>
                    <td>2</td>

                    <td className="flex items-center gap-3 justify-center">
                      <i className="ri-eye-line cursor-pointer hover:text-primary text-lg"></i>
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
