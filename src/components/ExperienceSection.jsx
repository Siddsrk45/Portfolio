import React from "react";
import "../style.css";

function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: "1000px",
        width: "90%",
        margin: "0 auto",
        marginBottom: 200,
        padding: "2rem 1rem",
      }}
      className="about-section glow-on-hover d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        data-aos="fade-down"
        style={{
          fontSize: 40,
          marginBottom: "2rem",
          color: "var(--accent-blue)",
        }}
      >
        Experience
      </h1>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          maxWidth: "800px",
          textAlign: "left",
        }}
      >
        <h3 style={{ color: "var(--accent-blue)" }}>
          CodeArray Technologies Pvt. Ltd.
        </h3>
        <p style={{ fontWeight: "bold", marginBottom: 0 }}>
          Software Engineer
        </p>
        <p style={{ fontStyle: "italic", color: "gray", marginBottom: "1rem" }}>
          June 2019 - Present | Mumbai, Maharashtra
        </p>

        <ul style={{ lineHeight: "1.8", paddingLeft: "1.2rem" }}>
          <li data-aos="fade-up" data-aos-delay="100">
            Developed and maintained <strong>Android</strong>,{" "}
            <strong>iOS</strong>, and <strong>web</strong> apps using{" "}
            <span className="highlight">React Native</span>,{" "}
            <span className="highlight">.NET Core Web API</span>, and{" "}
            <span className="highlight">.NET Core MVC</span>.
          </li>
          <li data-aos="fade-up" data-aos-delay="100">
            Led and mentored junior team members, collaborating to deliver
            high-quality software within strict timelines.
          </li>
          <li data-aos="fade-up" data-aos-delay="100">
            Completed the development and maintenance of critical{" "}
            <span className="highlight">payment modules</span> across multiple
            applications.
          </li>
          <li data-aos="fade-up" data-aos-delay="100">
            Diagnosed and resolved performance bottlenecks, writing{" "}
            <strong>optimized code</strong> for enhanced app responsiveness.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
