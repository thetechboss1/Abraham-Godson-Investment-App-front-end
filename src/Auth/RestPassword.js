import { ErrorMessage, Formik, Form, Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import * as Yup from "yup";

const RestPassword = () => {
  const validate = Yup.string().required("Field is Required!");

  const onSubmit = (values) => {};
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="form-container" style={{ maxWidth: 400 }}>
        <Tooltip title="Back to Forget password" placement="right">
          <Link to="/forget-password" className="hover:text-secondary">
            <i className="ri-arrow-left-line text-2xl font-bold"></i>
          </Link>
        </Tooltip>
        <div className="border rounded bg-white px-5 py-7">
          <h2 className="pb-5 text-xl font-medium">Reset Password</h2>
          <Formik
            initialValues={{ code: "", newPassword: "", confirmPassword: "" }}
            validationSchema={Yup.object({
              code: validate,
              newPassword: validate.min(
                8,
                "Password must not be lass than 8 characters"
              ),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
                .required("Field is required!"),
            })}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="form-control w-full">
                <label>Code</label>
                <Field
                  type="tel"
                  name="code"
                  placeholder="Enter code"
                  className="bg-gray-50"
                />
                <ErrorMessage
                  name="code"
                  component="span"
                  className="errorMsg"
                />
              </div>
              <div className="form-control w-full">
                <label>Password</label>
                <Field
                  type="email"
                  name="newPassword"
                  placeholder="Enter new password"
                  className="bg-gray-50"
                />
                <ErrorMessage
                  name="newPassword"
                  component="span"
                  className="errorMsg"
                />
              </div>
              <div className="form-control w-full">
                <label>Confirm password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter password again"
                  className="bg-gray-50"
                />
                <ErrorMessage
                  name="confirmPassword"
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

export default RestPassword;
