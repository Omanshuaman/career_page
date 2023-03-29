import Next from "../assests/next.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Openings = () => {
  const [activeTab, setActiveTab] = useState("ENGINEERING");
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [filteredApplicants1, setFilteredApplicants1] = useState([]);
  const [filteredApplicants2, setFilteredApplicants2] = useState([]);
  const [filteredApplicants3, setFilteredApplicants3] = useState([]);
  const [filteredApplicants4, setFilteredApplicants4] = useState([]);
  const [filteredApplicants5, setFilteredApplicants5] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  const nextPage = (id, jobdesc) => {
    navigate(`/${id}`, { state: { jobdesc } });
    console.log(jobdesc);
  };
  useEffect(() => {
    const fetchJobPostings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://nt4k05fl8k.execute-api.us-east-1.amazonaws.com/prod/jobposts"
        );
        const data = await response.json();
        console.log(data);
        setApplicants(data.applicants);
        const filtered1 = data.applicants.filter(
          (applicant) => applicant.department === "HT & Admin"
        );
        setFilteredApplicants1(filtered1);
        const filtered = data.applicants.filter(
          (applicant) => applicant.department === "Engineering"
        );
        setFilteredApplicants(filtered);

        const filtered2 = data.applicants.filter(
          (applicant) => applicant.department === "Support"
        );
        setFilteredApplicants2(filtered2);
        const filtered5 = data.applicants.filter(
          (applicant) => applicant.department === "Sales"
        );
        setFilteredApplicants5(filtered5);
        const filtered4 = data.applicants.filter(
          (applicant) => applicant.department === "Design"
        );
        setFilteredApplicants4(filtered4);
        const filtered3 = data.applicants.filter(
          (applicant) => applicant.department === "Digital Marketing"
        );
        setFilteredApplicants3(filtered3);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

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
            HT & ADMIN<sup>{filteredApplicants1.length}</sup>
          </button>
          <button
            className={
              activeTab === "ENGINEERING" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("ENGINEERING")}
          >
            ENGINEERING<sup>{filteredApplicants.length}</sup>
          </button>
          <button
            className={activeTab === "SUPPORT" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("SUPPORT")}
          >
            SUPPORT<sup>{filteredApplicants2.length}</sup>
          </button>
          <button
            className={activeTab === "SALES" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("SALES")}
          >
            SALES<sup>{filteredApplicants5.length}</sup>
          </button>
          <button
            className={activeTab === "DESIGN" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("DESIGN")}
          >
            DESIGN<sup>{filteredApplicants4.length}</sup>
          </button>
          <button
            className={
              activeTab === "DIGITAL MARKETING" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("DIGITAL MARKETING")}
          >
            DIGITAL MARKETING<sup>{filteredApplicants3.length}</sup>
          </button>
        </div>
        <div
          id="HT & ADMIN"
          className={
            activeTab === "HT & ADMIN" ? "tabcontent" : "tabcontent hidden"
          }
        >
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants1.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}
                >
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
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
            })
          )}
        </div>

        <div
          id="ENGINEERING"
          className={
            activeTab === "ENGINEERING" ? "tabcontent" : "tabcontent hidden"
          }
        >
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}
                >
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
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
            })
          )}
        </div>

        <div
          id="SUPPORT"
          className={
            activeTab === "SUPPORT" ? "tabcontent" : "tabcontent hidden"
          }
        >
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants2.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}
                >
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
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
            })
          )}
        </div>
        <div
          id="SALES"
          className={activeTab === "SALES" ? "tabcontent" : "tabcontent hidden"}
        >
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants5.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}
                >
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
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
            })
          )}
        </div>
        <div
          id="DESIGN"
          className={
            activeTab === "DESIGN" ? "tabcontent" : "tabcontent hidden"
          }
        >
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants4.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}
                >
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
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
            })
          )}
        </div>
        <div
          id="DIGITAL MARKETING"
          className={
            activeTab === "DIGITAL MARKETING"
              ? "tabcontent"
              : "tabcontent hidden"
          }
        >
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants3.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}
                >
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
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
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Openings;
