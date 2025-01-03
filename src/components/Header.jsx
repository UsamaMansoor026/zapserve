import React, { useState } from "react";
import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdClose, MdEmail, MdMenu } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="global-padding text-white bg-primary">
      {/* Upper Header Portion */}
      <div className="flex items-center justify-between">
        {/* Phone and Email */}
        <div className="flex items-center gap-9">
          {/* Phone No */}
          <div className="flex items-center gap-1.5 text-sm header-padd-y">
            <p>
              <FaPhoneAlt />
            </p>
            <p className="md:hidden">Call Us: +92-333-3333333</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-1.5 text-sm">
            <p>
              <MdEmail />
            </p>
            <p className="md:hidden">Email: info.zapserve@gmail.com</p>
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

      <hr className="bg-[#FFFFFF19] border-none h-[1px] w-[50%] mx-auto my-3 md:w-[70%]" />

      {/* Lower Header Portion */}
      <nav className="pb-4 flex items-center justify-between relative">
        <Link to="/" className="text-3xl">
          ZapServe
        </Link>

        <ul className={`${showMenu ? "showMobNav" : ""}`}>
          <li
            className="text-3xl cursor-pointer hidden md:block"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MdClose />
          </li>
          <li
            className={`link-padd ${active === "Home" ? "active" : ""}`}
            onClick={() => {
              setActive("Home");
              setShowMenu(false);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`link-padd ${active === "Hosting" ? "active" : ""}`}
            onClick={() => {
              setActive("Hosting");
              setShowMenu(false);
            }}
          >
            <Link to="/hosting">Hosting</Link>
          </li>
          <li
            className={`link-padd ${active === "About" ? "active" : ""}`}
            onClick={() => {
              setActive("About");
              setShowMenu(false);
            }}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`link-padd ${active === "Blog" ? "active" : ""}`}
            onClick={() => {
              setActive("Blog");
              setShowMenu(false);
            }}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`link-padd ${active === "Contact" ? "active" : ""}`}
            onClick={() => {
              setActive("Contact");
              setShowMenu(false);
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center gap-2 py-3 px-10 border-[1px] border-white rounded-full duration-300 bg-primary hover:bg-white hover:text-primary md:text-white md:border-primary"
            >
              <span>
                <IoIosChatbubbles />
              </span>
              <span>Live Chat</span>
            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className="text-3xl cursor-pointer hidden md:block"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <MdClose /> : <MdMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
