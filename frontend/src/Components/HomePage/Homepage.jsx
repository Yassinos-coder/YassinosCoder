import "./HomePage.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import smp from "../../Assets/image/smp.png";
import outlawalert from "../../Assets/image/outlawalert.png";
import convo from "../../Assets/image/convo.png";

const Homepage = () => {
  const [toggleDev, setToggleDev] = useState(true);
  const [toggleGaming, setToggleGamingSec] = useState(true);

  const toggleDevSec = () => {
    setToggleDev(!toggleDev);
  };
  const toggleGamingSec = () => {
    setToggleGamingSec(!toggleGaming);
  };

  return (
    <div className="HomePage">
      <div className="title">
        <p>
          Yassinos Castro <span className="aka">aka</span> Yassinos
        </p>
        <p className="descTitle">
          <a href="#dev-sec"> Developer</a> |<a href="#gamer-sec"> Gamer</a> |
          <a href="#streamer-sec"> Streamer</a> |
          <a href="#TrueLove-sec"> Cars & Bikes Lover</a>
        </p>
      </div>

      <div className="main">
        <span className="toggleDevSec" onClick={toggleDevSec}>
          ➤ Developer{" "}
          <span
            style={{ color: "grey", fontSize: "0.7em", marginLeft: "20px" }}
          >
            {"<-"} click to hide/show
          </span>{" "}
          <hr className="hrLine" />
        </span>
        <div
          className="developer flexStuff"
          id="dev-sec"
          style={toggleDev ? {} : { display: "none" }}
        >
          <div className="projects">
            <div className="project1">
              <Card
                style={{
                  width: "25rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src={smp}
                  style={{ backgroundColor: "grey" }}
                />
                <Card.Body>
                  <Card.Text>
                    School Management Platform is a web-based system dedicated
                    for schools to help manage all their business from
                    administrators, teachers and students. The platform was
                    built using MERN Stack [MongoDB, ExpressJS, ReactJS, NodeJS]
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      style={{ textDecoration: "none", color: "initial" }}
                      href="https://smp.yassinoscoder.codes"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </Button>
                  <Button style={{ marginLeft: "10px" }} variant="primary">
                    <a
                      style={{ textDecoration: "none", color: "initial" }}
                      href="https://github.com/Yassinos-coder/smp-project"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Gihtub
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="project2">
              {" "}
              <Card
                style={{
                  width: "30rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src={outlawalert}
                  style={{ backgroundColor: "grey" }}
                />
                <Card.Body>
                  <Card.Text>
                    Outlaw Alert System is a web-based system dedicated to
                    helping citizens report
                    <span style={{ fontWeight: "bold" }}> Unlawful </span>
                    behavior to the authorities. The system also relies on a
                    reciever-side platform that notifies authorities of any
                    report with location and necessary details for intervention.
                    The platform was built using MERN Stack [MongoDB, ExpressJS,
                    ReactJS, NodeJS]
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      style={{ textDecoration: "none", color: "initial" }}
                      href="https://outlawalert.yassinoscoder.codes"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </Button>
                  <Button style={{ marginLeft: "10px" }} variant="primary">
                    <a
                      style={{ textDecoration: "none", color: "initial" }}
                      href="https://github.com/Yassinos-coder/outlawalert"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Gihtub
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="project3">
              {" "}
              <Card
                style={{
                  width: "25rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src={convo}
                  style={{ backgroundColor: "grey" }}
                />
                <Card.Body>
                  <Card.Text>
                    ConvoAPP is a Chat application where safety, security, and
                    seamless performance come together in one powerful chat app.
                    The platform was built using MERN Stack [MongoDB, ExpressJS,
                    ReactJS, NodeJS]
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      style={{ textDecoration: "none", color: "initial" }}
                      href="https://convoapp.yassinoscoder.codes"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </Button>
                  <Button style={{ marginLeft: "10px" }} variant="primary">
                    <a
                      style={{ textDecoration: "none", color: "initial" }}
                      href="https://github.com/Yassinos-coder/ConvoApp"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Gihtub
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <span className="toggleDevSec" onClick={toggleGamingSec}>
          ➤ Gaming{" "}
          <span
            style={{ color: "grey", fontSize: "0.7em", marginLeft: "50px" }}
          >
            {"<-"} click to hide/show
          </span>{" "}
          <hr className="hrLine" />
        </span>
        <div
          className="Gamer flexStuff"
          id="gamer-sec"
          style={toggleGaming ? {} : { display: "none" }}
        >
          <div className="desc">
            <p className="descP">
              Since 2017, I have been immersed in the world of game streaming
              and sharing my gameplay experiences, driven by a deep passion and
              love for gaming. Over the years, I've witnessed the gaming
              industry evolve and grow, and I've had the privilege of being part
              of this exciting journey. Through countless hours of live streams,
              video uploads, and engagement with an ever-expanding community,
              I've honed my skills and developed a unique style that reflects my
              dedication to gaming and sharing those moments with others. As I
              continue to explore this dynamic industry, I am genuinely grateful
              for the opportunity to connect with fellow gamers and enthusiasts,
              and I look forward to what the future holds as I continue to share
              my gaming adventures with the world.
            </p>
          </div>
          <div className="Streaming">
            <iframe
              src="https://player.twitch.tv/?channel=yassinos08&parent=www.example.com&muted=true"
              height="378"
              width="620"
              allowfullscreen
              title="Yassinos'S Twitch Channel"
            />
            <iframe
              height="378"
              width="620"
              src="https://player.trovo.live/embed/player?streamername=yassinos&autoplay=1"
              allowfullscreen
              title="Yassinos'S Trovo Channel"
            />
          </div>
        </div>
        <span className="toggleDevSec" onClick={toggleDevSec}>
          ➤ Streaming{" "}
          <span
            style={{ color: "grey", fontSize: "0.7em", marginLeft: "20px" }}
          >
            {"<-"} click to hide/show
          </span>{" "}
          <hr className="hrLine" />
        </span>
        <div className="Streamer flexStuff" id="streamer-sec"></div>
      </div>
    </div>
  );
};

export default Homepage;
