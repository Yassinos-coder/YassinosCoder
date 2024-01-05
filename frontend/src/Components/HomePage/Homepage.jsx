/* eslint-disable no-unused-vars */
import "./HomePage.css";
import logo from "../../assets/logoNOBG.png";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="headerDiv1">
          <img
            src={logo}
            alt="Yassine Castro aka Yassinos aka DMFGenius aka Yassinos-Coder aka zeus"
          />
          <p>Yassine Castro</p>
        </div>
        <div className="headerNavs">
          <nav>
            <Link to={"/"} className="navLinks">
              Home
            </Link>
            <Link to={"/Projects"} className="navLinks">
              Projects
            </Link>
            <Link to={"/Certifications"} className="navLinks">
              Certifications
            </Link>
            <Link to={"/Experiences"} className="navLinks">
              Experiences
            </Link>
            <a href="resume.pdf" className="navLinks">
              Download Resume
            </a>
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>No Use Of Templates | Keep it simple! | By Yassine Castro</p>
      </footer>
    </div>
  );
};

export default Homepage;
