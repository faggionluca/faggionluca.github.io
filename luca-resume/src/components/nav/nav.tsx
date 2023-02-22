import React from "react";
import { Button, Container, Nav, Navbar, NavbarProps } from "react-bootstrap";
import "./nav.scss";
import brand from "@/assets/brand.svg";
import { Link } from "react-scroll";

type ResumeNavItem = {
  name: string,
  type: 'link' | "button"
  scrollTo: string
}

type NavBaseProps = {
  items: Array<ResumeNavItem>
}

export type NavProps = Omit<NavbarProps, "children"> & NavBaseProps

function NavLine() {
  return <div className="nav-line"></div>;
}

function ResumeNav(props: NavProps) {
  const { items } = props

  return (
    <Navbar sticky="top" expand="md">
      <Container fluid className="mx-1 mx-md-5 py-3">
        <Navbar.Brand href="#home">
          <img src={brand} className="nav-brand" alt="Resume Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              items.map((item, index) => (
                item.type === 'link' ? (
                  <Nav.Link as="div" key={index} className="mx-3 pe-auto cursor-pointer">
                    <Link to={item.scrollTo} offset={-50}>{item.name}</Link>
                  </Nav.Link>
                ) : (
                  <Button key={index} variant="primary" className="mx-3 fw-bold">
                    <Link to={item.scrollTo} offset={-50}>{item.name}</Link>
                  </Button>
                )
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavLine />
    </Navbar>
  );
}

export default ResumeNav;
