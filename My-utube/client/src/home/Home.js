import React from "react";
import Hero from "./hero";
import Form from "./form";

import LatestCourses from "./latestCourses";
import Guid from "./guid";
import Utube from "./utube";
import Me from "./me";

import Footer from "./footer";

const Home = () => {
  return (
    <React.Fragment>
      <main style={{ color: "gray" }}>
        <div className="container">
          <div className="heroContainer">
            <Hero />
          </div>
          <Form />

          <LatestCourses />
          <Guid />
          <Me />
          <Utube />
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
