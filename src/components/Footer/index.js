import React from "react";
import WhitePollIcon from "../../assets/WhitePollIcon.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="containter">
        <div className="flex">
          <img src={WhitePollIcon} alt="PollIcon" />
          <h4 className="pollHead">Movie</h4>
        </div>
        <p>© 2023 Movie, Inc. All Rights Reserved.</p>
        <div className="policyDiv">
          <p>Terms of policy | Official community policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
