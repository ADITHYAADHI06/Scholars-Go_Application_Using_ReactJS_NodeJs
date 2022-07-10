import React from "react";

const Contactitem = ({ title, text, img }) => {
  return (
    <>
      <div className="col-12 mb-4 mb-md-0 col-md-4 ">
        <div className="contact-info_item  d-flex  align-items-center">
          <figure className="mt-3">
            <img src={img} className="contact-info_item_icon" alt="phone" />
          </figure>
          <div className="contact-info-content ms-3 ms-md-4 d-flex  flex-column justify-content-center">
            <div className="conact-info-title">{title}</div>
            <div className="conact-info-text">{text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactitem;
