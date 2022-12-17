import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "../Api";
import { PageContext } from "../Context/PageContextProvider";
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
  console.log(userAccount);
  return (
    <div className="Container">
      <PageToper
        title="okeke"
        desc="Realtor's Profile"
        adminAccount
        closeEdit="closeEdit"
        close={close}
      />

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Persona details*/}
        <div>
          <h4 className="font-semibold text-lg pb-4">Personal Details</h4>
          <div className="form-control">
            <label>Full name</label>
            <input
              type="text"
              placeholder={userAccount.fullname}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              placeholder={userAccount.email}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>Phone number</label>
            <input
              type="text"
              placeholder={userAccount.phone}
              disabled={true}
              className={pStyle}
            />
          </div>

          <div className="form-control">
            <label>Realtor sales</label>
            <input
              type="text"
              placeholder={sales?.length}
              disabled={true}
              className={pStyle}
            />
          </div>

          <div className="form-control">
            <label>Gender</label>
            <input
              type="text"
              placeholder={userAccount.gender}
              disabled={true}
              className={pStyle}
            />
          </div>

          <div className="form-control">
            <label>Referral ID</label>
            <input
              type="text"
              placeholder={userAccount.refID}
              disabled={true}
              className={pStyle}
            />
          </div>

          <div className="form-control">
            <label>Date of birth</label>
            <input
              type="text"
              placeholder={userAccount.DOB}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>House Address</label>
            <input
              type="text"
              placeholder={userAccount.houseAdress}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>State of origin</label>
            <input
              type="text"
              placeholder={userAccount.stateOfOrigin}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>Office Address</label>
            <textarea
              placeholder={userAccount.officeAdress}
              disabled={true}
              className={`${pStyle} h-24`}
            />
          </div>

          <div className="form-control">
            <label>About</label>
            <textarea
              placeholder={userAccount.about}
              disabled={true}
              className={`${pStyle} h-24`}
            />
          </div>
        </div>
        {/* social */}
        <div>
          <h4 className="font-semibold text-lg pb-4">Social Media</h4>
          <div className="form-control">
            <label>Facebook</label>
            <input
              type="text"
              placeholder={social?.facebookURL}
              disabled={true}
              className={pStyle}
            />
          </div>

          <div className="form-control">
            <label>instagram </label>
            <input
              type="text"
              placeholder={social?.instagramURL}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>twitter</label>
            <input
              type="text"
              placeholder={social?.twitterURL}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>youtube</label>
            <input
              type="text"
              placeholder={social?.youtubeURL}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>whatsapp</label>
            <input
              type="text"
              placeholder={social?.whatsappURL}
              disabled={true}
              className={pStyle}
            />
          </div>
        </div>

        {/* bank details */}
        <div>
          <h4 className="font-semibold text-lg pb-4">Bank details</h4>
          <div className="form-control">
            <label>Account Number</label>
            <input
              type="text"
              placeholder={bank?.bankAccount}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>Account Name</label>
            <input
              type="text"
              placeholder={bank?.bankHolder}
              disabled={true}
              className={pStyle}
            />
          </div>
          <div className="form-control">
            <label>Bank Name</label>
            <input
              type="text"
              placeholder={bank?.bankName}
              disabled={true}
              className={pStyle}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RealtorsDetails;
