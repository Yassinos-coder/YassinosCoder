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
            <a href="#Home" className="navLinks">Home</a>
            <a href="#Projects" className="navLinks">Projects</a>
            <a href="#Certs" className="navLinks">Certifications</a>
            <a href="#Experiences" className="navLinks">Experiences</a>
            <a href="resume.pdf" className="navLinks">Download Resume</a>
          </nav>
        </div>
      </header>
      <main className="main">
        <section id="Home" className="section1 sections"></section>
        <section id="Projects" className="section2 sections"></section>
        <section id="Certs" className="section3 sections"></section>
        <section id="Experiences" className="section4 sections"></section>
      </main>
    </div>
  );
};

export default Homepage;
