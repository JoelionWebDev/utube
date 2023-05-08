import React from "react";
import img from "../asset/bg44.jpg";

const utube = () => {
  return (
    <div className="channelBg">
      <div className="channelGrid">
        <div className="image">
          <img src={img} alt="image" />
        </div>
        <div className="youtube">
          <h2>Joelion Media on YouTube</h2>
          <div className="utext">
            <p>
              Our YouTube channel has a lot of free tutorials and crash courses
              for you
            </p>
            <button className="ubtn1">
              <img
                src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                alt=""
              />
            </button>
            <div className="ubtn2">
              <button className="visit">visit channel</button>
              <button className="guide">content guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default utube;
