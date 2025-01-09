import React from "react";

const SectionHeading = ({ children, className }) => {
  return (
    <div className={`text-headingColor font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default SectionHeading;
