import React, { useState } from "react";
import Image from "../assests/Rectangle.svg";
import Ellipse from "../assests/ellipse.svg";
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

const JobDetail = ({ filteredApplicants }) => {
  console.log(filteredApplicants);
  // Use the filteredApplicants prop here
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="jobdetail">
      <div className="jobdetail-main">
        <div className="image">
          <img src={Image} alt="Your SVG" className="image-svg"></img>
        </div>
        <div className="row-detail">
          <div className="job-column-desc">
            <div className="headline">PRODUCT DESIGNER</div>
            <div className="headline-small">Who Are We Looking For</div>
            <div className="detail-row">
              <div className="ellipse">
                <img src={Ellipse} alt="Your SVG" className="ellipse-svg"></img>
              </div>
              <div className="description-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div className="headline-small">What You Will Be Doing</div>
            <div className="detail-row">
              <div className="ellipse">
                <img src={Ellipse} alt="Your SVG" className="ellipse-svg"></img>
              </div>
              <div className="description-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div className="headline-small">
              Bonus Points for Familiarity with
            </div>
            <div className="detail-row">
              <div className="ellipse">
                <img src={Ellipse} alt="Your SVG" className="ellipse-svg"></img>
              </div>
              <div className="description-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div className="headline-small">Educational Requirement</div>
            <div className="description-small">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going
            </div>
            <div className="headline-small">Salary</div>
            <div className="detail-row">
              <div className="ellipse">
                <img src={Ellipse} alt="Your SVG" className="ellipse-svg"></img>
              </div>
              <div className="description-small">
                Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)
              </div>
            </div>

            <div className="headline-small">Working Days</div>
            <div className="detail-row">
              <div className="ellipse">
                <img src={Ellipse} alt="Your SVG" className="ellipse-svg"></img>
              </div>
              <div className="description-small">Weekly: 5 days.</div>
            </div>

            <div className="headline-small">Perks & Benefits You’ll Get </div>
            <div className="detail-row">
              <div className="ellipse">
                <img src={Ellipse} alt="Your SVG" className="ellipse-svg"></img>
              </div>
              <div className="description-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                      Shouth Breeze Center,Banani11
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
                    <div className="location-text">Full Time</div>
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
                    <div className="location-text">posted 1 month ago</div>
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
                    <div className="location-text">Experience: 1-3 year</div>
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
                    <div className="location-text">9 AM - 6 PM</div>
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
                    <div className="location-text">Weekly:5days</div>
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
                    <div className="location-text">No.of Vacancy:3</div>
                  </div>
                </div>
              </div>{" "}
              <div className="job-summary">
                <div className="viewall">View All Jobs</div>
              </div>
            </div>{" "}
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
        <Modal modal={modal} setModal={setModal} openModal={openModal} />
      )}
    </div>
  );
};

export default JobDetail;
