import { Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const CreateRealtor = ({ open, handleClose }) => {
 
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        referral_phone: "",
        password: "",
      };
    
      const onSubmit = (values, onSubmitProps) => {
        console.log("Form data", values);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      };
    
      const validationSchema = Yup.object({
        // name: validate,
        // location: validate,
        // price: validateNumber,
        // bedroom: validateNumber,
        // bathroom: validateNumber,
        // land_picture: validate,
        // description: validate,
      });
    
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="CModal" style={{ maxWidth: 400 }}>
        <div className="flex justify-between items-center mb-7">
          <h5 className="font-semibold text-accent text-lg">Create Realtor</h5>
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
            <div className="form-control">
              <label>Full Name :</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter realtor full name"
              />
              <ErrorMessage name="name" component="span" className="errorMsg" />
            </div>
            <div className="form-control">
              <label>Email :</label>
              <Field
                type="text"
                name="email"
                placeholder="Enter enter"
              />
              <ErrorMessage name="email" component="span" className="errorMsg" />
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateRealtor;
