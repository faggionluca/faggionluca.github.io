import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import ResumeNav from "@/components/nav/nav";
import ResumeBackground from "@/components/background/background";
import Home from "@/pages/home/home";
import About from "@/pages/about/about";

function Dummy() {
  return <div style={{ height: "400vh" }}>tets</div>;
}

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const pagesRef = [homeRef, aboutRef];

  return (
    <Container fluid className="px-0">
      <ResumeNav />
      <ResumeBackground pagesRef={pagesRef} />
      <Container id="content" className="position-relative">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Dummy />
      </Container>
    </Container>
  );
}

export default App;
