import React from "react";

const Contactitem = ({ title, text, img }) => {
  return (
    <>
      <div className="col-12 col-md-4 ">
        <div className="contact-info_item  d-flex  align-items-center">
          <figure className="mt-3">
            <img className="" src={img} alt="phone" />
          </figure>
          <div className="contact-info-content ms-2 d-flex  flex-column justify-content-center">
            <div className="conact-info-title">{title}</div>
            <div className="conact-info-text">{text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactitem;
