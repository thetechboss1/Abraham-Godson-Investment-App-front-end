import { Tooltip } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { url } from "../Api";
import CreateSalesRecord from "../Components/CreateSalesRecord";
import EditSalesRecord from "../Components/EditSalesRecord";
import PageToper from "../Components/PageToper";
import { SalesRecordDetails } from "../Components/SalesRecordDetails";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";
import { btnStyle } from "./AllRealtors";

const SalesRecord = () => {
  const { userInfo } = useContext(PageContext);
  const [addModal, setAddModal] = useState(false);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [getId, setGetId] = useState("");
  const [search, setSearch] = useState("");
  const [filteredSales, setFilteredSales] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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
      setFilteredSales(data);
      setLoading(false);
    });
  }, [userInfo?.token]);

  useEffect(() => {
    const result = sales.filter((item) => {
      return item.property.name.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilteredSales(result);
  }, [search]);

  const openEdit = (id) => {
    setEditOpen(true);
    setGetId(id);
  };

  const openSaleDetails = (id) => {
    setOpenModal(true);
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
      cell: (amount) => (
        <span>
          {amount.deposit.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })}
        </span>
      ),
    },
    {
      name: "Commission",
      cell: (val) => (val.commissionPaid ? "paid" : "unpaid"),
    },
    {
      name: "Type",
      cell: (val) => (val.property ? val.property.type : "Property deleted"),
    },

    {
      name: "Action",
      cell: (val) => (
        <div className="flex items-center gap-4">
          <Tooltip title="Edit Sale" placement="top">
            <i
              onClick={() => openEdit(val._id)}
              className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
            ></i>
          </Tooltip>
          <Tooltip title="View Sale Details" placement="top">
            <i
              onClick={() => openSaleDetails(val._id)}
              className="ri-eye-line cursor-pointer hover:text-primary text-lg"
            ></i>
          </Tooltip>
        </div>
      ),
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
          <SalesRecordDetails
            id={getId}
            open={openModal}
            handleClose={() => setOpenModal(false)}
          />
        </div>

        {loading && <h5 className="pt-4 font-medium text-lg">Loading....</h5>}

        <DataTable
          columns={columns}
          data={filteredSales}
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
      </div>
    </DashboardLayout>
  );
};

export default SalesRecord;
