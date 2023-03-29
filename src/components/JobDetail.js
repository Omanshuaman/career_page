import React, { useState } from "react";
import Image from "../assests/Rectangle.svg";
import Location from "../assests/location.svg";
import JobType from "../assests/jobType.svg";
import DatePosted from "../assests/datePosted.svg";
import Experience from "../assests/experience.svg";
import WorkingHours from "../assests/workingHours.svg";
import WorkingDays from "../assests/workingDays.svg";
import Vacancy from "../assests/vacancy.svg";
import Instagram from "../assests/Instagram.svg";
import Facebook from "../assests/Facebook.svg";
import Twitter from "../assests/Twiter.svg";
import Linkedin from "../assests/Linkedin.svg";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const JobDetail = ({ filteredApplicants }) => {
  console.log(filteredApplicants);
  // Use the filteredApplicants prop here
  const [modal, setModal] = useState(false);
  let navigate = useNavigate();

  const openModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const nextPage = () => {
    navigate("/");
  };
  return (
    <div className="jobdetail">
      <div className="jobdetail-main">
        <div className="image">
          <img src={Image} alt="Your SVG" className="image-svg"></img>
        </div>
        <div className="row-detail">
          <div className="job-column-desc">
            <div className="headline">{filteredApplicants[0].role}</div>
            <div className="headline-small">Who Are We Looking For</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants[0].what_we_are_looking_for
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
                {filteredApplicants[0].what_you_will_be_doing
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
                {filteredApplicants[0].bonus_point.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Educational Requirement</div>
            <div className="description-small">
              {filteredApplicants[0].bonus_point.split("*").map((item) => (
                <p key={item}>
                  <span className="bullet-icon">&bull;</span>{" "}
                  {"B.tech , M.tech"}
                </p>
              ))}
            </div>
            <div className="headline-small">Salary</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants[0].salary.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Working Days</div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants[0].working_days.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span> {item.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="headline-small">Perks & Benefits You’ll Get </div>
            <div className="detail-row">
              <div className="description-small">
                {filteredApplicants[0].working_days.split("*").map((item) => (
                  <p key={item}>
                    <span className="bullet-icon">&bull;</span>{" "}
                    {"Health insurance, Informal dress code"}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="side-apply">
            <div className="apply-detail">
              <button className="apply-button" onClick={() => openModal()}>
                Apply Now
              </button>
              <div className="job-summary">
                <div className="job-summarytext">Job Summary</div>
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={Location}
                      alt="Your SVG"
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Location</div>
                    <div className="location-text">
                      {filteredApplicants[0].location}
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
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Job Type</div>
                    <div className="location-text">
                      {filteredApplicants[0].job_type}
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
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Date posted</div>
                    <div className="location-text">
                      {filteredApplicants[0].job_post_date}
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
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Experience</div>
                    <div className="location-text">
                      {filteredApplicants[0].experience}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={WorkingHours}
                      alt="Your SVG"
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Working Hours</div>
                    <div className="location-text">
                      {filteredApplicants[0].working_hour}
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-summary">
                <div className="job-row">
                  <div className="vector-location">
                    <img
                      src={WorkingDays}
                      alt="Your SVG"
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Working Days</div>
                    <div className="location-text">
                      {filteredApplicants[0].working_days}
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
                      className="location-svg"
                    ></img>
                  </div>
                  <div className="location-text">
                    <div className="location-blur">Vacancy</div>
                    <div className="location-text">
                      {filteredApplicants[0].number_of_vacancy}
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
              <img src={Facebook} alt="Your SVG" className="social-svg"></img>
              <img src={Twitter} alt="Your SVG" className="social-svg"></img>
              <img src={Linkedin} alt="Your SVG" className="social-svg"></img>
              <img src={Instagram} alt="Your SVG" className="social-svg"></img>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          openModal={openModal}
          jobId={filteredApplicants[0].id}
        />
      )}
    </div>
  );
};

export default JobDetail;
