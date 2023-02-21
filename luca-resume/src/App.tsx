import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import ResumeNav from "@/components/nav/nav";
import ResumeBackground from "@/components/background/background";
import Home from "@/pages/home/home";
import About from "@/pages/about/about";
import Skills from "@/pages/skills/skills";

function Dummy() {
  return <div style={{ height: "400vh" }}>tets</div>;
}

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const pagesRef = [homeRef, aboutRef, skillsRef];

  return (
    <Container fluid className="px-0">
      <ResumeNav />
      <ResumeBackground pagesRef={pagesRef} />
      <Container id="content" className="position-relative">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Dummy />
      </Container>
    </Container>
  );
}

export default App;
