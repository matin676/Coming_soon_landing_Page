import React from "react";

export default function Socials() {
  return (
    <>
      <div className="social">
        <a href="/">
          <img
            src="images/facebook_f_96px.png"
            className="icon"
            alt="facebook"
          />
        </a>
        <a href="/">
          <img src="images/Twitter_96px.png" className="icon" alt="twitter" />
        </a>
        <a href="/">
          <img
            src="images/instagram_96px.png"
            className="icon"
            alt="instagram"
          />
        </a>
      </div>

      <p className="attribution">&copy; Copyright Ping. All rights reserved.</p>
    </>
  );
}
