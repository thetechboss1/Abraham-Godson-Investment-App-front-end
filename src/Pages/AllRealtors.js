import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import CreateRealtor from "../Components/CreateRealtor";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";
import RealtorDetails from "../Components/RealtorsDetails";
import { Dialog, Slide } from "@mui/material";
import DataTable from "react-data-table-component";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const btnStyle =
  "border border-slate-400 hover:text-secondary hover:border-slate-800 rounded bg-transparent  transition ease-in-out duration-500 text-sm tracking-wider";

const AllRealtors = () => {
  const [addModal, setAddModal] = useState(false);
  const [realtors, setRealtors] = useState([]);
  const { userInfo } = useContext(PageContext);
  const [loading, setLoading] = useState(false);
  const [openFullDialog, setOpenFullDialog] = useState(false);
  const [getId, setGetId] = useState("");
  const [search, setSearch] = useState("");
  const [filteredRealtors, setFilteredRealtors] = useState([]);

  const fetchAllRealtors = () => {
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
      setFilteredRealtors(data);
    });
  };

  useEffect(() => {
    fetchAllRealtors();
  }, [userInfo?.token]);

  useEffect(() => {
    const result = realtors.filter((item) => {
      return item.fullname.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilteredRealtors(result);
  }, [search]);

  const openDetails = (id) => {
    setGetId(id);
    setOpenFullDialog(true);
  };

  const columns = [
    {
      name: "Full Name",
      selector: "fullname",
      sortable: true,
    },
    {
      name: "Email Address",
      selector: "email",
    },
    {
      name: "Phone Number",
      selector: "phone",
    },
    {
      name: "My Upline",
      cell: (row) => (
        <button
          onClick={() => openDetails(row._id)}
          style={{ padding: "6px 13px" }}
          className={`${btnStyle} text-primary`}
        >
          View
        </button>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => openDetails(row._id)}
          style={{ padding: "6px 13px" }}
          className={`${btnStyle} text-accent`}
        >
          View Profile
        </button>
      ),
    },
  ];

  return (
    <>
      {/* realtors details */}
      <Dialog fullScreen open={openFullDialog} TransitionComponent={Transition}>
        <DashboardLayout>
          <RealtorDetails id={getId} close={() => setOpenFullDialog(false)} />
        </DashboardLayout>
      </Dialog>

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
            )}

            {loading && (
              <div>
                <h5 className="pt-4 font-medium text-lg">Loading....</h5>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AllRealtors;
