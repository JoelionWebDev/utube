import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <React.Fragment>
      <main className="hero">
        <div className="welcomNote">
          <h4 className="hero1">JoeTech Media</h4>

          <div className="button">
            <a target="_blank" href="https://www.youtube.com/@joetechstudio/">
              START LEARNING TODAY
            </a>
          </div>
        </div>

        <div className="social-links">
          <h3 style={{ textAlign: " center" }}>My profile</h3>
          <div className="flex">
            <h3>
              <a className="iconn" href="https://wa.me/qr/PNAHWNMWMZ2WK1">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </h3>
            <h3>
              {" "}
              <a
                className="iconn"
                href="https://www.youtube.com/@joetechstudio"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </h3>
            <h3>
              {" "}
              <a className="iconn" href="https://www.instagram.com/joeligono/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </h3>
            <h3>
              <a className="iconn" href="https://wa.link/859wj7">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </h3>
            <h3>
              {" "}
              <a className="iconn" href="">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </h3>
            <h3>
              {" "}
              <a
                className="iconn"
                href="https://www.linkedin.com/in/igono-joel-88b680185"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </h3>
            <h3>
              {" "}
              <a className="iconn" href="https://twitter.com/JoelionXpress">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </h3>
          </div>
          <p style={{ color: "white" }}>igonojoel1010@gmail.com</p>
          <h5>07051804515/09058892149</h5>
        </div>

        <div className="hero-icons">
          <div className="icon">
            <h1>
              <i className="fa-solid fa-gears"></i>
            </h1>
            <h1>3</h1>
            <h5>Years of Experience</h5>
          </div>
          <div className="icon">
            <h1>
              <i className="fa-solid fa-graduation-cap"></i>
            </h1>
            <h1>20+</h1>
            <h5>Course Students</h5>
          </div>
          <div className="icon">
            <h1>
              <i className="fa-solid fa-play"></i>
            </h1>
            <h1>....+</h1>
            <h5>Subscribers number constantly growing</h5>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Hero;
