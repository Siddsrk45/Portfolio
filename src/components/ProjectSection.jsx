import { Container } from "react-bootstrap";
import "../style.css";
import Project from "./Project";
import { ProjectDetails } from "../data/ProjectDetails";

function ProjectSection() {
  return (
    <section
      id="projects"
      style={{
        maxWidth: "1000px",
        width: "90%",
        margin: "0 auto",
        marginBottom: 80,
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        className="text-center"
        style={{ color: "var(--accent-blue)", marginBottom: "2rem" }}
        data-aos="fade-down"
      >
        Projects
      </h1>
      <Container>
        {ProjectDetails.map((item, index) => {
          return (
            <Project
              key={index}
              title={item.title}
              description={item.description}
              technologyUsed={item.technologyUsed}
            />
          );
        })}
      </Container>
    </section>
  );
}

export default ProjectSection;
