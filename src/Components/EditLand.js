import { Modal } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";

const EditLand = ({ open, handleClose, id }) => {
  const { userInfo } = useContext(PageContext);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [intialDeposit, setInitialDeposit] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [moreDetails, setMoreDetails] = useState([""]);

  useEffect(() => {
    axios
      .get(`${url}/properties/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        let val = response.data.property;
        setName(val.name);
        setLocation(val.location);
        setPrice(val.price);
        setInitialDeposit(val.intialDeposit);
        setTitle(val.title);
        setDetails(val.details);
        setDescription(val.description);
        setMoreDetails(val.moreDetails);
        console.log(val);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [userInfo?.token, id]);

  const type = "Land";

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    let data = new FormData();
    data.append("image", image);
    data.append("name", name);
    data.append("location", location);
    data.append("price", price);
    data.append("intialDeposit", intialDeposit);
    data.append("description", description);
    data.append("moreDetails", moreDetails);
    data.append("title", title);
    data.append("details", details);
    data.append("type", type);
    axios({
      url: `${url}/properties/${id}`,
      method: "patch",
      data: data,
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${userInfo?.token}`,
      },
    })
      .then((result) => {
        setSending(false);
        console.log(result);
        // handleClose();
        // toast.success(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.message);
        setSending(false);
      });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className="CModal scrollBar"
        style={{ maxWidth: 750, height: "85%" }}
      >
        <div className="flex justify-between items-center mb-7">
          <h5 className="font-semibold text-accent text-lg">Edit Property</h5>
          <i
            className="fas fa-times cursor-pointer text-xl"
            onClick={handleClose}
          ></i>
        </div>

        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="form-control">
              <label>Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter property name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-control">
              <label>Location :</label>
              <input
                type="text"
                name="location"
                placeholder="Enter property location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="form-control">
              <label>Price :</label>
              <input
                type="number"
                name="price"
                placeholder="Enter property price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="form-control">
              <label>Initial deposit :</label>
              <input
                type="number"
                name="intialDeposit"
                placeholder="Enter property price"
                onChange={(e) => setInitialDeposit(e.target.value)}
                value={intialDeposit}
              />
            </div>

            <div className="form-control">
              <label>Land title :</label>
              <input
                type="text"
                name="title"
                placeholder="Enter land title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="form-control">
              <label>Plot size :</label>
              <input
                type="text"
                name="details"
                placeholder="Enter property bathroom"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
                required
              />
            </div>

            <div className="form-control">
              <label>Upload picture :</label>
              <input
                type="file"
                name="image"
                placeholder="Enter property picture"
                onChange={(event) => {
                  setImage("image", event.target.files[0]);
                }}
              />
            </div>
            <div className="form-control">
              <label>Description :</label>
              <textarea
                name="description"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="form-control -mt-16">
              <label>Amenities :</label>
              <textarea
                name="moreDetails"
                placeholder="Enter amenities and separate them with comma,"
                onChange={(e) => setMoreDetails(e.target.value)}
                value={moreDetails}
              />
            </div>
          </div>

          <button type="submit" className="button">
            {sending ? "Updating" : "Update"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditLand;
