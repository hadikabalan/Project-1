import React from "react";
import xbox from "../Images/xbox.svg";

export default function Promo() {
  return (
    <div className="promo-area">
      <div className="promo-area-text">
        <h1>Built for Gamers</h1>
        <h3>Introducing Xbox series x. The Most powerful gaming console.</h3>
      </div>
      <img src={xbox} alt="xbox" id="xbox"></img>
    </div>
  );
}
