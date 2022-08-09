import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PageToper from "./PageToper";
import avatar from "../Images/avatar.png";
import { AccountContext } from "../Context/AccountContextProvider";
import { url } from "../Api";
import axios from "axios";
import { toast } from "react-toastify";

const EditAccount = ({ close }) => {
  const { userAccount, userInfo } = useContext(AccountContext);
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
        console.error(err);
      });
  };

  const profileValidationSchema = () => {

  };

  return (
    <div className="Container">
      <PageToper
        title="Edit details"
        desc="You can edit your details now"
        closeEdit="closeEdit"
        close={close}
      />
      {/* <Formik> */}
      {/* <Form> */}
      <label className="" htmlFor="image">
        <img
          src={avatar}
          alt="avatar"
          className="h-20 md:h-32 cursor-pointer"
        />
      </label>
      <input type="file" id="image" className="hidden" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {/* Personal details */}
        <div>
          <Formik
            initialValues={profileInitialValues}
            // validationSchema={profileValidationSchema}
            onSubmit={profileOnSubmit}
          >
            <Form>
              <h4 className="font-semibold text-lg pb-4">Personal Details</h4>
              <div className="form-control">
                <label htmlFor="fullName">Full name</label>
                <Field type="text" name="fullname" id="fullName" />
                <ErrorMessage name="fullname" component="span" />
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="span" />
              </div>

              <div className="form-control">
                <label htmlFor="gender">Gender</label>
                <Field name="gender" id="gender" as="select">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="male">Female</option>
                </Field>
                <ErrorMessage name="gender" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone Number</label>
                <Field type="tel" name="phone" id="phone" />
                <ErrorMessage name="phone" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="state">State</label>
                <Field name="stateOfOrigin" id="state" as="select">
                  <option value="">Select state</option>
                  <option value="male">Abia</option>
                  <option value="male">Imo</option>
                </Field>
                <ErrorMessage name="stateOfOrigin" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="DOB">Date of Birth</label>
                <Field type="date" name="DOB" id="DOB" />
                <ErrorMessage name="DOB" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="aboutMe">About me</label>
                <Field name="about" id="aboutMe" as="textarea" />
                <ErrorMessage name="about" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="houseAdress">house Address</label>
                <Field type="text" name="houseAdress" id="houseAdress" />
                <ErrorMessage name="houseAdress" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="officeAdress">Office Address</label>
                <Field type="text" name="officeAdress" id="officeAdress" />
                <ErrorMessage name="officeAdress" component="span" />
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </Form>
          </Formik>
        </div>

        {/* Social Media */}
        {/* <div>
          <Formik>
            <Form>
              <h4 className="font-semibold text-lg pb-4">Social Media</h4>
              <div className="form-control">
                <label htmlFor="facebook">Facebook URL</label>
                <Field type="text" name="facebook" id="facebook" />
                <ErrorMessage name="facebook" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="twitter">Twitter URL</label>
                <Field type="text" name="twitter" id="twitter" />
                <ErrorMessage name="twitter" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="instagram">Instagram URL</label>
                <Field type="text" name="instagram" id="instagram" />
                <ErrorMessage name="instagram" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="youtube">Youtube URL</label>
                <Field type="text" name="youtube" id="youtube" />
                <ErrorMessage name="youtube" component="span" />
              </div>
              <div className="form-control">
                <label htmlFor="whatsapp">Whatsapp URL</label>
                <Field type="tel" name="whatsapp" id="whatsapp" />
                <ErrorMessage name="whatsapp" component="span" />
              </div>
            </Form>
          </Formik>
        </div> */}
        {/* <div>
          <h4 className="font-semibold text-lg pb-4">Bank Details</h4>
          <div className="form-control">
            <label htmlFor="bankName">Bank Name</label>
            <Field type="text" name="bankName" id="bankName" />
            <ErrorMessage name="bankName" component="span" />
          </div>
          <div className="form-control">
            <label htmlFor="accountName">Account Name</label>
            <Field type="text" name="accountName" id="accountName" />
            <ErrorMessage name="accountName" component="span" />
          </div>
          <div className="form-control">
            <label htmlFor="accountNumber">Account Number</label>
            <Field type="text" name="accountNumber" id="accountNumber" />
            <ErrorMessage name="accountNumber" component="span" />
          </div>
          <button type="submit" className="button w-full">
            Update
          </button>
        </div> */}
      </div>
      {/* </Form> */}
      {/* </Formik> */}
    </div>
  );
};

export default EditAccount;
