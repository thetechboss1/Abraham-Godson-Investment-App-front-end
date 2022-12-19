import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
import { ViewerForm } from "./Helper/ViewerForm";
import PageToper from "./PageToper";

export const pStyle = "placeholder:text-black bg-gray-100";
const RealtorsDetails = ({ close, id }) => {
  const { userInfo } = useContext(PageContext);
  const [userAccount, setUserAccount] = useState({});
  const [sales, setSales] = useState([]);

  const social = userAccount.socialDetails;
  const bank = userAccount.bankDetails;
  useEffect(() => {
    axios
      .get(`${url}/user/profile/byID/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setUserAccount(response.data.user);
        setSales(response.data.sales);
      })
      .catch((err) => {});
  }, [userInfo?.token, id]);
  return (
    <div className="Container">
      <PageToper
        title={userAccount.fullname}
        desc="Realtor's Profile"
        adminAccount
        closeEdit="closeEdit"
        close={close}
      />

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Persona details*/}
        <div>
          <h4 className="font-semibold text-lg pb-4">Personal Details</h4>

          <ViewerForm
            label="Full Name"
            placeholder={userAccount.fullname}
            type="input"
          />
          <ViewerForm
            label="Email"
            placeholder={userAccount.email}
            type="input"
          />
          <ViewerForm
            label="Phone number"
            placeholder={userAccount.phone}
            type="input"
          />
          <ViewerForm
            label="Realtor sales"
            placeholder={sales?.length}
            type="input"
          />

          <ViewerForm
            label="Gender"
            placeholder={userAccount.gender}
            type="input"
          />
          <ViewerForm
            label="Referral ID"
            placeholder={userAccount.refID}
            type="input"
          />
          <ViewerForm
            label="Date of birth"
            placeholder={userAccount.DOB}
            type="input"
          />
          <ViewerForm
            label="State of origin"
            placeholder={userAccount.stateOfOrigin}
            type="input"
          />
          <ViewerForm
            label="House Address"
            placeholder={userAccount.houseAdress}
            type="textarea"
          />
          <ViewerForm
            label="Office Address"
            placeholder={userAccount.officeAdress}
            type="textarea"
          />
          <ViewerForm
            label="About"
            placeholder={userAccount.about}
            type="textarea"
          />
        </div>
        {/* social */}
        <div>
          <h4 className="font-semibold text-lg pb-4">Social Media</h4>
          <ViewerForm
            label="Facebook"
            placeholder={social?.facebookURL}
            type="input"
          />
          <ViewerForm
            label="instagram"
            placeholder={social?.instagramURL}
            type="input"
          />
          <ViewerForm
            label="Twitter"
            placeholder={social?.twitterURL}
            type="input"
          />
          <ViewerForm
            label="Youtube"
            placeholder={social?.youtubeURL}
            type="input"
          />
          <ViewerForm
            label="Whatsapp"
            placeholder={social?.whatsappURL}
            type="input"
          />
        </div>

        {/* bank details */}
        <div>
          <h4 className="font-semibold text-lg pb-4">Bank details</h4>
          <ViewerForm
            label="Account Number"
            placeholder={bank?.bankAccount}
            type="input"
          />
          <ViewerForm
            label="Account Name"
            placeholder={bank?.bankHolder}
            type="input"
          />
          <ViewerForm
            label="Bank Name"
            placeholder={bank?.bankName}
            type="input"
          />
        </div>
      </form>
    </div>
  );
};

export default RealtorsDetails;
