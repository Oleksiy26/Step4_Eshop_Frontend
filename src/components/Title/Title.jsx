import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col text-uppercase secondaryColor">
          <h5>{title}</h5>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h2 className="fs-1">{subtitle}</h2>
        </div>
      </div>
    </>
  );
};

export default Title;
