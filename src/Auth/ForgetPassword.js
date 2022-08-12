import { ErrorMessage, Formik, Form, Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import * as Yup from "yup";
// import axios from "axios";

const ForgetPassword = () => {
  const onSubmit = (values) => {};

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="form-container" style={{ maxWidth: 400 }}>
        <Tooltip title="Back to Login" placement="right">
          <Link to="/login" className="hover:text-secondary">
            <i className="ri-arrow-left-line text-2xl font-bold"></i>
          </Link>
        </Tooltip>
        <div className="border rounded bg-white px-5 py-7">
          <h2 className="pb-5 text-xl font-medium">Forget Password</h2>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required("Field is Required!")
                .email("Invalid email format"),
            })}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="form-control w-full">
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email.."
                  className="bg-gray-50"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="errorMsg"
                />
              </div>
              <button className="button w-8/12 mt-3">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
