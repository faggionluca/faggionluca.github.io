import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.scss'
import ResumeNav from '@/components/nav/nav';
import ResumeBackground from '@/components/background/background';
import Home from '@/pages/home/home';

function Dummy() {
  return (
    <div style={{height: '400vh'}}>tets</div>
  )
}

function App() {

  return (
    <Container fluid className="px-0">
      <ResumeNav />
      <ResumeBackground />
      <Container id="content">
        <Home />
      </Container>
      {/* <Dummy /> */}
    </Container>
  )
}

export default App
