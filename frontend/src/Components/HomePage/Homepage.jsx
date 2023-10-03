import "./HomePage.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import smp from "../../Assets/image/smp.png";
import outlawalert from "../../Assets/image/outlawalert.png";
import convo from "../../Assets/image/convo.png";

import r6s from "../../Assets/image/r6s.jpg";
import pubg from "../../Assets/image/pubg.png";
import thecrew2 from "../../Assets/image/thecrew2.jpg";
import battlefield from "../../Assets/image/battlefield.jpg";

import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

const Homepage = () => {
  const [toggleDev, setToggleDev] = useState(false);
  const [toggleStreaming, setToggleStreamingSec] = useState(false);
  const [toggleGamer, setToggleGamingSec] = useState(false);

  const toggleDevSec = () => {
    setToggleDev(!toggleDev);
  };
  const toggleStreamingSec = () => {
    setToggleStreamingSec(!toggleStreaming);
  };
  const toggleGamerSec = () => {
    setToggleGamingSec(!toggleGamer);
  };

  return (
    <div className="HomePage">
      <div className="title">
        <p>
          Yassinos Castro <span className="aka">aka</span> Yassinos
        </p>
        <p className="descTitle">
          <a href="#dev-sec"> Developer</a> |
          <a href="#streaming-sec"> Streamer</a> |
          <a href="#gamer-sec"> Gamer</a> |
          <a href="#TrueLove-sec"> Cars & Bikes Lover</a>
        </p>
      </div>

      <div className="main">
        <span id="dev-sec" className="toggleDevSec" onClick={toggleDevSec}>
          <span className="arrow">
            {" "}
            {toggleDev ? <BiSolidDownArrow /> : <BiSolidRightArrow />}{" "}
          </span>{" "}
          Dev Projects{" "}
          <span
            style={{ color: "grey", fontSize: "0.7em", marginLeft: "20px" }}
          >
            {"<-"} click to hide/show
          </span>{" "}
          <hr className="hrLine" />
        </span>
        <div
          className="developer flexStuff"
          style={toggleDev ? {} : { display: "none" }}
        >
          <div className="projects">
            <div className="project1">
              <Card
                style={{
                  width: "20rem",
                  backgroundColor: "black",
                  color: "white",
                }}
                className="btscard"
              >
                <Card.Img
                  variant="top"
                  src={smp}
                  style={{ backgroundColor: "grey" }}
                />
                <Card.Body>
                  <Card.Text className="textDescForEachCard">
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
                  width: "20rem",
                  backgroundColor: "black",
                  color: "white",
                }}
                className="btscard"
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
                  width: "20rem",
                  backgroundColor: "black",
                  color: "white",
                }}
                className="btscard"
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
        <span
          id="streaming-sec"
          className="toggleDevSec"
          onClick={toggleStreamingSec}
        >
          <span className="arrow">
            {" "}
            {toggleStreaming ? (
              <BiSolidDownArrow />
            ) : (
              <BiSolidRightArrow />
            )}{" "}
          </span>{" "}
          Streaming
          <span
            style={{ color: "grey", fontSize: "0.7em", marginLeft: "50px" }}
          >
            {"<-"} click to hide/show
          </span>{" "}
          <hr className="hrLine" />
        </span>
        <div
          className="StreamingSec flexStuff"
          style={toggleStreaming ? {} : { display: "none" }}
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
              src="https://player.twitch.tv/?channel=yassinos08&parent=yassinoscoder.codes&muted=true"
              height="300"
              width="500"
              allowfullscreen
              title="Yassinos'S Twitch Channel"
            />
            <iframe
              height="300"
              width="500"
              src="https://player.trovo.live/embed/player?streamername=yassinos&autoplay=1"
              allowfullscreen
              title="Yassinos'S Trovo Channel"
            />
          </div>
        </div>
        <span id="gamer-sec" className="toggleDevSec" onClick={toggleGamerSec}>
          <span className="arrow">
            {" "}
            {toggleGamer ? <BiSolidDownArrow /> : <BiSolidRightArrow />}{" "}
          </span>
          Gaming
          <span
            style={{ color: "grey", fontSize: "0.7em", marginLeft: "20px" }}
          >
            {"<-"} click to hide/show
          </span>
          <hr className="hrLine" />
        </span>
        <div
          className="Gamer flexStuff"
          style={toggleGamer ? {} : { display: "none" }}
        >
          <div className="gamerTitle">
            <p style={{ textAlign: "center" }}>
              {" "}
              Games I play, Feel free add me if you wanna play!{" "}
            </p>
            <div className="games">
              <div className="game1">
                <div className="spanOnImg">
                  <p>Tom Clancy's Rainbow | Six Siege</p>
                  <p>
                    Username:{" "}
                    <span style={{ color: "yellow" }}>yassinos08</span>{" "}
                  </p>
                </div>
                <img src={r6s} alt="" />
              </div>
              <div className="game2">
                <div className="spanOnImg">
                  <p>Player'S Unknown Battleground</p>
                  <p>
                    Username: <span style={{ color: "yellow" }}>yassinos</span>{" "}
                  </p>
                </div>
                <img src={pubg} alt="" />
              </div>
              <div className="game3">
                <div className="spanOnImg">
                  <p>The Crew 2</p>
                  <p>
                    Username:{" "}
                    <span style={{ color: "yellow" }}>yassinos08</span>{" "}
                  </p>
                </div>
                <img src={thecrew2} alt="" />
              </div>
              <div className="game4">
                <div className="spanOnImg">
                  <p>BattleField V</p>
                  <p>
                    Username:{" "}
                    <span style={{ color: "yellow" }}>YassinosMA</span>{" "}
                  </p>
                </div>
                <img src={battlefield} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
