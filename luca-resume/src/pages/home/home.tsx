import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UnderlineDeco from '@/components/underlineDeco/underlineDeco';
import CardDeco from '@/components/cardDeco/cardDeco';
import photo from '@/assets/photo.png'
import './home.scss';

function Home() {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col md={12} lg={8} className="home-title pe-lg-5">
          <Row><h4>Hi!</h4></Row>
          <Row className='flex-nowrap align-items-start'>
            <h1 className='display-5 fw-bold flex-shrink-1 pe-0'>I'm</h1>
            <UnderlineDeco className='me-auto'>
              <h1 className='display-5 fw-bold'>Luca Faggion.</h1>
            </UnderlineDeco>
          </Row>
          <Row><h1 className='display-6 fw-bold'>an aspiring DevOps Engineer</h1></Row>
          <Row><p className='pt-3'>I’m a passionate Engineer graduate willing to learn and master new technologies with a special passion for DevOps.</p></Row>
          <Row className='w-100 justify-content-end'>
            <div className='home-link-bar d-flex flex-column align-items-md-center align-items-lg-end py-3 px-5'>
              <a href='#CV'>Download CV</a>
            </div>
          </Row>
        </Col>
        <Col md={12} lg={4}>
          <CardDeco percent={80}>
            <div className='home-photo-container'><img src={photo} className="home-photo" alt="Resume photo" /></div>
          </CardDeco>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;