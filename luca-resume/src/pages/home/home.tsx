import React, { forwardRef, HTMLAttributes } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UnderlineDeco from '@/components/underlineDeco/underlineDeco';
import CardDeco from '@/components/cardDeco/cardDeco';
import photo from '@/assets/photo.png'
import './home.scss';
import useBreakpoint from '@/utilities/useBreakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


function HomeLinkBar() {
  return (
    <div className='home-link-bar d-flex flex-column align-items-md-center align-items-lg-end py-3 px-5'>
      <a href='#CV'>Download CV</a>
    </div> 
  )
}

function ReadMore() {
  const show = useBreakpoint(['lg', 'xl', 'xxl'])
  const underlineStyle = {
    backgroundColor: 'rgba(136, 221, 255, 0.29)'
  }
  return (
    show && (
      <div className='home-readmore fw-bold d-flex flex-column justify-content-center'>
        <UnderlineDeco style={underlineStyle}>
          <a href='#About'>Read More about me</a>
        </UnderlineDeco>
        <FontAwesomeIcon
          icon={faArrowDown}
          size="2x"
          className="home-readmore-icon"
        />
      </div>
    ) || null
  )
}

type HomeProps = HTMLAttributes<HTMLDivElement>;

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) =>{

  return (
    <Container ref={ref} fluid className="home-container">
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
            <HomeLinkBar />
          </Row>
        </Col>
        <Col md={12} lg={4}>
          <CardDeco percent={80}>
            <div className='home-photo-container'>
              <img src={photo} className="home-photo" alt="Resume photo" />
            </div>
          </CardDeco>
        </Col>
      </Row>
      <Container fluid className='d-flex justify-content-center'>
        <ReadMore />
      </Container>
    </Container>
  )
}) 

export default Home;