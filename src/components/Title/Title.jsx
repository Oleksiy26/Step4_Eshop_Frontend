import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div class="row mt-5">
        <div class="col text-uppercase secondaryColor">
          <h5>{title}</h5>
        </div>
      </div>
      <div class="row my-5">
        <div class="col">
          <h2 className="fs-1">{subtitle}</h2>
        </div>
      </div>
    </>
  );
};

export default Title;