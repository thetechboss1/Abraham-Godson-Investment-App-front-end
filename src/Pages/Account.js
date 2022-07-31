import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const Account = () => {
  return (
    <DashboardLayout>
      <div className="Container mb-10">
        <PageToper title="My Account" desc="Godswill Omenuko Onyekachi" />

        <div className="">
            <div className="flex justify-end mb-3">
              <button type="button" className="button">Edit</button>
            </div>
          <Formik>
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-lg pb-4">
                    Personal Details
                  </h4>
                  <div className="form-control">
                    <label htmlFor="fullName">Full name</label>
                    <Field
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Onyekachi Godswill"
                      disabled
                    />
                    <ErrorMessage name="fullName" component="span" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="amgodswill@gmail.com"
                      disabled
                    />
                    <ErrorMessage name="email" component="span" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="gender">Gender</label>
                    <Field
                      name="gender"
                      id="gender"
                      placeholder="amgodswill@gmail.com"
                      disabled
                      as="select"
                    >
                      <option value="male">Male</option>
                      <option value="male">Female</option>
                    </Field>
                    <ErrorMessage name="gender" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="phone">Phone Number</label>
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="09038968345"
                      disabled
                    />
                    <ErrorMessage name="phone" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="state">State</label>
                    <Field
                      name="state"
                      id="state"
                      placeholder=""
                      disabled
                      as="select"
                    >
                        <option value="">Select state</option>
                      <option value="male">Abia</option>
                      <option value="male">Imo</option>
                    </Field>
                    <ErrorMessage name="gender" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="aboutMe">About me</label>
                    <Field
                      name="aboutMe"
                      id="aboutMe"
                      placeholder=""
                      disabled
                      as="textarea"
                    />
                    <ErrorMessage name="aboutMe" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="location">Location</label>
                    <Field
                      type="text"
                      name="location"
                      id="location"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="location" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="address">Office Address</label>
                    <Field
                      type="text"
                      name="address"
                      id="address"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="address" component="span" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg pb-4">Social Media</h4>
                  <div className="form-control">
                    <label htmlFor="facebook">Facebook URL</label>
                    <Field
                      type="text"
                      name="facebook"
                      id="facebook"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="facebook" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="twitter">Twitter URL</label>
                    <Field
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="twitter" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="instagram">Instagram URL</label>
                    <Field
                      type="text"
                      name="instagram"
                      id="instagram"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="instagram" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="youtube">Youtube URL</label>
                    <Field
                      type="text"
                      name="youtube"
                      id="youtube"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="youtube" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="whatsapp">Whatsapp URL</label>
                    <Field
                      type="tel"
                      name="whatsapp"
                      id="whatsapp"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="whatsapp" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="dob">Date of Birth</label>
                    <Field
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="dob" component="span" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg pb-4">Bank Details</h4>
                  <div className="form-control">
                    <label htmlFor="bankName">Bank Name</label>
                    <Field
                      type="text"
                      name="bankName"
                      id="bankName"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="bankName" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="accountName">Account Name</label>
                    <Field
                      type="text"
                      name="accountName"
                      id="accountName"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="accountName" component="span" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="accountNumber">Account Number</label>
                    <Field
                      type="text"
                      name="accountNumber"
                      id="accountNumber"
                      placeholder=""
                      disabled
                    />
                    <ErrorMessage name="accountNumber" component="span" />
                  </div>
                  <button type="submit" disabled className="button w-full">Update</button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Account;
