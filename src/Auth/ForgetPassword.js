import { ErrorMessage, Formik, Form, Field } from "formik";
import React from "react";

const ForgetPassword = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border px-3 py-4 rounded">
        <h2>Forget Password</h2>
        <Formik>
          <Form>
            <div className="form-control">
              <label>Email</label>
              <Field type="email" name="email" placeholder="Enter email.." />
              <ErrorMessage
                name="email"
                component="span"
                className="errorMsg"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPassword;
