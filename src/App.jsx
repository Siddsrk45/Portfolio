import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Alert, Button, Container } from "react-bootstrap";
import { COLORS } from "../src/utils/theme";
import AppNavbar from "./layout/Navbar";
import HomeSection from "./components/HomeSection";
import AOS from "aos";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <AppNavbar />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
    </>
  );
}

export default App;
