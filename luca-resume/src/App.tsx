import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import ResumeNav, { NavProps } from "@/components/nav/nav";
import ResumeBackground from "@/components/background/background";
import Home from "@/pages/home/home";
import About from "@/pages/about/about";
import Skills from "@/pages/skills/skills";
import Contact from "@/pages/contact/contact";
import { useTranslation } from "react-i18next";

function Dummy() {
  return <div style={{ height: "400vh" }}>tets</div>;
}

function App() {
  const { t } = useTranslation("translations", { keyPrefix: "common" });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const pagesRef = [homeRef, aboutRef, skillsRef, contactRef];

  const navItems: NavProps["items"] = [
    { name: t("about"), type: "link", scrollTo: "about" },
    { name: t("skills"), type: "link", scrollTo: "skills" },
    { name: t("contactme"), type: "button", scrollTo: "contact" },
  ];

  return (
    <Container fluid className="px-0">
      <ResumeNav items={navItems} />
      <ResumeBackground pagesRef={pagesRef} />
      <Container id="content" className="position-relative">
        <Home ref={homeRef} />
        <About id="about" className="page page-padding" ref={aboutRef} />
        <Skills id="skills" className="page page-padding" ref={skillsRef} />
        <Contact
          id="contact"
          className="page page-padding end-padding"
          ref={contactRef}
        />
      </Container>
    </Container>
  );
}

export default App;
