import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './nav.scss'
import brand from '@/assets/brand.svg';
import { useTranslation } from 'react-i18next';

function NavLine() {
  return (
    <div className='nav-line'></div>
  )
}

function ResumeNav() {

  const { t } = useTranslation('translations', {keyPrefix: "common"})

  return (
    <Navbar sticky="top" expand="md">
      <Container fluid className="mx-1 mx-md-5 py-3">
        <Navbar.Brand href="#home"><img src={brand} className="nav-brand" alt="Resume Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link className='mx-3' href="#home">{t('about')}</Nav.Link>
            <Nav.Link className='mx-3' href="#link">{t('skills')}</Nav.Link>
            <Button variant="primary" className='mx-3 fw-bold'>{t('contactme')}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavLine />
    </Navbar>
  )
}

export default ResumeNav;