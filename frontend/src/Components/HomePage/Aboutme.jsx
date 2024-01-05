import React from "react";
import logo from "../../assets/logoNOBG.png";

function Aboutme() {
  return (
    <div>
      <div className="Aboutme">
        <div className="part1">
          <img
            src={logo}
            alt="Yassine Castro aka Yassinos aka DMFGenius aka Yassinos-Coder aka zeus"
          />
          <div>
            <p>Yassine Castro AKA Yassinos</p>
            <a
              href="https://www.linkedin.com/in/yassine-castro-6a6ba7237/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Yassinos-coder"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/yassinos.js/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.twitch.tv/yassinos08"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-twitch"></i>
            </a>
            <a
              href="https://www.twitch.tv/yassinos08"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>{" "}
            </a>
          </div>
        </div>
        <div className="part2">
          <h1>About Me</h1>
          <p>
            Hello! I{"'"}m Yassine Castro, a passionate geek deeply immersed in
            the tech world. As a proficient Full Stack Developer, I excel in
            MERN and React-Native, constantly pushing the boundaries of what
            {"'"}s possible. My dedication to hard work and responsibility is
            matched only by my commitment to continual improvement. I thrive on
            adventure, both in coding and life, always seeking new challenges
            and innovative solutions. Let{"'"}s embark on a journey where
            technology meets creativity, and ideas turn into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
