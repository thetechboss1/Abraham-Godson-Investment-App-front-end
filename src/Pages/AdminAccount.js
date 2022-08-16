import React, { useContext, useState } from "react";
import { Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PageToper from "../Components/PageToper";
import { AccountContext } from "../Context/AccountContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../Api";
import { useNavigate } from "react-router-dom";

const AdminAccount = () => {
  const [resetPModal, setResetPModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { userAccount, userInfo } = useContext(AccountContext);
  const navigate = useNavigate();
  const validate = Yup.string().required("Field is required!");

  const submitProfile = (values) => {
    axios
      .patch(
        `${url}/admin/change/details
`,
        values,
        {
          headers: {
            Accept: "application/json",
            Authorization: `bearer ${userInfo?.token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
      })

      .catch((err) => {
        toast.error(err.message);
      });
  };

  const onSubmitReset = (values, onSubmitProps) => {
    // setOpenBackDrop(true);
    axios({
      url: `${url}/admin/change/password`,
      method: "post",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${userInfo?.token}`,
      },
      data: {
        password: values.password,
        newPassword: values.newPassword,
      },
     
    })
      .then((result) => {
        console.log(result);
        toast.success(result.message);
        localStorage.clear("user_info");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    onSubmitProps.resetForm();
  };

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper
          title="Account (Admin)"
          desc={userAccount.fullname}
          adminAccount
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div>
              <div className="flex justify-end gap-4 mb-3">
                <button
                  className="button"
                  onClick={() => setEditProfileModal(true)}
                >
                  Edit Profile
                </button>
                <button className="button" onClick={() => setResetPModal(true)}>
                  Reset password
                </button>
              </div>
              <div className="form-control">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder={userAccount.fullname}
                  disabled={true}
                  className="placeholder:text-black bg-gray-100"
                />
              </div>
              <div className="form-control">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={userAccount.email}
                  disabled={true}
                  className="placeholder:text-black bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reset password modal */}
        <Modal open={resetPModal} onClose={() => setResetPModal(false)}>
          <div className="CModal" style={{ maxWidth: 400 }}>
            <div className="flex justify-between items-center mb-7">
              <h5 className="font-semibold text-accent text-lg">
                Reset Password
              </h5>
              <i
                className="fas fa-times cursor-pointer text-xl"
                onClick={() => setResetPModal(false)}
              ></i>
            </div>
            <Formik
              initialValues={{
                password: "",
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                password: validate,
                newPassword: validate.min(
                  8,
                  "Password must not be lass than 8 characters"
                ),
                confirmPassword: Yup.string().oneOf(
                  [Yup.ref("newPassword"), null],
                  "Passwords must match"
                ).required("Field is required!"),
              })}
              onSubmit={onSubmitReset}
            >
              <Form>
                <div className="form-control">
                  <label>Old Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter old password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="errorMsg"
                  />
                </div>
                <div className="form-control">
                  <label>New Password</label>
                  <Field
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="span"
                    className="errorMsg"
                  />
                </div>
                <div className="form-control">
                  <label>Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="errorMsg"
                  />
                </div>
                <button className="button" type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </Modal>

        {/* Edit profile modal */}
        <Modal
          open={editProfileModal}
          onClose={() => setEditProfileModal(false)}
        >
          <div className="CModal" style={{ maxWidth: 400 }}>
            <div className="flex justify-between items-center mb-7">
              <h5 className="font-semibold text-accent text-lg">
                Edit Profile
              </h5>
              <i
                className="fas fa-times cursor-pointer text-xl"
                onClick={() => setEditProfileModal(false)}
              ></i>
            </div>
            <Formik
              initialValues={{
                fullname: userAccount.fullname,
                email: userAccount.email,
              }}
              validationSchema={Yup.object({
                fullname: validate,
                email: validate.email("Invalid email format"),
              })}
              onSubmit={submitProfile}
            >
              <Form>
                <div className="form-control">
                  <label>Full name</label>
                  <Field type="text" name="fullname" />
                  <ErrorMessage
                    component="span"
                    className="errorMsg"
                    name="fullname"
                  />
                </div>
                <div className="form-control">
                  <label>Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="errorMsg"
                  />
                </div>
                <button className="button" type="submit">
                  Save Changes
                </button>
              </Form>
            </Formik>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default AdminAccount;
