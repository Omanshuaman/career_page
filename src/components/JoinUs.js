import React from "react";
import Border from "../assests/Border.png";

const JoinUs = () => {
  return (
    <div className="joinus">
      <img src={Border} alt="Your SVG" className="border-png"></img>
      <div className="background-color"></div>
      <div className="joinus-text">JOIN US</div>
      <div className="join-button">
        <div className="join-team">
          <div className="join-bg">
            <div className="join-text">Join the Team</div>
          </div>
        </div>
        <div className="culture">
          <div className="culture-text">Culture</div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
