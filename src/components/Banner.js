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
      <div className="banner-column">
        <div className="banner-text1">{filteredApplicants[0].role}</div>
        <div className="banner-text2">
          Job Type: {filteredApplicants[0].job_type} | No of Vacancies:
          {filteredApplicants[0].number_of_vacancy}
        </div>
        <button className="apply-button" onClick={() => openModal()}>
          Apply Now
        </button>
      </div>

      {modal && (
        <Modal modal={modal} setModal={setModal} openModal={openModal} />
      )}
    </div>
  );
};

export default Banner;
