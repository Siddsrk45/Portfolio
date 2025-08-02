import React, { useEffect, useRef, useState } from "react";
import "../style.css";

function AboutSection() {

  return (
    <section
      id="about"
      style={{
        maxWidth: "1000px",
        width: "90%",
        margin: "0 auto",
        marginBottom: 100,
      }}
      className="about-section glow-on-hover d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        data-aos="fade-down"
        style={{
          fontSize: 40,
          marginBottom: "1.5rem",
          color: "var(--accent-blue)",
        }}
      >
        About Me
      </h1>

      <div data-aos="fade-up" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
        <p>
          I am a passionate{" "}
          <span className="highlight">Full Stack Software Developer</span> with
          <strong> 3+ years</strong> of experience in building scalable
          applications using{" "}
          <span className="highlight">.NET Core Web API</span> and{" "}
          <span className="highlight">React Native</span>.
        </p>

        <p>
          Skilled in <span className="highlight">API integration</span>,{" "}
          <span className="highlight">performance optimization</span>, and
          end-to-end <span className="highlight">feature development</span>. I
          focus on writing clean, maintainable code that enhances functionality
          and delivers a seamless user experience.
        </p>

        <p>
          I am based in <strong>Mumbai</strong>. I completed my{" "}
          <strong>Diploma</strong> in Computer Engineering with{" "}
          <strong>86%</strong> and a <strong>Bachelor’s Degree</strong> with a{" "}
          <strong>CGPA of 8.95</strong>.
        </p>

        <p>
          Always eager to{" "}
          <span className="highlight">master my current skills</span> and{" "}
          <span className="highlight">explore new technologies</span>.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
