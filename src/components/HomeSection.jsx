import React from "react";
import { COLORS } from "../utils/theme";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../style.css";
function HomeSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Hi There!
      </h1>
      <h1 data-aos="zoom-in" data-aos-once="true">
        I'M <br />
        <span style={{ color: COLORS.accent_primary, fontSize: 50 }}>
          SIDDHESH KUMBHAR
        </span>
      </h1>
      <h1 data-aos="fade-up" data-aos-once="true">
        SOFTWARE DEVELOPER
      </h1>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        style={{
          fontSize: 30,
          marginTop: 10,
          flexDirection: "row",
          display: "flex",
          gap: 10,
        }}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/siddhesh-kumbhar-70b667156/"
        >
          <FaLinkedin size={27} />
        </a>
        <a href="mailto:siddhu.kumbhar2000@gmail.com">
          <MdEmail />
        </a>
        <a href="tel:7420918599">
          <FaPhone size={24} />
        </a>
      </div>
    </section>
  );
}

export default HomeSection;
