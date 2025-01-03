import React from "react";
import { FaFlag, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="global-padding border-b-[1px] border-b-[rgba(255, 255, 255, 0.1)] text-white bg-primary">
      {/* Upper Header Portion */}
      <div className="flex items-center justify-between">
        {/* Phone and Email */}
        <div className="flex items-center gap-5">
          {/* Phone No */}
          <div className="flex items-center gap-1 text-sm border-r-[1px] border-r-[rgba(255, 255, 255, 0.1)] pr-5 header-padd-y">
            <p className="flex items-center gap-3">
              <span className="text-sm">
                <FaPhoneAlt />
              </span>{" "}
              <span>Call Us:</span>
            </p>
            <p>+92-333-3333333</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-1 text-sm">
            <p className="flex items-center gap-3">
              <span className="text-sm">
                <MdEmail />
              </span>{" "}
              <span>Email:</span>
            </p>
            <p>info.zapserve@gmail.com</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex items-center gap-1 text-sm cursor-pointer">
          <p className="flex items-center gap-3">
            <span className="text-sm">
              <FaLock />
            </span>{" "}
            <span>Login/Signup</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
