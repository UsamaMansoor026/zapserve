import React from "react";
import SectionHeading from "./SectionHeading";
import { features } from "../assets";
import featurePattern from "../assets/herobottom.webp";

const Features = () => {
  return (
    <section
      className="pt-16 pb-[100px] global-padding relative bg-[#e8f1f8]"
      id="features"
    >
      <SectionHeading className="text-5xl md:text-4xl text-center mb-4">
        Overall Features
      </SectionHeading>
      <p className="text-lg text-textColor font-semibold text-center">
        Our revolutionary Cloud solution is powerful, simple, and surprisingly
        affordable.
      </p>

      {/* Features Cards */}
      <div className="grid xsm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-10 py-16">
        {features.length > 0 &&
          features.map((feature) => (
            <article
              key={feature.id}
              className="featureCard flex gap-5 duration-200"
            >
              <div className="mt-1">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h5 className="text-[22px] text-headingColor mb-2 font-semibold">
                  {feature.title}
                </h5>
                <p className="text-base text-textColor">{feature.desc}</p>
              </div>
            </article>
          ))}
      </div>

      {/* Pattern */}
      <div className="absolute left-0 r-ght-0 bottom-[-15px] w-full">
        <img src={featurePattern} alt="Wavy pattern" className="w-full" />
      </div>
    </section>
  );
};

export default Features;
