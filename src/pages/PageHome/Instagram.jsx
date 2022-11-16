import React from "react";
import Title from "../../components/HomePage/Title";

const Instagram = () => {
  return (
    <section className="container py-5">
      <Title title="Follow us" subtitle="Our Instagram" />
      <div className="row text-end">
        <div className="col my-4">
          <h3 className="text-uppercase fs-3">@femlingerie</h3>
        </div>
      </div>
      <div className="d-flex gap-4 flex-column flex-md-row">
        <img
          class="img-fluid overflow-auto flex-grow-1"
          src="./images/home/inst_img.png"
          alt=""
        />
        <div className="d-flex gap-4">
          <img
            class="img-fluid overflow-auto flex-grow-1"
            src="./images/home/inst_img-1.png"
            alt=""
          />

          <img
            class="img-fluid overflow-auto flex-grow-1"
            src="./images/home/inst_img-2.png"
            alt=""
          />
        </div>
        <img
          class="img-fluid overflow-auto flex-grow-1"
          src="./images/home/inst_img-3.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Instagram;
