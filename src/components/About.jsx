import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      {/* <div className="aboutTitle">
        <h3>About me</h3>
        <div className="trait"></div>
      </div> */}

      <div className="aboutContent">
        <div className="photo"></div>
        <div className="detail">
          <h3>About me</h3>
          <div className="trait"></div>
          <div className="detailText">
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam accusamus consequatur beatae nobis reiciendis deleniti
              debitis eos. Eaque nulla iusto quidem aliquam sequi est quisquam,
              odio officiis cumque ab laborum?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis aliquid quam ex cumque velit. Odit totam mollitia
              quos molestiae, eius tempora minus odio alias quasi quo porro
              eligendi temporibus cupiditate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
