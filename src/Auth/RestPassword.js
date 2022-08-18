import { ErrorMessage, Formik, Form, Field } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import * as Yup from "yup";
import axios from "axios";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import { toast } from "react-toastify";

const RestPassword = () => {
  const validate = Yup.string().required("Field is Required!");
  const { setOpenBackDrop } = useContext(PageContext);
  const navigate = useNavigate();

  const onSubmit = (values, onSubmitProps) => {
    setOpenBackDrop(true);
    axios({
      url: `${url}/user/password/new`,
      method: "post",
      data: {
        code: values.code,
        newPassword: values.newPassword,
      },
    })
      .then((result) => {
        setOpenBackDrop(false);
        toast.success(result.data.message);
        navigate("/login");
        onSubmitProps.resetForm();
      })
      .catch((err) => {
        toast.error(err.data.message);
        setOpenBackDrop(false);
      });
  };
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
                  type="password"
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
