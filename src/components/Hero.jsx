import React from "react";
import cloud from "../assets/cloud-1.webp";
import cloud2 from "../assets/cloud-2.webp";

const Hero = () => {
  return (
    <section className="hero global-padding relative">
      <h1>This is Hero Section</h1>

      {/* Flying Clouds */}
      <div className="absolute top-16 w-full">
        <img src={cloud} alt="" className="flying-cloud cloud1" />
      </div>
      <div className="absolute top-32 w-full">
        <img src={cloud2} alt="" className="flying-cloud cloud2" />
      </div>
    </section>
  );
};

export default Hero;
