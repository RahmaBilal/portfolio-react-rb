
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Project3 from "../assets/images/Project3.png";
import Project4 from "../assets/images/Project4.png";
import Project5 from "../assets/images/Project5.png";
import Project6 from "../assets/images/Project6.png";

export const Projects = () => {
  const projects = [
    {
      title: "News Page",
      imgUrl: Project1,
      deployed: "https://axmedd.github.io/News-Page/",
      github: "https://github.com/RahmaBilal/News-Page",
    },
    {
      title: "Weather Dashboard",
      imgUrl: Project2,
      deployed: "https://rahmabilal.github.io/accurate-weather/",
      github: "https://github.com/RahmaBilal/accurate-weather",
    },
    {
      title: "Code Quiz",
      imgUrl: Project3,
      github: "https://github.com/RahmaBilal/Timed-quiz",
      deployed: "https://rahmabilal.github.io/Timed-quiz/",
    },
    {
      title: "Note Taker",
      imgUrl: Project4,
      deployed: "https://sheltered-beach-34645.herokuapp.com/notes",
      github: "https://github.com/RahmaBilal/notes-made-simple",
    },
    {
      title: "Work-day Scheduler",
      imgUrl: Project5,
      deployed: "https://rahmabilal.github.io/workday-scheduler/",
      github: "https://rahmabilal.github.io/workday-scheduler/",
    },
    {
      title: "Password Generator",
      imgUrl: Project6,
      deployed: "https://rahmabilal.github.io/Password-Generator/",
      github: "https://github.com/RahmaBilal/Password-Generator",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Portfolio</h2>
            <p>
              Featured below are some of my projects. Click on them for a more
              detailed look.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
