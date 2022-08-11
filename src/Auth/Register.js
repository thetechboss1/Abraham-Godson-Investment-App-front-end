import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { PageContext } from "../Context/PageContextProvider";
import logo from "../Images/logo1.png";
import showcase from "../Images/showcase.jpg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { url } from "../Api/index";
import { toast } from "react-toastify";
import axios from "axios";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setOpenBackDrop } = useContext(PageContext);
  const validate = Yup.string().required("Field is Required!");
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  const refNumber = searchParams.get("ref");
  const [disAble, setDisable] = useState(false);

  useEffect(() => {
    if (refNumber && refNumber.length > 0) {
      setDisable(true);
    }
  }, [refNumber]);

  // handle toggle
  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    refphone: refNumber,
    password: "",
  };

  const validationSchema = Yup.object({
    fullname: validate,
    email: validate.email("Invalid email format"),
    phone: validate.min(11, "Incomplete phone number"),
    password: validate.min(8, "Password must not be lass than 8 characters"),
    refphone: Yup.string().min(11, "Incomplete phone number"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setOpenBackDrop(true);
    axios({
      url: `${url}/user/register`,
      method: "post",
      data: values,
    })
      .then((result) => {
        setOpenBackDrop(false);
        toast.success(result.data.message);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setOpenBackDrop(false);
      });

    onSubmitProps.resetForm();
  };

  return (
    <>
      <div className="auth_page">
        <div className="bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-0">
          <div className="px-4 py-5 flex items-center">
            <div>
              <div className="pb-10">
                <img src={logo} alt="logo" className="h-12" />
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
              >
                <Form>
                  <div className="form-group">
                    <label>Full name </label>
                    <Field
                      type="text"
                      placeholder="Full name"
                      name="fullname"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="span"
                      className="errorMsg"
                    />
                  </div>
                  <div className="form-group my-4">
                    <label>Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="johndoe@gmail"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="errorMsg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-group">
                      <label>Phone number</label>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="span"
                        className="errorMsg"
                      />
                    </div>
                    <div className="form-group">
                      <label>Referral phone</label>
                      <Field
                        type="tel"
                        name="refphone"
                        placeholder="referral phone number"
                        disabled={disAble}
                      />
                      <ErrorMessage
                        name="refphone"
                        component="span"
                        className="errorMsg"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label>Password</label>
                    <div className="flex border rounded-md items-center">
                      <Field
                        type={showPassword === false ? "password" : "text"}
                        placeholder="Enter your password"
                        className="border-none"
                        name="password"
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
                  <button type="submit">Register</button>

                  <div className="flex justify-between items-center"></div>
                </Form>
              </Formik>
              <div className="flex items-center justify-between gap-10 md:gap-20 lg:gap-x-36 text-sm invisible">
                <span>hiddenhidden</span>

                <span>hiddenhiddenhiddenhidden</span>
              </div>

              <div className="text-sm mt-5 flex items-center gap-x-3 justify-center">
                <p>have an account already? </p>
                <Link
                  to="/login"
                  href="#!"
                  className="text-primary hover:text-secondary"
                >
                  Login Now
                </Link>
              </div>
            </div>
          </div>
          <div
            className="rounded-tr-md rounded-br-md hidden md:flex justify-center"
            style={{
              background: `url(${showcase})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
            <div className="flex items-end justify-center gap-2 text-white font-bold text-xs pb-5">
              <i className="ri-checkbox-blank-circle-fill"></i>
              <i className="ri-checkbox-blank-circle-fill"></i>
              <i className="ri-checkbox-blank-circle-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
