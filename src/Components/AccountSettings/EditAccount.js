import React from "react";
import PageToper from "../PageToper";
import EditPersonalInfo from "./EditPersonalInfo";
import EditSocialMedia from "./EditSocialMedia";
import EditBankDetails from "./EditBankDetails";

const EditAccount = ({ close }) => {
  return (
    <div className="Container">
      <PageToper
        title="Edit details"
        desc="You can edit your details now"
        closeEdit="closeEdit"
        close={close}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        <EditPersonalInfo />
        <EditSocialMedia />
        <EditBankDetails />
      </div>
    </div>
  );
};

export default EditAccount;
