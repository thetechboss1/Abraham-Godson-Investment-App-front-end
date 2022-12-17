import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import CreateLand from "../Components/CreateLand";
import EditLand from "../Components/EditLand";
import { AdminLandDetail } from "../Components/AdminHouseAndLandDetails";
import DataTable from "react-data-table-component";

const AdminListLand = () => {
  const [addModal, setAddModal] = useState(false);
  const [descModal, setDescModal] = useState(false);
  const { userInfo } = useContext(PageContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getId, setGetId] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredLand, setFilteredLand] = useState([]);

  const getProperties = useCallback(() => {
    setLoading(true);
    const fn1 = async () => {
      let res = await axios.get(`${url}/properties`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      let data = res.data.properties;
      let land = data.filter((property) => {
        return property.type === "Land";
      });
      setProperties(land);
      setFilteredLand(land);
      setLoading(false);
    };
    fn1();
  }, [userInfo?.token]);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  const deleteProperty = (id) => {
    const fn1 = async () => {
      alert("Are you sure you want to delete property");
      let res = await axios.delete(`${url}/properties/${id}`, {
        headers: {
          Authorization: `bearer ${userInfo?.token}`,
        },
      });
      const newProperty = properties.filter((item) => item.id !== id);
      setProperties(newProperty);

      if (res) {
        window.location.reload();
      }
    };
    fn1();
  };

  const openDetails = (id) => {
    setGetId(id);
    setDescModal(true);
  };

  const openEdit = (id) => {
    setEditModal(true);
    setGetId(id);
  };

  useEffect(() => {
    const result = properties.filter((item) => {
      return item.name.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilteredLand(result);
  }, [search]);

  const columns = [{ name: "Name", selector: "name", sortable: true }];

  return (
    <div>
      <div className="-mt-14 flex justify-end">
        <button onClick={() => setAddModal(true)} className="button">
          Add +
        </button>
      </div>
      <CreateLand open={addModal} handleClose={() => setAddModal(false)} />
      <AdminLandDetail
        id={getId}
        open={descModal}
        handleClose={() => setDescModal(false)}
      />
      <EditLand
        id={getId}
        open={editModal}
        handleClose={() => setEditModal(false)}
      />
      {!loading && properties.length === 0 && (
        <div>
          <h5 className="pt-4 font-medium text-lg"> No Property yet</h5>
        </div>
      )}

      {loading && (
        <div>
          <h5 className="pt-4 font-medium text-lg">Loading....</h5>
        </div>
      )}
      {properties.length > 0 && (
        <DataTable
          columns={columns}
          data={filteredLand}
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
          subHeaderAlign="right"
        />
        // <table className="general_table mt-10">
        //   <thead className="bg-gray-200">
        //     <tr>
        //       <th>S/N</th>
        //       <th>Name</th>
        //       <th>Location</th>
        //       <th>Description</th>
        //       <th>Price</th>
        //       <th>Initial deposit</th>
        //       <th>Plot size</th>
        //       <th>Land title</th>
        //       <th>Action</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {properties.map((item, index) => {
        //       return (
        //         <>
        //           <tr key={index}>
        //             <td>{index + 1}</td>
        //             <td>{item.name}</td>
        //             <td>{item.location}</td>
        //             <td>{item.description.slice(0, 31)}...</td>
        //             <td>
        //               {item.price.toLocaleString("en-NG", {
        //                 style: "currency",
        //                 currency: "NGN",
        //               })}
        //             </td>
        //             <td>
        //               {item.intialDeposit.toLocaleString("en-NG", {
        //                 style: "currency",
        //                 currency: "NGN",
        //               })}
        //             </td>
        //             <td>{item.details}</td>
        //             <td>{item.title}</td>
        //             <td className="flex items-center gap-3 justify-center">
        //               <i
        //                 onClick={() => openDetails(item._id)}
        //                 className="ri-eye-line cursor-pointer hover:text-primary text-lg"
        //               ></i>
        //               <i
        //                 onClick={() => openEdit(item._id)}
        //                 className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"
        //               ></i>
        //               <i
        //                 onClick={() => deleteProperty(item._id)}
        //                 className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"
        //               ></i>
        //             </td>
        //           </tr>
        //         </>
        //       );
        //     })}
        //   </tbody>
        // </table>
      )}
    </div>
  );
};

export default AdminListLand;
