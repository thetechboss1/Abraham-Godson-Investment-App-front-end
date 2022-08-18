import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo1.png";
import showcase from "../Images/showcase.jpg";
import { toast } from "react-toastify";
import { PageContext } from "../Context/PageContextProvider";
import { url } from "../Api/index";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setOpenBackDrop, setCheckLogin } = useContext(PageContext);
  const navigate = useNavigate();
  // handle toggle
  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Field is Required!")
      .email("Invalid email format"),
    password: Yup.string().required("Field is Required!"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setOpenBackDrop(true);
    axios({
      url: `${url}/user/login`,
      method: "post",
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((result) => {
        setOpenBackDrop(false);
        toast.success(result.data.message);
        localStorage.setItem("user_info", JSON.stringify(result.data));
        // setCheckLogin(true);
        navigate("/");
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
        <div className="bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-5 flex items-center">
            <div>
              <div className="py-14">
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
                  <button type="submit">Sign In</button>

                  <div className="flex justify-between items-center"></div>
                </Form>
              </Formik>

              <div className="flex items-center justify-between md:gap-24 lg:gap-x-28 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" />
                  <label
                    htmlFor="remember"
                    className="cursor-pointer hover:text-secondary"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forget-password"
                  className="cursor-pointer hover:text-secondary"
                >
                  Forget password
                </Link>
              </div>

              <div className="text-sm mt-14 flex items-center gap-x-3 justify-center">
                <p> Don't have an account yet ? </p>
                <Link
                  to="/register"
                  href="#!"
                  className="text-primary hover:text-secondary"
                >
                  Register Now
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

export default Login;
