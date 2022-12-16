import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { url } from "../Api";
import CreateSalesRecord from "../Components/CreateSalesRecord";
import EditSalesRecord from "../Components/EditSalesRecord";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";

const SalesRecord = () => {
  const { userInfo } = useContext(PageContext);
  const [addModal, setAddModal] = useState(false);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [getId, setGetId] = useState("");
  const [search, setSearch] = useState("");
  const [filteredRealtors, setFilteredRealtors] = useState([]);

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
      setFilteredRealtors(data);
      setLoading(false);
    });
  }, [userInfo?.token]);

  useEffect(() => {
    const result = sales.filter((item) => {
      return item.property.name.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilteredRealtors(result);
  }, [search]);

  const openEdit = (id) => {
    setEditOpen(true);
    setGetId(id);
  };

  const columns = [
    {
      name: "Property",
      selector: "property.name",
      sortable: true,
    },
    {
      name: "Realtor",
      selector: "user.fullname",
      sortable: true,
    },
    {
      name: "Payment status",
      selector: "status",
      sortable: true,
    },
    {
      name: "Deposit",
      selector: "deposit",
    },
    {
      name: "Commission",
      selector: "commissionPaid",
    },
    {
      name: "Commission",
      selector: "commissionPaid",
    },
  ];

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

          <EditSalesRecord
            id={getId}
            open={editOpen}
            handleClose={() => setEditOpen(false)}
          />
        </div>

        {!loading && sales.length === 0 && (
          <div>
            <h5 className="pt-4 font-medium text-lg"> No Sales yet</h5>
          </div>
        )}

        {loading && <h5 className="pt-4 font-medium text-lg">Loading....</h5>}

        {sales.length > 0 && (
          <DataTable
            columns={columns}
            data={filteredRealtors}
            pagination
            fixedHeader
            responsive
            className="overflow-x-auto"
            striped
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                placeholder="Search table.."
                className="border border-slate-500 py-2 pl-2 pr-5 font-medium rounded text-sm focus:outline-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
            subHeaderAlign="left"
          />
          // <table className="general_table mt-10">
          //   <thead className="bg-gray-200">
          //     <tr>
          //       <th>S/N</th>
          //       <th>Property</th>
          //       <th>Realtor</th>
          //       <th>Payment status</th>
          //       <th>Deposit</th>
          //       <th>Commission</th>
          //       <th>Type</th>
          //       <th>Client</th>
          //       <th>Email</th>
          //       <th>Phone</th>
          //       <th>Date</th>
          //       <th>Action</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {sales.map((sale, index) => (
          //       <tr key={index}>
          //         <td>0{index + 1}</td>
          //         <td>
          //           {sale.property ? sale.property.name : "Property deleted"}
          //         </td>
          //         <td>{sale.user.fullname}</td>
          //         <td>{sale.status}</td>
          //         <td>
          //           {sale.deposit.toLocaleString("en-NG", {
          //             style: "currency",
          //             currency: "NGN",
          //           })}
          //         </td>
          //         <td>{sale.commissionPaid ? "paid" : "unpaid"}</td>
          //         <td>
          //           {sale.property ? sale.property.type : "Property deleted"}
          //         </td>
          //         <td>{sale.buyerDetails.buyerName}</td>
          //         <td>{sale.buyerDetails.buyerEmail}</td>
          //         <td>{sale.buyerDetails.buyerPhone}</td>
          //         <td>{sale.createdAt.split("T")[0]}</td>
          //         <td>
          //           <i
          //             onClick={() => openEdit(sale._id)}
          //             className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
          //           ></i>
          //         </td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SalesRecord;
