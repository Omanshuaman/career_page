import React from "react";
import Banner from "../components/Banner";
import JobDetail from "../components/JobDetail";
import { useLocation } from "react-router-dom";

const JobsDesc = () => {
  const location = useLocation();
  const { filteredApplicants } = location.state;
  console.log(filteredApplicants);
  return (
    <div>
      <Banner filteredApplicants={filteredApplicants} />
      <JobDetail filteredApplicants={filteredApplicants} />
    </div>
  );
};

export default JobsDesc;
