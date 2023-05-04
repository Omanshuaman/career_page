import React, { useState, useEffect } from "react";
import Image from "../assests/Rectangle.svg";
import Location from "../assests/location.svg";
import JobType from "../assests/jobType.svg";
import DatePosted from "../assests/datePosted.svg";
import Experience from "../assests/experience.svg";
import Vacancy from "../assests/vacancy.svg";
import Instagram from "../assests/Instagram.svg";
import Facebook from "../assests/Facebook.svg";
import Twitter from "../assests/Twiter.svg";
import Linkedin from "../assests/Linkedin.svg";
import Id from "../assests/id.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";

const JobDetail = ({ filteredApplicants, showSnackbar }) => {
  // Use the filteredApplicants prop here
  const [modal, setModal] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [deadline, setDeadline] = useState("");

  const history = useHistory();

  useEffect(() => {
    setDeadline(filteredApplicants.deadline);
    const timestamp = filteredApplicants.deadline; // replace with your timestamp
    const now = Date.now() / 1000; // get current timestamp in seconds
    const isLessThanToday = timestamp < now;
    if (isLessThanToday) {
      console.log("This timestamp is less than today's timestamp.");
      console.log(timestamp);
      setdisabled(true);
    } else {
      console.log(
        "This timestamp is greater than or equal to today's timestamp."
      );
    }
  }, [filteredApplicants]);

  const openModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const nextPage = () => {
    history.push("/");
  };
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer.php?u=${window.location.href}`
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/share?url=${window.location.href}&text=Job Posting:`
    );
  };

  const shareOnLinkedin = () => {
    const articleUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("LinkedIn Developer Network");
    const summary = encodeURIComponent("My favorite developer program");
    const source = encodeURIComponent("LinkedIn");

    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}&title=${title}&summary=${summary}&source=${source}`
    );
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/?url=${window.location.href}`);
  };
  return (
    <div className="jobdetail">
      <div className="jobdetail-main">
        <div className="image">
          <img src={Image} alt="Your SVG" className="image-svg"></img>
        </div>
        <div className="row-detail">
          <div className="job-column-desc">
            <div className="headline">{filteredApplicants.role}</div>
            <div className="headline-small">Who Are We Looking For</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants.what_we_are_looking_for
                  .split("*")
                  .map((item) => (
                    <p key={item}>
                      <span className="bullet-icon">&bull;</span> {item.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="headline-small">What You Will Be Doing</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants.what_you_will_be_doing
                  .split("*")
                  .map((item) => (
                    <p key={item}>
                      <span className="bullet-icon">&bull;</span> {item.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="headline-small">
              Bonus Points for Familiarity with
            </div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants.bonus_point.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Educational Requirement</div>
            <div className="description-small">
              {filteredApplicants.education_requirement
                .split("*")
                .map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
            </div>
            <div className="headline-small">Salary</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants.salary.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Perks & Benefits You’ll Get </div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants.perks_benefits.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="side-apply">
            <div className="apply-detail">
              <button
                className="apply-button"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalLong"
                disabled={disabled}>
                Apply Now
              </button>

              <div className="job-summary">
                <div className="job-summarytext">Job Summary</div>

                <div className="job-row">
                  <div className="vector-location">
                    <img src={Id} alt="Your SVG" className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Job Id</div>
                    <div className="location-text">{filteredApplicants.id}</div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Location}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Location</div>
                    <div className="location-text">
                      {filteredApplicants.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={JobType}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Job Type</div>
                    <div className="location-text">
                      {filteredApplicants.job_type}
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={DatePosted}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Date posted</div>
                    <div className="location-text">
                      {new Date(
                        filteredApplicants.job_post_date * 1000
                      ).toLocaleDateString("en-GB")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Experience}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Experience</div>
                    <div className="location-text">
                      {filteredApplicants.experience}
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Vacancy}
                      alt="Your SVG"
                      className="location-svg"></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Vacancy</div>
                    <div className="location-text">
                      {filteredApplicants.number_of_vacancy}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="viewall" onClick={nextPage}>
                  View All Jobs
                </div>
              </div>
            </div>
            <div className="share-this">Share this:</div>
            <div className="share-row">
              <img
                src={Facebook}
                alt="Facebook"
                className="social-svg"
                onClick={shareOnFacebook}></img>
              <img
                src={Twitter}
                alt="Twitter"
                className="social-svg"
                onClick={shareOnTwitter}></img>
              <img
                src={Linkedin}
                alt="Linkedin"
                className="social-svg"
                onClick={shareOnLinkedin}></img>
              <img
                src={Instagram}
                alt="Instagram"
                className="social-svg"
                onClick={shareOnInstagram}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
