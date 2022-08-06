import { Modal } from "@mui/material";
import React, { useState } from "react";
import PageToper from "../Components/PageToper";
import DashboardLayout from "../Layout/DashboardLayout";

const AdminAccount = () => {
  const [resetPModal, setResetPModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper
          title="My Account (Admin)"
          desc="Godswill Admin"
          adminAccount
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div>
              <div className="flex justify-end gap-4 mb-3">
                <button className="button">Edit Profile</button>
                <button className="button" onClick={() => setResetPModal(true)}>
                  Reset password
                </button>
              </div>
              <div className="form-control">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Admin Hope"
                  disabled={true}
                  className="placeholder:text-black"
                />
              </div>
              <div className="form-control">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="hope@gmail.com"
                  disabled={true}
                  className="placeholder:text-black"
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
            <form>
              <div className="form-control">
                <label>Old Password</label>
                <input type="password" placeholder="Enter old password" />
              </div>
              <div className="form-control">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className="form-control">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" />
              </div>
            </form>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default AdminAccount;
