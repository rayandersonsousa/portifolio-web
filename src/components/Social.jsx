import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/rayanderson-sousa/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/rayandersonsousa"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://twitter.com/harpe_erudon"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  )
}

export default Social;