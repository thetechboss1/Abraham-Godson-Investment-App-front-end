import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../Context/PageContextProvider";
import logo from "../Images/logo1.png";
import showcase from "../Images/showcase.jpg";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setOpenBackDrop } = useContext(PageContext);
  
  // handle toggle
  const toggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="auth_page">
      <div className="bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-0">
        <div className="px-4 py-5 flex items-center">
          <div>
            <div className="pb-10">
              <img src={logo} alt="logo" className="h-12" />
            </div>
            <form>
              <div className="form-group">
                <label>Full name </label>
                <input type="text" placeholder="Full name" />
              </div>
              <div className="form-group my-4">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-group">
                  <label>Phone number</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                <label>Referral phone</label>
                <input type="tel" placeholder="referral phone number" />
              </div>
              </div>
              <div className="form-group mt-4">
                <label>Password</label>
                <div className="flex border rounded-md items-center">
                  <input
                    type={showPassword === false ? "password" : "text"}
                    placeholder="Enter your password"
                    className="border-none"
                  />
                  {showPassword ? (
                    <i
                      className="ri-eye-off-fill pr-3 text-xl cursor-pointer"
                      onClick={toggle}
                    ></i>
                  ) : (
                    <i
                      className="ri-eye-fill pr-3 text-xl cursor-pointer"
                      onClick={toggle}
                    ></i>
                  )}
                </div>
              </div>
              <button type="submit">Register</button>

              <div className="flex justify-between items-center"></div>
            </form>
            <div className="flex items-center justify-between gap-10 md:gap-20 lg:gap-x-36 text-sm invisible">
              <span>hiddenhidden</span>

              <span>hiddenhiddenhiddenhidden</span>
            </div>

            <div className="text-sm mt-5 flex items-center gap-x-3 justify-center">
              <p>have an account already? </p>
              <Link
                to="/login"
                href="#!"
                className="text-primary hover:text-secondary"
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="rounded-tr-md rounded-br-md hidden md:flex justify-center"
          style={{
            background: `url(${showcase})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className="flex items-end justify-center gap-2 text-white font-bold text-xs pb-5">
            <i className="ri-checkbox-blank-circle-fill"></i>
            <i className="ri-checkbox-blank-circle-fill"></i>
            <i className="ri-checkbox-blank-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
