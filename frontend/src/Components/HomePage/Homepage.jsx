import "./HomePage.css";
import React from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logoPerson from "../../Assets/image/logo.png";
const Homepage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="actionsButton noborder"><a href="#biography">Biography</a></div>
        <div className="actionsButton">Projects</div>
        <div className="actionsButton">Experiences</div>
        <div className="actionsButton borderRight">Certifications</div>
        <div className="socials">
          <FaGithub
            className="onHoverFAS"
            color="#333"
            onClick={() =>
              window.open("https://github.com/Yassinos-coder", "_blank")
            }
          />
          <FaLinkedin
            className="onHoverFAS"
            color="#0a66c2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/yassine-castro-6a6ba7237/",
                "_blank"
              )
            }
          />
          <RiInstagramFill
            className="onHoverFAS"
            color="#c13584"
            onClick={() =>
              window.open("https://www.instagram.com/yassinos.js/", "_blank")
            }
          />
          <div className="icon-container">
            <FaFileDownload
              onClick={() => window.open("../assets/resume.pdf", "_blank")}
            />
            <span className="hover-text">Download Resume</span>
          </div>
        </div>
      </div>
      <div className="message">
        <p>The simpliest yet effective portfolio.</p>
        <p>
          <strong>we don't use templates here😉</strong>
        </p>
      </div>
      <section id="biography" className="biography">
        <div id="logoPersonDiv">
          <img src={logoPerson} alt="" className="logoPerson" />
        </div>
        <div className="textBiography">
          <p id="p1">About Yassine Castro aka Yassinos</p>
          <p id="p2">Professional Developer & Innovator | Casablanca, Morocco</p>
          <article id="bioArticle">
            I'm Yassine Castro, a 20-year-old developer from Casablanca,
            Morocco, with a zeal for coding and a talent for innovation. My tech
            journey began at 14, diving into HTML and CSS, and since then, I've
            been on a relentless path of self-improvement and learning in the
            vast field of programming. Significant in my career was the foray
            into Lua programming and FiveM server development, where I
            co-founded and developed one of Morocco's largest gaming
            communities. This venture wasn't just a testament to my technical
            skills but also a playground for enhancing my teamwork,
            problem-solving, and leadership abilities. It instilled in me the
            values of pragmatic thinking, reverse engineering, and logical
            coding, shaping my professional ethos. Beyond my professional
            endeavors, my interests are diverse and dynamic. I have a profound
            passion for automotive mechanics, finding joy in driving cars and
            bikes, understanding their intricacies, and appreciating their
            design. This love for mechanics seamlessly ties into my other
            hobbies: beatmaking, gaming, and streaming. Each of these pursuits
            reflects my innate curiosity and my constant quest for new
            challenges and learning opportunities. My approach to life and work
            is straightforward: every problem has a solution waiting to be
            discovered, and time should be cherished and utilized wisely. I
            maintain a balance between serious work and hearty laughter,
            believing that both are essential for a fulfilling life. As I
            continue on my professional journey, I remain committed to growth,
            open to new experiences, and ready to contribute my diverse skill
            set to meaningful projects and collaborations.
          </article>
        </div>
      </section>

      {/* PROJECT SECTION */}
    </div>
  );
};

export default Homepage;
