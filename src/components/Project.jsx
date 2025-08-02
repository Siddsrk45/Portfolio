import { Card } from "react-bootstrap";
import { COLORS } from "../utils/theme";
import "../style.css";
function Project(props) {
  return (
    <div
      className="project-card glow-on-hover"
      data-aos="fade-up"
      data-aos-duration="800"
    
    >
      <h2 style={{ color: COLORS.accent_primary }}>{props.title}</h2>
      <p style={{ color: COLORS.accent_alternate, fontWeight:'bold', fontStyle:'italic' }}>{props.technologyUsed}</p>
      <p style={{ lineHeight: "1.6" }}>{props.description}</p>
    </div>
  );
}

export default Project;
