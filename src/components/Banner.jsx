import React from "react";

function Banner() {
  return (
    <div id="banner-container">
      <img
        id="banner"
        src="https://image.tmdb.org/t/p/original//9Piw6Zju39bn3enIDLZzPfjMTBR.jpg"
        alt="banner"
      />
      <div id="details-container">
        <h1 id="banner-title"></h1>
        <div id="button-container">
          <button id="play-button">
            <img
              style="width: 0.8rem; height: 0.8rem;"
              src="/assests/play.png"
            />
            <span>Play</span>
          </button>
          <button id="more-info">
            <img id="info-icon" src="/assests/info.png" />
            <span>More Information</span>
          </button>
        </div>
      </div>
      <div id="empty"></div>
    </div>
  );
}

export default Banner;
