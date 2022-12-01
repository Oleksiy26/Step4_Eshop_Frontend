import React from 'react';

const TitleBig = ({ subtitle }) => {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h2 className="fs-1">{subtitle}</h2>
        </div>
      </div>
    </>
  );
};

export default TitleBig;
