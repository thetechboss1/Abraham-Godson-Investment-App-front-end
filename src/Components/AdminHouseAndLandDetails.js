import { Modal } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";

export const AdminHouseDetail = ({ handleClose, id, open }) => {
  const { userInfo } = useContext(PageContext);
  const [fullDetails, setFullDetails] = useState({});
  useEffect(() => {
    axios
      .get(`${url}/properties/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setFullDetails(response.data.property);
      })

      .catch((err) => {
        console.err(err);
      });
  }, [userInfo?.token, id]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div
          className="CModal scrollBar"
          style={{ maxWidth: 600, height: "85%" }}
        >
          <div className="flex justify-between items-center mb-7">
            <h5 className="font-semibold text-accent text-lg capitalize">
              {fullDetails?.name}
            </h5>
            <i
              className="fas fa-times cursor-pointer text-xl"
              onClick={handleClose}
            ></i>
          </div>

          <div>
            <img
              src={fullDetails?.image}
              alt={fullDetails?.name}
              className="rounded w-full h-72"
            />
          </div>

          <div>
            <h5 className="font-medium pt-3 pb-1">Description: </h5>
            <p className="text-justify text-sm">{fullDetails?.description}</p>

            <h5 className="font-medium pt-2 pb-1">Amenities: </h5>
            <ul className="list-disc pl-4 text-sm">
              {fullDetails?.moreDetails &&
                fullDetails.moreDetails.map((amenities) => (
                  <li key={amenities} className="block">
                    {amenities}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};


// == Admin land details //

export const AdminLandDetail = ({ handleClose, id, open }) => {
  const { userInfo } = useContext(PageContext);
  const [fullDetails, setFullDetails] = useState({});
  useEffect(() => {
    axios
      .get(`${url}/properties/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setFullDetails(response.data.property);
      })

      .catch((err) => {
        console.err(err);
      });
  }, [userInfo?.token, id]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div
          className="CModal scrollBar"
          style={{ maxWidth: 600, height: "85%" }}
        >
          <div className="flex justify-between items-center mb-7">
            <h5 className="font-semibold text-accent text-lg capitalize">
              {fullDetails?.name}
            </h5>
            <i
              className="fas fa-times cursor-pointer text-xl"
              onClick={handleClose}
            ></i>
          </div>

          <div>
            <img
              src={fullDetails?.image}
              alt={fullDetails?.name}
              className="rounded w-full h-72"
            />
          </div>

          <div>
            <h5 className="font-medium pt-3 pb-1">Description: </h5>
            <p className="text-justify text-sm">{fullDetails?.description}</p>

            <h5 className="font-medium pt-2 pb-1">Amenities: </h5>
            <ul className="list-disc pl-4 text-sm">
              {fullDetails?.moreDetails &&
                fullDetails.moreDetails.map((amenities) => (
                  <li key={amenities} className="block">
                    {amenities}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

