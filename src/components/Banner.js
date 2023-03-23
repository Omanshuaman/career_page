import React, { useState } from "react";

const Banner = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [resume, setResume] = useState(null);

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
      <di className="banner-column">
        <div className="banner-text1">Product Designer</div>
        <div className="banner-text2">
          Job Type: Full Time No of Vacancies:02
        </div>
        <button className="apply-button" onClick={() => openModal()}>
          Apply Now
        </button>
      </di>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <form
              class="card-form"
              enctype="multipart/form-data" /* add this attribute to enable file upload */

              //       onSubmit={handleSubmit}
            >
              <div className="name">Name</div>
              <input
                type="text"
                className="name-input"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <div className="name">Email ID</div>
              <input
                type="email"
                className="name-input"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="name">Contact Number:</div>
              <input
                type="number"
                className="name-input"
                required
                onChange={(e) => setContact(e.target.value)}
              />
              <div className="name">Upload Resume/CV:</div>
              <input
                type="file"
                name="resume"
                className="name-input"
                accept=".pdf" /* specify accepted file type */
                required
                onChange={(e) =>
                  setResume(e.target.files[0])
                } /* add onChange event handler to capture file */
              />
              <div className="action">
                <button className="action-button" type="submit">
                  Upload
                </button>
              </div>
            </form>

            <button className="close-modal" onClick={openModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
