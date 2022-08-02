import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PageToper from "./PageToper";

const EditAccount = ({ close }) => {
  return (
      <div className="Container">
          <PageToper title="Edit details" desc="You can edit your details now" closeEdit="closeEdit" close={close}/>
        <Formik>
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg pb-4">Personal Details</h4>
                <div className="form-control">
                  <label htmlFor="fullName">Full name</label>
                  <Field type="text" name="fullName" id="fullName" />
                  <ErrorMessage name="fullName" component="span" />
                </div>

                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email" component="span" />
                </div>

                <div className="form-control">
                  <label htmlFor="gender">Gender</label>
                  <Field name="gender" id="gender" as="select">
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
                  <Field name="state" id="state" as="select">
                    <option value="">Select state</option>
                    <option value="male">Abia</option>
                    <option value="male">Imo</option>
                  </Field>
                  <ErrorMessage name="gender" component="span" />
                </div>
                <div className="form-control">
                  <label htmlFor="aboutMe">About me</label>
                  <Field name="aboutMe" id="aboutMe" as="textarea" />
                  <ErrorMessage name="aboutMe" component="span" />
                </div>
                <div className="form-control">
                  <label htmlFor="location">Location</label>
                  <Field type="text" name="location" id="location" />
                  <ErrorMessage name="location" component="span" />
                </div>
                <div className="form-control">
                  <label htmlFor="address">Office Address</label>
                  <Field type="text" name="address" id="address" />
                  <ErrorMessage name="address" component="span" />
                </div>
              </div>

              <div>
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
                <div className="form-control">
                  <label htmlFor="dob">Date of Birth</label>
                  <Field type="date" name="dob" id="dob" />
                  <ErrorMessage name="dob" component="span" />
                </div>
              </div>
              <div>
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
              </div>
            </div>
          </Form>
        </Formik>
      </div>
  );
};

export default EditAccount;
