import React, { useContext } from "react";
import { Field, Form, Formik } from "formik";
import { AccountContext } from "../../Context/AccountContextProvider";
import { url } from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";

const EditSocialMedia = () => {
  const { userAccount, userInfo } = useContext(AccountContext);

  const initialValues = {
    facebookURL: userAccount.socialDetails.facebookURL,
    twitterURL: userAccount.socialDetails.twitterURL,
    youtubeURL: userAccount.socialDetails.youtubeURL,
    instagramURL: userAccount.socialDetails.instagramURL,
    whatsappURL: userAccount.socialDetails.whatsappURL,
  };

  const onSubmit = (values) => {
    axios
      .patch(
        `${url}/user/profile/update/social
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
        toast.error(err.message);
      });
  };

  return (
    <>
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <h4 className="font-semibold text-lg pb-4">Social Media</h4>
            <div className="form-control">
              <label htmlFor="facebookURL">Facebook URL</label>
              <Field type="text" name="facebookURL" id="facebookURL" />
            </div>
            <div className="form-control">
              <label htmlFor="twitterURL">Twitter URL</label>
              <Field type="text" name="twitterURL" id="twitterURL" />
            </div>
            <div className="form-control">
              <label htmlFor="instagramURL">Instagram URL</label>
              <Field type="text" name="instagramURL" id="instagramURL" />
            </div>
            <div className="form-control">
              <label htmlFor="youtubeURL">Youtube URL</label>
              <Field type="text" name="youtubeURL" id="youtubeURL" />
            </div>
            <div className="form-control">
              <label htmlFor="whatsappURL">Whatsapp URL</label>
              <Field type="tel" name="whatsappURL" id="whatsappURL" />
            </div>
            <button type="submit" className="button w-full">
              Update
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditSocialMedia;
