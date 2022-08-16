import { ErrorMessage, Formik, Form, Field } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../Api/index";
import { PageContext } from "../Context/PageContextProvider";

const ForgetPassword = () => {
  const { setOpenBackDrop } = useContext(PageContext);
  const navigate = useNavigate();

  const onSubmit = (values, onSubmitProps) => {
    setOpenBackDrop(true);
    axios({
      url: `${url}/user/forgot/password`,
      method: "post",
      data: {
        email: values.email
      },
    })
      .then((result) => {
        setOpenBackDrop(false);
        // toast.success(result.data.message);
        // navigate("/reset-password");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.response.data.message);
        setOpenBackDrop(false);
      });

    // onSubmitProps.resetForm();
  };

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
              <button type="submit" className="button w-8/12 mt-3">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
