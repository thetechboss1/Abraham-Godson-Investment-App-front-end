import { Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const CreateHouse = ({ handleClose, open }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="CModal" style={{ maxWidth: 500 }}>
        <div className="flex items-center justify-between w-full mb-7">
          <h5 className="text-lg font-semibold text-accent">
            Share Property via
          </h5>
          <i
            className="fas fa-times cursor-pointer text-xl"
            onClick={handleClose}
          ></i>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label>Name</label>
                <Field type="text" name="name" placeholder="Enter name" />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="errorMsg"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateHouse;
