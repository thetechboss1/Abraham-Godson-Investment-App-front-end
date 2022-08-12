import { Modal } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";

const CreateHouse1 = ({ open, handleClose }) => {
  const { userInfo } = useContext(PageContext);
  const [sending, setSending] = useState(false);
  const validate = Yup.string().required("Field is required!");

  const validationSchema = Yup.object({
    name: validate,
    location: validate,
    price: validate,
    initialDeposit: validate,
    image: validate,
    moreDetails: validate,
    description: validate,
  });

  const initialValues = {
    name: "",
    location: "",
    price: "",
    initialDeposit: "",
    details: {
      bedroom: "",
      bathroom: "",
    },
    image: "",
    moreDetails: "",
    type: "House",
    description: "",
  };

  const onSubmit = (values) => {
    setSending(true);
    axios({
      url: `${url}/properties/create`,
      method: "post",
      data: {
        name: values.name,
        location: values.location,
        price: values.price,
        initialDeposit: values.initialDeposit,
        image: values.image,
        moreDetails: values.moreDetails.split(","),
        description: values.description,
        details: {
          bedroom: values.details.bedroom,
          bathroom: values.details.bathroom,
        },
      },
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${userInfo.token}`,
      },
    })
      .then((result) => {
        setSending(false);
        toast.success(result.message);
        // console.log(result);
      })
      .catch((err) => {
        toast.error(err.message);
        setSending(false);
        // console.log(err.message);
      });

    // handleReset();
  };

  const {
    handleChange,
    handleReset,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className="CModal scrollBar"
        style={{ maxWidth: 750, height: "85%" }}
      >
        <div className="flex justify-between items-center mb-7">
          <h5 className="font-semibold text-accent text-lg">
            Create New Property
          </h5>
          <i
            className="fas fa-times cursor-pointer text-xl"
            onClick={handleClose}
          ></i>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="form-control">
              <label>Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter property name"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name ? <p className="errorMsg">{errors.name}</p> : null}
            </div>

            <div className="form-control">
              <label>Location :</label>
              <input
                type="text"
                name="location"
                placeholder="Enter property location"
                onChange={handleChange}
                value={values.location}
              />
              {errors.location ? (
                <p className="errorMsg">{errors.location}</p>
              ) : null}
            </div>
            <div className="form-control">
              <label>Price :</label>
              <input
                type="text"
                name="price"
                placeholder="Enter property price"
                onChange={handleChange}
                value={values.price}
              />
              {errors.price ? <p className="errorMsg">{errors.price}</p> : null}
            </div>

            <div className="form-control">
              <label>Initial deposit :</label>
              <input
                type="text"
                name="initialDeposit"
                placeholder="Enter property price"
                onChange={handleChange}
                value={values.initialDeposit}
              />
              {errors.initialDeposit ? (
                <p className="errorMsg">{errors.initialDeposit}</p>
              ) : null}
            </div>

            <div className="form-control">
              <label>Bedroom :</label>
              <input
                type="number"
                name="details.bedroom"
                placeholder="Enter property bedroom"
                onChange={handleChange}
                value={values.details.bedroom}
                required
              />
            </div>
            <div className="form-control">
              <label>Bathroom :</label>
              <input
                type="number"
                name="details.bathroom"
                placeholder="Enter property bathroom"
                onChange={handleChange}
                value={values.details.bathroom}
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
                  let reader = new FileReader();
                  reader.onload = () => {
                    if (reader.readyState === 2) {
                      setFieldValue("image", reader.result);
                    }
                  };
                  reader.readAsDataURL(event.target.files[0]);
                }}
              />
              {errors.image ? <p className="errorMsg">{errors.image}</p> : null}
            </div>
            <div className="form-control">
              <label>Description :</label>
              <textarea
                name="description"
                placeholder="Enter description"
                onChange={handleChange}
                value={values.description}
              />

              {errors.description ? (
                <p className="errorMsg">{errors.description}</p>
              ) : null}
            </div>
            <div className="form-control -mt-16">
              <label>Amenities :</label>
              <textarea
                name="moreDetails"
                placeholder="Enter amenities and separate them with comma,"
                onChange={handleChange}
                value={values.moreDetails}
              />

              {errors.moreDetails ? (
                <p className="errorMsg">{errors.moreDetails}</p>
              ) : null}
            </div>
          </div>
          <button type="submit" className="button">
            {sending ? "sending" : "Submit"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateHouse1;
