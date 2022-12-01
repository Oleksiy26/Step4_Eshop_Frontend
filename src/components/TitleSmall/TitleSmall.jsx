import React from 'react';

const TitleSmall = ({ title }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col text-uppercase secondaryColor">
          <h5>{title}</h5>
        </div>
      </div>
    </>
  );
};

export default TitleSmall;
