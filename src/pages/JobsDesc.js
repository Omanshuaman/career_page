import React, { useState } from "react";
import Banner from "../components/Banner";
import JobDetail from "../components/JobDetail";
import { useLocation } from "react-router-dom";

const JobsDesc = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showSnackbar = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };
  const location = useLocation();
  const filteredApplicants = location.state.state.jobdesc;
  console.log(filteredApplicants);
  return (
    <>
      <div>
        <Banner
          filteredApplicants={filteredApplicants}
          showSnackbar={showSnackbar}
        />
        <JobDetail
          filteredApplicants={filteredApplicants}
          showSnackbar={showSnackbar}
        />
      </div>
      <div id="snackbar">Uploaded Successfully..</div>
    </>
  );
};

export default JobsDesc;
