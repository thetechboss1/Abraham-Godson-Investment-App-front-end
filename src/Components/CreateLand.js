import React from "react";
import { Modal } from "@mui/material";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import * as Yup from "yup";

const CreateLand = ({ handleClose, open }) => {
  const validate = Yup.string().required("Field is Required!");
  const validateNumber = Yup.number()
    .typeError("You must specify a number")
    .min(0, "Min value 0.")
    .required("Field is Required!");

  const initialValues = {
    name: "",
    location: "",
    price: "",
    details: {
      plotSize: "",
    },
    title: "",
    image: "",
    description: "",
    initialDeposit: "",
    moreDetails: "",
    type: "Land",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: validate,
    location: validate,
    price: validateNumber,
    image: validate,
    description: validate,
    initialDeposit: validate,
    title: validate,
    details: {
      plotSize: validate,
    },
    moreDetails: validate,
  });

  const {
    handleChange,
    handleReset,
    handleSubmit,
    values,
    errors,
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
              <label>Plot size :</label>
              <input
                type="text"
                name="details.plotSize"
                placeholder="Enter property plot size"
                onChange={handleChange}
                value={values.details.plotSize}
                required
              />
            </div>
            <div className="form-control">
              <label>Land title :</label>
              <input
                type="text"
                name="title"
                placeholder="Enter land title"
                onChange={handleChange}
                value={values.title}
              />
              {errors.title ? <p className="errorMsg">{errors.title}</p> : null}
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
          <div className="flex items-center gap-5 mt-2">
            <button
              onClick={handleClose}
              type="button"
              className="transparentButton"
            >
              Cancel
            </button>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateLand;
