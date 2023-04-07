import React, { useEffect, useState, useRef } from "react";
import AWS from "aws-sdk";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Banner = ({ filteredApplicants, showSnackbar }) => {
  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
    signatureVersion: "v4",
  });
  const s3 = new AWS.S3();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [resume, setResume] = useState(null);
  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const now = new Date();
  const appliedDate = now.toISOString();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10) {
      setContact(value);
      setContactError("");
    } else {
      setContactError("* Contact number should be 10 or less than 10");
    }
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const params = {
      Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      Key: `${Date.now()}-${resume.name}`,
      Body: resume,
    };

    try {
      const data = await s3.upload(params).promise();
      const newApplicant = {
        name: name,
        emailid: email,
        contactNumber: contact,
        resumeUrl: data.Location,
        applied_date: appliedDate,
        job_id: "jobId",
      };

      const res = await axios.post(
        "https://3pg8ch1ir2.execute-api.us-east-1.amazonaws.com/prod/applicant",
        newApplicant
      );

      toast("Uploaded Successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const [disabled, setdisabled] = useState(false);
  const date = new Date();
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear().toString()}`;
  const date1 = formattedDate;
  const date2 = filteredApplicants.deadline;
  const myInputRef = useRef(null);

  useEffect(() => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  }, []);
  const formattedDate1 = date1.split("-").reverse().join("-");
  const formattedDate2 = date2.split("-").reverse().join("-");
  useEffect(() => {
    if (new Date(formattedDate1) > new Date(formattedDate2)) {
      setdisabled(true);
      console.log("first");
    }
  }, []);

  return (
    <div className="banner">
      <div className="banner-column">
        <div className="banner-text1">{filteredApplicants.role}</div>
        <div className="banner-text2">
          Job Type: {filteredApplicants.job_type} | No of Vacancies :
          {filteredApplicants.number_of_vacancy}
        </div>
        <button
          className="apply-button"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalLong"
          disabled={disabled}
        >
          Apply Now
        </button>
      </div>
      <ToastContainer />

      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="modal-content">
                <div className="modal-padding">
                  <form
                    className="card-form"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <div className="name">Name</div>
                    <input
                      type="text"
                      className="name-input"
                      required
                      onChange={handleNameChange}
                    />
                    <div className="name">Email ID</div>
                    <input
                      type="email"
                      className="name-input"
                      required
                      onChange={handleEmailChange}
                    />
                    <div className="name">Contact Number:</div>
                    <input
                      type="number"
                      className="name-input"
                      required
                      onChange={handleContactChange}
                    />

                    {contactError && (
                      <div className="error">{contactError}</div>
                    )}
                    <div className="name">Upload Resume/CV:</div>
                    <input
                      type="file"
                      name="resume"
                      className="name-input"
                      accept=".pdf"
                      required
                      onChange={handleResumeChange}
                    />
                    {isLoading && <div className="loader"></div>}
                    <button
                      className="action-button"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Uploading..." : "Upload"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
