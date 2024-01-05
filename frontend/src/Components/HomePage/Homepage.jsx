import "./HomePage.css";
import logo from "../../assets/logoNOBG.png";

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
            <a href="#Home" className="navLinks">
              Home
            </a>
            <a href="#Projects" className="navLinks">
              Projects
            </a>
            <a href="#Certs" className="navLinks">
              Certifications
            </a>
            <a href="#Experiences" className="navLinks">
              Experiences
            </a>
            <a href="resume.pdf" className="navLinks">
              Download Resume
            </a>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="portfolio">
          <div className="part1">
            <img
              src={logo}
              alt="Yassine Castro aka Yassinos aka DMFGenius aka Yassinos-Coder aka zeus"
            />
            <p>Yassine Castro</p>
            <a href="https://www.linkedin.com/in/yassine-castro-6a6ba7237/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Yassinos-coder">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/yassinos.js/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitch.tv/yassinos08">
              <i className="fa-brands fa-twitch"></i>
            </a>
          </div>
          <div className="part2">
            <h1>About Me</h1>
            <p>
              Hello! I{"'"}m Yassine Castro, a passionate geek deeply immersed
              in the tech world. As a proficient Full Stack Developer, I excel
              in MERN and React-Native, constantly pushing the boundaries of
              what
              {"'"}s possible. My dedication to hard work and responsibility is
              matched only by my commitment to continual improvement. I thrive
              on adventure, both in coding and life, always seeking new
              challenges and innovative solutions. Let{"'"}s embark on a journey
              where technology meets creativity, and ideas turn into reality.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
