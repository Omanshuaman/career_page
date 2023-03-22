import React, { useState } from "react";
import Next from "../assests/next.svg";
import { useNavigate } from "react-router-dom";

const Openings = () => {
  const [activeTab, setActiveTab] = useState("Paris");
  let navigate = useNavigate();

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  const nextPage = () => {
    navigate("/jobDescription");
  };

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
            className={activeTab === "London" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("London")}
          >
            HT & ADMIN
          </button>
          <button
            className={activeTab === "Paris" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Paris")}
          >
            ENGINEERING
          </button>
          <button
            className={activeTab === "Tokyo" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Tokyo")}
          >
            SUPPORT
          </button>
          <button
            className={activeTab === "Delhi" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Delhi")}
          >
            DESIGN
          </button>
          <button
            className={activeTab === "Mumbai" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Mumbai")}
          >
            DIGITAL MARKETING
          </button>
        </div>
        <div
          id="London"
          className={
            activeTab === "London" ? "tabcontent" : "tabcontent hidden"
          }
        >
          <h3>ht & admin</h3>
        </div>

        <div
          id="Paris"
          className={activeTab === "Paris" ? "tabcontent" : "tabcontent hidden"}
        >
          <div className="job-container" onClick={() => nextPage()}>
            <div className="job-name">Wordpress Developer</div>
            <div className="experience">
              <div className="experience-text">Experience</div>
              <div className="experience-year">2 Years</div>
            </div>
            <div className="deadline">
              <div className="deadline-text">Deadline</div>

              <div className="deadline-year">2021-05-08</div>
            </div>
            <div className="next-vector">
              <img src={Next} alt="Your SVG" className="next-svg" />
            </div>
          </div>
          <div className="job-container">
            <div className="job-name">Javascript</div>
            <div className="experience">
              <div className="experience-text">Experience</div>
              <div className="experience-year">1 Year</div>
            </div>
            <div className="deadline">
              <div className="deadline-text">Deadline</div>

              <div className="deadline-year">2021-05-08</div>
            </div>
            <div className="next-vector">
              <img src={Next} alt="Your SVG" className="next-svg" />
            </div>
          </div>
        </div>

        <div
          id="Tokyo"
          className={activeTab === "Tokyo" ? "tabcontent" : "tabcontent hidden"}
        >
          <h3>support</h3>
        </div>

        <div
          id="Delhi"
          className={activeTab === "Delhi" ? "tabcontent" : "tabcontent hidden"}
        >
          <h3>design</h3>
        </div>
        <div
          id="Mumbai"
          className={
            activeTab === "Mumbai" ? "tabcontent" : "tabcontent hidden"
          }
        >
          <h3>digital marketing</h3>
        </div>
      </div>
    </div>
  );
};

export default Openings;
