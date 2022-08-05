import React, { useState } from "react";
import { Autocomplete, Modal, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const realtors = ["Ushenna Eze", "Godswill Smile", "John Hope"];

const property = [
  { id: 1, label: "2 bed room flat" },
  { id: 2, label: "3 bed room flat" },
  { id: 3, label: "4 bed room flat" },
  { id: 4, label: "5 bed room flat" },
];

const CreateSalesRecord = ({ open, handleClose }) => {
  const [realtorsInputValue, setRealtorsInputValue] = useState("");
  const [propertiesInputValue, setPropertiesInputValue] = useState("");

  // handle form
  const initialValues = {
    property: propertiesInputValue,
  };

  console.log(propertiesInputValue);

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({});

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="CModal scrollBar" style={{ maxWidth: 700 }}>
        <div className="flex justify-between items-center mb-7">
          <h5 className="font-semibold text-accent text-lg">
            Create Sales Record
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
          <Form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="form-control">
                <label>Property</label>
                <Autocomplete
                  inputValue={propertiesInputValue}
                  onInputChange={(event, newInputValue) => {
                    setPropertiesInputValue(newInputValue);
                  }}
                  id="Realtors"
                  options={property}
                  renderInput={(params) => (
                    <TextField {...params} label="Select property" />
                  )}
                />
                <Field name="property" type="text" className="hidden"/>
              </div>
              <div className="form-control">
                <label>Realtor</label>
                <Autocomplete
                  inputValue={realtorsInputValue}
                  onInputChange={(event, newInputValue) => {
                    setRealtorsInputValue(newInputValue);
                  }}
                  id="Realtors"
                  options={realtors}
                  renderInput={(params) => (
                    <TextField {...params} label="Select realtor" />
                  )}
                />
              </div>

              <div></div>
            </div>
            <button type="submit" className="button">Submit</button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateSalesRecord;