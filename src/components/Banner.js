import React, { useEffect, useState } from "react";

import Modal from "./Modal";

const Banner = ({ filteredApplicants }) => {
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
    <div className="banner">
      {filteredApplicants.map((applicant) => (
        <div className="banner-column" key={applicant.id}>
          <div className="banner-text1">{applicant.role}</div>
          <div className="banner-text2">
            Job Type: {applicant.job_type} | No of Vacancies:{" "}
            {applicant.number_of_vacancy}
          </div>
          <button className="apply-button" onClick={() => openModal()}>
            Apply Now
          </button>
        </div>
      ))}
      {modal && (
        <Modal modal={modal} setModal={setModal} openModal={openModal} />
      )}
    </div>
  );
};

export default Banner;
