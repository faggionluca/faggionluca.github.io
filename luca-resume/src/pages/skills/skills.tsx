import React, { forwardRef, HTMLAttributes } from "react";
import "./skills.scss";
import { Container } from "react-bootstrap";

type SkillsProps = HTMLAttributes<HTMLDivElement>;

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  return (
    <Container fluid {...props} ref={ref} className="pt-5 pt-lg-2"></Container>
  );
});

Skills.displayName = "Skills";

export default Skills;
