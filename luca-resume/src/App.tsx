import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss'
import ResumeNav from '@/components/nav/nav';
import ResumeBackground from '@/components/background/background';
import Home from '@/pages/home/home';

function Dummy() {
  return (
    <div style={{ height: '400vh' }}>tets</div>
  )
}

function App() {

  const homeRef = useRef(null)
  const pagesRef = [homeRef]

  return (
    <Container fluid className="px-0">
      <ResumeNav />
      <ResumeBackground pagesRef={pagesRef} />
      <Container id="content">
        <Home ref={homeRef} />
        <Dummy />
      </Container>
    </Container>
  )
}

export default App
