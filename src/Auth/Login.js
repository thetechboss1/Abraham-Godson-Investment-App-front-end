import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo1.png";
import showcase from "../Images/showcase.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // handle toggle
  const toggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth_page">
      <div className="bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-5 flex items-center">
          <div>
            <div className="py-14">
              <img src={logo} alt="logo" className="h-12" />
            </div>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail" />
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
              <button type="submit">Sign In</button>

              <div className="flex justify-between items-center"></div>
            </form>

            <div className="flex items-center justify-between md:gap-24 lg:gap-x-28 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label
                  htmlFor="remember"
                  className="cursor-pointer hover:text-secondary"
                >
                  Remember me
                </label>
              </div>

              <span className="cursor-pointer hover:text-secondary">
                Forget password
              </span>
            </div>

            <div className="text-sm mt-14 flex items-center gap-x-3 justify-center">
              <p> Don't have an account yet ? </p>
              <Link
                to="/register"
                href="#!"
                className="text-primary hover:text-secondary"
              >
                Register Now
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

export default Login;
