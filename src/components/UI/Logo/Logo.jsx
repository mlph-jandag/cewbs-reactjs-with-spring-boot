import React from "react";
import companyLogo from "../../../assets/images/company.png";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.Logo}>
      <img src={companyLogo} alt="CompanyLogo"></img>
    </div>
  );
}

export default Logo;
