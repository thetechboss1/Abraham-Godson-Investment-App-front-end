import React from "react";
import { Modal } from "@mui/material";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
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
    plot_size: "",
    land_title: "",
    land_picture: "",
    description: "",
    initial_deposit: "",
    amenities: [""],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: validate,
    location: validate,
    price: validateNumber,
    bedroom: validateNumber,
    bathroom: validateNumber,
    land_picture: validate,
    description: validate,
    initial_deposit: validate,
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <Form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                  <div className="form-control">
                    <label>Name :</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter property name"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="errorMsg"
                    />
                  </div>
                  <div className="form-control">
                    <label>Location :</label>
                    <Field
                      type="text"
                      name="location"
                      placeholder="Enter property location"
                    />
                    <ErrorMessage
                      name="location"
                      component="span"
                      className="errorMsg"
                    />
                  </div>
                  <div className="form-control">
                    <label>Price :</label>
                    <Field
                      type="text"
                      name="price"
                      placeholder="Enter property price"
                    />

                    <ErrorMessage
                      name="price"
                      component="span"
                      className="errorMsg"
                    />
                  </div>
                  <div className="form-control">
                    <label>Initial deposit :</label>
                    <Field
                      type="text"
                      name="initial_deposit"
                      placeholder="Enter property min deposit"
                    />
                    <ErrorMessage
                      name="initial_deposit"
                      component="span"
                      className="errorMsg"
                    />
                  </div>
                  <div className="form-control">
                    <label>Plot size :</label>
                    <Field
                      type="text"
                      name="plot_size"
                      placeholder="Enter plot size"
                    />
                    <ErrorMessage
                      name="plot_size"
                      component="span"
                      className="errorMsg"
                    />
                  </div>
                  <div className="form-control">
                    <label>Land Title :</label>
                    <Field
                      type="text"
                      name="land_title"
                      placeholder="Enter land title/document"
                    />
                    <ErrorMessage
                      name="land_title"
                      component="span"
                      className="errorMsg"
                    />
                  </div>

                  <div className="control-control">
                    <label>Description :</label>
                    <Field
                      as="textarea"
                      name="description"
                      placeholder="Enter description"
                      rows={4}
                      className="w-full border resize-x-none px-1 pt-1 focus:outline-none rounded placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="description"
                      component="span"
                      className="errorMsg"
                    />
                  </div>

                  <div>
                    <div className="form-control">
                      <label>Upload picture :</label>
                      <Field
                        type="file"
                        name="land_picture"
                        placeholder="Enter property bathroom"
                      />
                      <ErrorMessage
                        name="land_picture"
                        component="span"
                        className="errorMsg"
                      />
                    </div>
                    <div className="form-control">
                      <label>Amenities</label>
                      <FieldArray name="amenities">
                        {(fieldArrayProps) => {
                          const { push, remove, form } = fieldArrayProps;
                          const { values } = form;
                          const { amenities } = values;
                          return (
                            <div>
                              {amenities.map((amenities, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-1 mb-2"
                                >
                                  <Field
                                    name={`amenities[${index}]`}
                                    placeholder="Add amenities"
                                  />
                                  {index > 0 && (
                                    <button
                                      className="transparentButton"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      -
                                    </button>
                                  )}
                                  <button
                                    className="transparentButton"
                                    type="button"
                                    onClick={() => push("")}
                                  >
                                    +
                                  </button>
                                </div>
                              ))}
                            </div>
                          );
                        }}
                      </FieldArray>
                    </div>
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
                  <button
                    disabled={!formik.isValid || formik.isSubmitting}
                    type="submit"
                    className="button"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateLand;
