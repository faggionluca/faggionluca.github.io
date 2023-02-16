import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.scss'
import ResumeNav from '@/components/nav/nav';
import ResumeBackground from '@/components/background/background';


function Dummy() {
  return (
    <div style={{height: '400vh'}}></div>
  )
}

function App() {

  return (
    <Container fluid className="px-0">
      <ResumeNav />
      <ResumeBackground />
      <Dummy />
    </Container>
  )
}

export default App
