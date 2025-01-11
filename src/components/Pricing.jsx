import React from "react";
import SectionHeading from "./SectionHeading";
import { pricing } from "../assets";

const Pricing = () => {
  return (
    <section className="global-padding py-16">
      <SectionHeading className="text-5xl capitalize mb-4 md:text-[40px] xsm:text-2xl text-center">
        Choose Your Web Hosting Plan
      </SectionHeading>
      <p className="text-textColor text-center text-xl font-semibold">
        You want custom hosting plan. No hidden charge.
      </p>

      {/* Cards */}
      <div className="mt-10">
        {pricing.map((pricing) => (
          <article key={pricing.id} className="p-10 rounded-[3px]">
            <div className=" text-center">
              <h4>{pricing.plan}</h4>
              <p>On sale - Save {pricing.saveupto}</p>
            </div>
            <div className="my-5 text-center">
              <span>$</span>

              <h2>{pricing.price}</h2>
              <p>/per month</p>
            </div>
            <div className="">
              <button type="button">Get Started</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
