import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { COLORS } from "../utils/theme";
import { AiOutlineFundProjectionScreen, AiOutlineHome } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Link as ScrollLink } from "react-scroll";
import "../../src/style.css";
import resumePDF from "../assets/SiddheshKumbharResume.pdf"; // adjust the path if needed
import useIsMobile from "../Hooks/DeviceCheckHook";
import { FiMenu, FiX } from "react-icons/fi";
function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <>
      <Navbar
        expand="md"
        bg="dark"
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
        variant="dark"
        style={{ backgroundColor: COLORS.secondary }}
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: COLORS.accent_primary }}>
            Siddhesh
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggle"
          >
            {expanded ? (
              <FiX size={24} color={COLORS.accent_primary} />
            ) : (
              <FiMenu size={24} color={COLORS.accent_primary} />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <ScrollLink
                  to="home"
                  spy={true}
                  onClick={handleNavClick}
                  smooth={true}
                  offset={isMobile ? -220: -70}
                  duration={50}
                  className="nav-link"
                >
                  <AiOutlineHome size={20} /> Home
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={isMobile ? -370 : -220}
                  onClick={handleNavClick}
                  duration={50}
                  className="nav-link"
                >
                  <FaRegUser /> About
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={isMobile ? -360 : -130}
                  duration={50}
                  onClick={handleNavClick}
                  className="nav-link"
                >
                  <FaRegStar size={20} /> Skills
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  to="experience"
                  spy={true}
                  smooth={true}
                  onClick={handleNavClick}
                  offset={isMobile ? -340 : -200}
                  duration={50}
                  className="nav-link"
                >
                  <GiProgression size={20} /> Experience
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  to="projects"
                  spy={true}
                  onClick={handleNavClick}
                  smooth={true}
                  offset={isMobile ? -370 : -70}
                  duration={50}
                  className="nav-link"
                >
                  <AiOutlineFundProjectionScreen size={20} /> Projects
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href={resumePDF}
                  target="_blank"
                  download
                  className="nav-link"
                >
                  <CgFileDocument size={20} /> Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
