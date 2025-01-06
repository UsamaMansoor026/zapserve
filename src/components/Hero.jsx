import React from "react";
import heroImg from "../assets/heroimg.webp";
import { clouds } from "../assets";

const Hero = () => {
  return (
    <section className="hero global-padding relative overflow-x-hidden pt-16">
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
          <h1 className="text-[86px] sm:text-[55px] leading-tight font-semibold">
            The Best <br /> Web Hosting
          </h1>
          <h3 className="text-3xl sm:text-[23px] font-semibold">
            Starting at <span>$7.99</span> $2.95/month*
          </h3>
          <button className="max-w-[200px] w-full border text-primary border-white bg-white font-semibold text-xl rounded-full px-6 py-3 tracking-tighter duration-200 hover:bg-primary hover:border-primary hover:shadow-md hover:text-white">
            Get Start Now!
          </button>
        </div>

        {/* Right Side */}
        <div className="sm:w-full md:w-[70%] w-full mx-auto overflow-hidden">
          <img
            src={heroImg}
            alt="Image"
            className="w-full mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
