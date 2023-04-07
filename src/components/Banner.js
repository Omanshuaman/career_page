import React, { useEffect, useState } from "react";

import Modal from "./Modal";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Banner = ({ filteredApplicants, showSnackbar }) => {
  const [modal, setModal] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const date = new Date();
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear().toString()}`;
  const date1 = formattedDate;
  const date2 = filteredApplicants.deadline;

  const formattedDate1 = date1.split("-").reverse().join("-");
  const formattedDate2 = date2.split("-").reverse().join("-");
  useEffect(() => {
    if (new Date(formattedDate1) > new Date(formattedDate2)) {
      setdisabled(true);
      console.log("first");
    }
  }, []);
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
        <div className="banner-text1">{filteredApplicants.role}</div>
        <div className="banner-text2">
          Job Type: {filteredApplicants.job_type} | No of Vacancies :
          {filteredApplicants.number_of_vacancy}
        </div>
        <Popup
          trigger={
            <button className="apply-button" disabled={disabled}>
              Apply Now
            </button>
          }
        >
          {(close) => (
            <div>
              <Modal
                modal={modal}
                setModal={setModal}
                openModal={openModal}
                close={close}
                jobId={filteredApplicants.id}
                showSnackbar={showSnackbar}
              />
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Banner;
