import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import CreateRealtor from "../Components/CreateRealtor";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

const AllRealtors = () => {
  const [addModal, setAddModal] = useState(false);
  const [realtors, setRealtors] = useState([]);
  const { userInfo } = useContext(PageContext);
  const [loading, setLoading] = useState(false);
  const [summarize, setSummarize] = useState({});
  const [Referral, setReferral] = useState([])

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${url}/admin/realtors`,
      method: "GET",
      headers: {
        authorization: `bearer ${userInfo?.token}`,
      },
    }).then((response) => {
      setLoading(false);
      let data = response.data.realtors;
      setRealtors(data);
    });

    // sales
    const fn1 = async () => {
      let res = await axios.get(`${url}/sales/mysales/stats`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      setSummarize(res.data);
    };
    fn1();

    //==== get downline ====
    const fn = async () => {
      let res = await axios.get(`${url}/user/refferalData`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      setReferral(res.data.data.firstlv);
    };
    fn();
  }, [userInfo?.token]);

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

          {!loading && realtors.length === 0 ? (
            <div>
              <h5 className="pt-4 font-medium text-lg">No Realtor yet</h5>
            </div>
          ) : (
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

                  <th>Downline</th>
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
                      <td></td>
                      <td>{user.bankDetails.bankHolder}</td>
                      <td>{user.bankDetails.bankAccount}</td>
                      <td>{user.bankDetails.bankName}</td>
                      <td>{summarize.totalSale}</td>

                      <td className="flex items-center gap-3 justify-center">
                        {Referral.length}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}

          {loading && (
            <div>
              <h5 className="pt-4 font-medium text-lg">Loading....</h5>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllRealtors;
