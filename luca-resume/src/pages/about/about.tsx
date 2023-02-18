import React, { forwardRef, HTMLAttributes } from 'react'
import { Container } from 'react-bootstrap';
import './about.scss';

type AboutProps = HTMLAttributes<HTMLDivElement>

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <Container fluid {...props}>
    </Container>
  )
})

export default About;