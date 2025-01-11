import React from "react";
import heroImg from "../assets/heroimg.webp";
import herobot from "../assets/herobottom.webp";
import { clouds } from "../assets";
import SectionHeading from "./SectionHeading";

const Hero = () => {
  return (
    <>
      <section className="hero global-padding relative overflow-hidden pt-16 pb-[90px]">
        {/* Flying Clouds */}
        <div className="absolute top-10 w-full">
          <img src={clouds.cloud1} alt="" className="flying-cloud cloud1" />
        </div>
        <div className="absolute top-28 w-full">
          <img src={clouds.cloud2} alt="" className="flying-cloud cloud3" />
        </div>
        <div className="absolute top-36 w-full">
          <img src={clouds.cloud3} alt="" className="flying-cloud cloud5" />
        </div>
        <div className="absolute top-10 w-full">
          <img src={clouds.cloud4} alt="" className="flying-cloud cloud2" />
        </div>
        <div className="absolute top-48 w-full">
          <img src={clouds.cloud5} alt="" className="flying-cloud cloud4" />
        </div>

        {/* Hero Section Content */}
        <div className="grid grid-cols-2 md:grid-cols-1 items-center">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[86px] xsm:text-[55px] leading-tight font-semibold">
              The Best <br /> Web Hosting
            </h1>
            <h3 className="text-3xl xsm:text-[23px] font-semibold">
              Starting at <span>$7.99</span> $2.95/month*
            </h3>
            <button className="max-w-[200px] w-full border text-primary border-white bg-white font-semibold text-xl rounded-full px-6 py-3 tracking-tighter duration-200 hover:bg-primary hover:border-primary hover:shadow-md hover:text-white">
              Get Start Now!
            </button>
          </div>

          {/* Right Side */}
          <div className="xsm:w-full md:w-[70%] w-full mx-auto overflow-hidden">
            <img
              src={heroImg}
              alt="Image"
              className="w-full mx-auto object-cover"
            />
          </div>
        </div>

        {/* Pattern */}
        <div className="absolute left-0 r-ght-0 bottom-[-5px] w-full">
          <img src={herobot} alt="Wavy pattern" className="w-full" />
        </div>
      </section>

      {/* Small Subsection */}
      <section className="global-padding py-16 flex sm:flex-col sm:items-start sm:mx-auto sm:max-w-[80%] xsm:max-w-full items-center gap-8">
        <div className="w-[30%] sm:w-full">
          <SectionHeading className="mb-[28px] leading-tight text-[42px] md:text-[29px]">
            Find Your Perfect Domain Name
          </SectionHeading>
          <h6 className="text-textColor font-semibold text-lg">
            Only $7 for the first year
          </h6>
        </div>

        {/*  */}
        <div className="w-[70%] sm:w-full mt-6">
          <form
            action="#"
            className="domainSearchBox pl-4 rounded-[35px] overflow-hidden flex items-center gap-1"
          >
            <input
              type="text"
              name="domainName"
              id="domainName"
              placeholder="Enter your domain name here"
              className="w-[70%] border-none outline-none placeholder:text-textColor"
            />
            <select
              name="domain"
              id="domain"
              className="max-w-[80px] w-full outline-none border-none"
            >
              <option value=".com">.COM</option>
              <option value=".net">.NET</option>
              <option value=".org">.ORG</option>
              <option value=".co">.CO</option>
            </select>
            <button
              type="submit"
              className="bg-primary p-4 xsm:p-2 text-white w-[28%] sm:w-[40%] whitespace-nowrap xsm:whitespace-normal xsm:font-semibold"
            >
              Search Domain
            </button>
          </form>

          <div className="flex items-center justify-between text-textColor mt-12">
            <p>.COM $5.75</p>
            <p>.NET $9.45</p>
            <p>.ORG $7.50</p>
            <p>.CO $6.00</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
