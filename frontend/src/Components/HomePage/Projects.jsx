import React from "react";
import smp from "../../assets/smp.png";
import outlawalert from "../../assets/outlawalert.png";
import convo from "../../assets/convo.png";

function Projects() {
  const projects = [
    {
      title: "School Management Platform",
      link: "https://smp.yassinoscoder.codes/",
      images: smp,
      git: "https://github.com/Yassinos-coder/smp-project",
      desc: "Discover our School Management Platform, a comprehensive web application designed to streamline internal affairs in educational institutions. Utilizing the robust MERN stack, it seamlessly integrates management of students, teachers, classrooms, and academic levels. This platform stands as a testament to efficiency, ensuring smooth operational flow in the dynamic world of education.",
    },
    {
      title: "Outlaw Alert System",
      link: "https://outlawalert.yassinoscoder.codes/",
      images: outlawalert,
      git: "https://github.com/Yassinos-coder/outlawalert",
      desc: "Introducing the Outlaw Alert System, an innovative web application revolutionizing public safety. Designed for both citizens and law enforcement, it enables the community to report unlawful activities swiftly and anonymously. Utilizing the MERN stack, this platform ensures real-time communication, allowing police to receive reports and dispatch units efficiently. It's a step towards a more secure and responsive community, where public collaboration meets advanced technology for safety.",
    },
    {
      title: "ConvoApp Chat System",
      link: "https://convoapp.yassinoscoder.codes/",
      images: convo,
      git: "https://github.com/Yassinos-coder/ConvoApp",
      desc: "Meet Convo App, a dynamic chat application that redefines the way we connect. Built with the powerful MERN stack, it offers a seamless and intuitive messaging experience. Whether for personal chats or professional collaboration, Convo App brings users together with efficiency and ease. Its robust design ensures a reliable and engaging communication platform for everyone. Dive into the world of Convo App, where conversations come to life.",
    },
  ];

  // Add serversOffline property to all projects and set it to true to disable all links
  projects.forEach(project => {
    project.serversOffline = true;
  });

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className={`projectDiv project${index}`}>
          <p className="projectTitle">
            {project.title}
          </p>
          <div className="projectLinks">
            <span className="disabledLink">
              <a href={project.link} target="_blank" rel="noopener noreferrer" disabled={project.serversOffline}>
                Visit Project
              </a>
            </span>
            <a href={project.git} target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>
          </div>
          <p className="projectDesc">{project.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
