import React, { useContext, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AccountContext } from "../../Context/AccountContextProvider";
import { url } from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";

const EditBankDetails = () => {
  const { userAccount, userInfo } = useContext(AccountContext);

  const initialValues = {
    bankName: userAccount.bankDetails.bankName,
    bankAccount: userAccount.bankDetails.bankAccount,
    bankHolder: userAccount.bankDetails.bankHolder,
  };

  const validationSchema = Yup.object({
    bankName: Yup.string().required("Field is required!"),
    bankHolder: Yup.string().required("Field is required!"),
    bankAccount: Yup.number()
      .typeError("You must specify a number")
      .required("Field is required!"),
  });

  const onSubmit = (values) => {
    axios
      .patch(
        `${url}/user/profile/update/bank
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
        toast.error(err.message)
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h4 className="font-semibold text-lg pb-4">Bank Details</h4>
          <div className="form-control">
            <label htmlFor="bankName">Bank Name</label>
            <Field type="text" name="bankName" id="bankName" />
            <ErrorMessage
              name="bankName"
              component="span"
              className="errorMsg"
            />
          </div>
          <div className="form-control">
            <label htmlFor="bankHolder">Account Name</label>
            <Field type="text" name="bankHolder" id="bankHolder" />
            <ErrorMessage
              name="bankHolder"
              component="span"
              className="errorMsg"
            />
          </div>
          <div className="form-control">
            <label htmlFor="bankAccount">Account Number</label>
            <Field type="text" name="bankAccount" id="bankAccount" />
            <ErrorMessage
              name="bankAccount"
              component="span"
              className="errorMsg"
            />
          </div>
          <button type="submit" className="button w-full">
            Update
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default EditBankDetails;
