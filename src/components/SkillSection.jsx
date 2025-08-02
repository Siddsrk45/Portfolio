import "../style.css";

function SkillSection() {
  const skillsColumn1 = [
    "DotNet Core MVC",
    "DotNet Core Web API",
    "React Native",
    "React.js",
    "Entity Framework Core",
    "JQuery",
  ];
  const skillsColumn2 = ["C#", "JavaScript", "SSMS", "IIS", "LINQ", "PGSQL"];

  return (
    <section
      id="skill"
      className="about-section glow-on-hover d-flex flex-column justify-content-center align-items-center"
      style={{
        maxWidth: "1000px",
        width: "90%",
        margin: "0 auto",
        marginBottom: 130,
        padding: "2rem",
      }}
    >
      <h1
        data-aos="fade-down"
        style={{
          fontSize: 40,
          marginBottom: "2rem",
          color: "var(--accent-blue)",
          paddingBottom: "0.5rem",
        }}
      >
        Skills
      </h1>

      <div
        className="skills-grid"
        data-aos="fade-up"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {[skillsColumn1, skillsColumn2].map((column, index) => (
          <ul key={index} style={{ listStyleType: "none", padding: 0 }}>
            {column.map((skill, idx) => (
              <li
                key={idx}
                data-aos="fade-right"
                data-aos-delay={idx * 100}
                className="skill-item"
              >
                🔹 <span style={{ fontWeight: 500 }}>{skill}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
