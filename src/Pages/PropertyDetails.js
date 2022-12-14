import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { url } from "../Api";
import PageToper from "../Components/PageToper";
import { PageContext } from "../Context/PageContextProvider";
import DashboardLayout from "../Layout/DashboardLayout";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

const PropertyDetails = () => {
  const { userInfo } = useContext(PageContext);
  const [fullDetails, setFullDetails] = useState({});
  const params = useParams();

  const shareUrl = "https://www.agrn.com.ng/properties";

  useEffect(() => {
    axios
      .get(`${url}/properties/${params.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${userInfo?.token}`,
        },
      })
      .then((response) => {
        setFullDetails(response.data.property);
      })

      .catch((err) => {});
  }, [userInfo?.token, params.id]);

  return (
    <DashboardLayout>
      <div className="Container">
        <PageToper title={fullDetails.name} desc={fullDetails.location} />
        <div className="mb-6 flex justify-between items-center">
          <Link to="/properties" className="button flex items-center gap-2">
            <span>All Properties</span>
            <i className="ri-arrow-right-line font-medium"></i>
          </Link>
          <button className="transparentButton">{fullDetails.type}</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <img
              src={fullDetails.image}
              alt={fullDetails.name}
              className="rounded w-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg md:text-xl">
              {fullDetails.price &&
                fullDetails.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
            </h3>
            <h6 className=" border-b-2 inline-block my-2 pb-1 font-medium">
              Initial deposit:{" "}
              <span className="text-accent">
                {fullDetails.intialDeposit &&
                  fullDetails.intialDeposit.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
              </span>
            </h6>
            {fullDetails.title && (
              <h4 className="font-medium pb-2">
                Land title:
                <span className="text-accent">{fullDetails.title}</span>
              </h4>
            )}

            <p className="text-sm text-justify">{fullDetails.description}</p>

            <div className="border-b mt-3" />
            <div className="flex mt-3 gap-7 ">
              <ul className="list-disc pl-4 text-sm">
                {fullDetails.moreDetails &&
                  fullDetails.moreDetails.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
              </ul>
              <div className="border-r" />
              {fullDetails.type === "Land" && (
                <div>
                  <span className="text-sm">Plot size</span>
                  <div className="flex items-center gap-3">
                    <i className="ri-landscape-line text-xl"></i>
                    <span className="text-sm">{fullDetails.details}</span>
                  </div>
                </div>
              )}
              {/* house */}
              {fullDetails.type === "House" && (
                <div>
                  <div className="flex items-center gap-5">
                    <div>
                      <span className="text-sm">Bedroom</span>
                      <div className="flex items-center gap-3">
                        <i className="ri-hotel-bed-line text-xl"></i>
                        <span>{fullDetails.details[0]}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm">Bathroom</span>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-shower text-lg"></i>
                        <span>{fullDetails.details[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* share social */}

            <div className="flex gap-2 mt-3">
              <FacebookShareButton
                url={`${shareUrl}/${params.id}`}
                quote={fullDetails.name}
                hashtag={fullDetails.name}
                description={fullDetails.description}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={`${shareUrl}/${params.id}`}
                quote={fullDetails.name}
                hashtag={"#Property"}
                description={fullDetails.description}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <WhatsappShareButton
                url={`${shareUrl}/${params.id}`}
                quote={fullDetails.name}
                hashtag={"#Property"}
                description={fullDetails.description}
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <TelegramShareButton
                url={`${shareUrl}/${params.id}`}
                quote={fullDetails.name}
                hashtag={"#Property"}
                description={fullDetails.description}
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PropertyDetails;
