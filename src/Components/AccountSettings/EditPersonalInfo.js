import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import avatar from "../../Images/avatar.png";
import { AccountContext } from "../../Context/AccountContextProvider";
import { url } from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { stateList } from "../../data/stateDate";

const EditPersonalInfo = () => {
  const { userAccount, userInfo } = useContext(AccountContext);

  const validate = Yup.string().required("Field is required!");

  const profileInitialValues = {
    fullname: userAccount.fullname,
    email: userAccount.email,
    gender: userAccount.gender,
    phone: userAccount.phone,
    stateOfOrigin: userAccount.stateOfOrigin,
    DOB: userAccount.DOB,
    about: userAccount.about,
    houseAdress: userAccount.houseAdress,
    officeAdress: userAccount.officeAdress,
  };

  const profileOnSubmit = (values) => {
    axios
      .patch(
        `${url}/user/profile/update/personal
  `,
        values,
        {
          headers: {
            Accept: "application/json",
            Authorization: `bearer ${userInfo.token}`,
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

  const profileValidationSchema = Yup.object({
    fullname: validate,
    email: validate,
    gender: validate,
    phone: validate,
    stateOfOrigin: validate,
    houseAdress: validate,
  });

  return (
    <>
      <div>
        <Formik
          initialValues={profileInitialValues}
          validationSchema={profileValidationSchema}
          onSubmit={profileOnSubmit}
        >
          <Form>
            <h4 className="font-semibold text-lg pb-4">Personal Details</h4>

            <label className="" htmlFor="image">
              <img src={avatar} alt="avatar" className="h-20 cursor-pointer" />
            </label>

            <input type="file" id="image" className="hidden" />
            <div className="form-control mt-2">
              <label htmlFor="fullName">Full name</label>
              <Field type="text" name="fullname" id="fullName" />
              <ErrorMessage
                name="fullname"
                component="span"
                className="errorMsg"
              />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage
                name="email"
                component="span"
                className="errorMsg"
              />
            </div>

            <div className="form-control">
              <label htmlFor="gender">Gender</label>
              <Field name="gender" id="gender" as="select">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="male">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="span"
                className="errorMsg"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone Number</label>
              <Field type="tel" name="phone" id="phone" />
              <ErrorMessage
                name="phone"
                component="span"
                className="errorMsg"
              />
            </div>
            <div className="form-control">
              <label htmlFor="state">State</label>
              <Field name="stateOfOrigin" id="state" as="select">
                <option value="">Select state</option>
                {stateList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="stateOfOrigin"
                component="span"
                className="errorMsg"
              />
            </div>
            <div className="form-control">
              <label htmlFor="DOB">Date of Birth</label>
              <Field type="date" name="DOB" id="DOB" />
            </div>
            <div className="form-control">
              <label htmlFor="aboutMe">About me</label>
              <Field name="about" id="aboutMe" as="textarea" />
            </div>
            <div className="form-control">
              <label htmlFor="houseAdress">house Address</label>
              <Field type="text" name="houseAdress" id="houseAdress" />
              <ErrorMessage
                name="houseAdress"
                component="span"
                className="errorMsg"
              />
            </div>
            <div className="form-control">
              <label htmlFor="officeAdress">Office Address</label>
              <Field type="text" name="officeAdress" id="officeAdress" />
            </div>
            <button type="submit" className="button w-full">
              Update
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditPersonalInfo;
