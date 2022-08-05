import { Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const CreateRealtor = ({ open, handleClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    // handle view password toggle
    const toggle = () => {
      setShowPassword(!showPassword);
    };

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
    name: Yup.string().required("Field is Required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Field is Required!"),
    phone: Yup.string().required("Field is Required!"),
    password: Yup.string()
      .required("Field is Required!")
      .min(8, "Password must not be lass than 8 characters"),
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className="CModal scrollBar"
        style={{ maxWidth: 400, height: "85%" }}
      >
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
              <Field type="text" name="email" placeholder="Enter email" />
              <ErrorMessage
                name="email"
                component="span"
                className="errorMsg"
              />
            </div>
            <div className="form-control">
              <label>Phone :</label>
              <Field type="tel" name="phone" placeholder="Enter phone number" />
              <ErrorMessage
                name="phone"
                component="span"
                className="errorMsg"
              />
            </div>
            <div className="form-control">
              <label>Referral Phone :</label>
              <Field
                type="tel"
                name="referral_phone"
                placeholder="Enter referral phone number"
              />
            </div>
            <div className="form-control">
              <label>Password :</label>
               <div className="flex border rounded-md items-center">
               <Field
               type={showPassword === false ? "password" : "text"}
                name="password"
                placeholder="Enter referral phone number"
              />
               {showPassword ? (
                    <i
                      className="ri-eye-off-fill pr-3 text-xl cursor-pointer"
                      onClick={toggle}
                    ></i>
                  ) : (
                    <i
                      className="ri-eye-fill pr-3 text-xl cursor-pointer"
                      onClick={toggle}
                    ></i>
                  )}
               </div>
              <ErrorMessage
                name="password"
                component="span"
                className="errorMsg"
              />
            </div>
            <button className="button">Create account</button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateRealtor;