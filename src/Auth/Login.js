import React from "react";
import logo from "../Images/logo1.png";
import showcase from "../Images/showcase.jpg";

const Login = () => {
  return (
    <div className="auth_page">
      <div
        className="bg-white shadow-md rounded-md grid grid-cols-2"
        // style={{ height: "60vh" }}
      >
        <div className="px-10 py-5 flex items-center">
          <div>
            <div className="my-10">
              <img src={logo} alt="logo" className="h-12" />
            </div>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail" />
              </div>
              <div className="form-group mt-4">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <button type="submit">Sign In</button>

              <div className="flex justify-between items-center"></div>
            </form>

            <div className="flex items-center gap-x-10 mt-10">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />{" "}
                <label htmlFor="remember" className="cursor-pointer">
                  Remember me
                </label>
              </div>

              <span>Forget password</span>
            </div>
          </div>
        </div>
        <div
          style={{
            background: `url(${showcase})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
