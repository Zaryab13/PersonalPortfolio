import React from "react";

const SectionHeading = ({children, className = ''}) => {
  const classes = `${className} text-3xl font-medium capitalize mb-8 text-center`
  return <h2 className={classes}>{children}</h2>;
};

export default SectionHeading;
