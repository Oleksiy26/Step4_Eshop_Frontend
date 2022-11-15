import React from "react";
import Title from "../../components/HomePage/Title";

const AboutUs = () => {
  return (
    <section className="container py-5">
      <Title title="About Us" subtitle="Who we are" />
      <div class="row d-flex flex-column flex-md-row">
        <div class="col d-flex flex-column gap-3 justify-content-between">
          <p className="">
            We are young Ukrainian brand from Kyiv. We designs exclusive
            handmade lingerie, swimsuits and homeweare for women.
          </p>
          <p className="">
            We use only the best and high-quolity materials for our lingerie.
          </p>
          <p className="">
            This campaign carries a valuable message of the importance of
            escaping unwanted captivity to achieve the highest good of all.
          </p>
          <div class="d-flex gap-4">
            <img
              class="img-fluid overflow-auto"
              src="./images/home/about1.png"
              alt="about1"
            />
            <img
              class="img-fluid overflow-auto"
              src="./images/home/about2.png"
              alt="about2"
            />
          </div>
        </div>
        <div class="col d-flex flex-column  justify-content-between">
          <p className="my-5 m-md-0">
            This campaign carries a valuable message of the importance of
            escaping unwanted captivity to achieve the highest good of all.
            Therefore, the understanding of the concept of this campaign is a
            major point in the brand's intentions.
          </p>

          <img class="img-fluid" src="./images/home/about3.png" alt="about3" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
