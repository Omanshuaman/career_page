import Next from "../assests/next.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Openings = () => {
  const [activeTab, setActiveTab] = useState("ENGINEERING");
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);

  let navigate = useNavigate();

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  const nextPage = (id) => {
    navigate(`/${id}`, { state: { filteredApplicants } });
  };

  useEffect(() => {
    async function fetchJobPostings() {
      const response = await fetch(
        "https://nt4k05fl8k.execute-api.us-east-1.amazonaws.com/prod/jobposts"
      );
      const data = await response.json();
      console.log(data);

      setApplicants(data.applicants);

      const filtered = data.applicants.filter(
        (applicant) => applicant.department === "engineering"
      );
      setFilteredApplicants(filtered);
    }

    fetchJobPostings();
  }, []);

  return (
    <div className="openings-container">
      <div className="title">
        <div className="come-join-us">Come Join Us</div>
        <div className="career-openings">Career Openings</div>
        <div className="career-description">
          We’re always looking for creative, talented self-starters to join the
          JMC family. Check out our open roles below and fill out an
          application.
        </div>
      </div>

      <div className="tabs-container">
        <div className="tab">
          <button
            className={
              activeTab === "HT & ADMIN" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("HT & ADMIN")}
          >
            HT & ADMIN
          </button>
          <button
            className={
              activeTab === "ENGINEERING" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("ENGINEERING")}
          >
            ENGINEERING
          </button>
          <button
            className={activeTab === "SUPPORT" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("SUPPORT")}
          >
            SUPPORT
          </button>
          <button
            className={activeTab === "DESIGN" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("DESIGN")}
          >
            DESIGN
          </button>
          <button
            className={
              activeTab === "DIGITAL MARKETING" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("DIGITAL MARKETING")}
          >
            DIGITAL MARKETING
          </button>
        </div>
        <div
          id="HT & ADMIN"
          className={
            activeTab === "HT & ADMIN" ? "tabcontent" : "tabcontent hidden"
          }
        >
          <h3>ht & admin</h3>
        </div>

        <div
          id="ENGINEERING"
          className={
            activeTab === "ENGINEERING" ? "tabcontent" : "tabcontent hidden"
          }
        >
          {filteredApplicants.map((applicant) => {
            return (
              <div
                className="job-container"
                onClick={() => nextPage(applicant.job_id)}
              >
                <div className="job-name">{applicant.role}</div>
                <div className="experience">
                  <div className="experience-text">Experience</div>
                  <div className="experience-year">{applicant.experience}</div>
                </div>
                <div className="deadline">
                  <div className="deadline-text">Deadline</div>
                  <div className="deadline-year">{applicant.deadline}</div>
                </div>
                <div className="next-vector">
                  <img src={Next} alt="Your SVG" className="next-svg" />
                </div>
              </div>
            );
          })}
        </div>

        <div
          id="SUPPORT"
          className={
            activeTab === "SUPPORT" ? "tabcontent" : "tabcontent hidden"
          }
        >
          <h3>support</h3>
        </div>

        <div
          id="DESIGN"
          className={
            activeTab === "DESIGN" ? "tabcontent" : "tabcontent hidden"
          }
        >
          <h3>design</h3>
        </div>
        <div
          id="DIGITAL MARKETING"
          className={
            activeTab === "DIGITAL MARKETING"
              ? "tabcontent"
              : "tabcontent hidden"
          }
        >
          <h3>digital marketing</h3>
        </div>
      </div>
    </div>
  );
};

export default Openings;
