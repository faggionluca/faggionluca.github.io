import React, { forwardRef, HTMLAttributes } from "react";
import "./skills.scss";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import clipComputer from '@/assets/clip-computer-repair-2.png';
import CardDeco from '@/components/cardDeco/cardDeco';
import ContainerDeco from "@/components/containerDeco/containerDeco";
import pythonIcon from "@/assets/pythonicon.png";
import jsIcon from "@/assets/jsicon.png";

type SkillsProps = HTMLAttributes<HTMLDivElement>;

function Languages() {

  const languages = [
    { icon: pythonIcon, name: 'Python' },
    { icon: jsIcon, name: 'Javascript' },
  ]

  return (
    <Row>
      {languages.map((language, index) => (
        <Col className={`col-md-auto col-12 ${index !== 0 && 'pt-5'} pt-xl-2`} key={index}>
          <ContainerDeco>
            <ContainerDeco.Icon icon={language.icon} />
            <ContainerDeco.Content className="align-items-center d-flex">
              {language.name}
            </ContainerDeco.Content>
          </ContainerDeco>
        </Col>
      ))}
    </Row>
  )
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {

  const { t } = useTranslation('translations', { keyPrefix: 'skills' })

  return (
    <Container fluid {...props} ref={ref} className="pt-5 page-padding">
      <Row>
        <Row>
          <Stack gap={4}>
            <h1 className="display-5 fw-bold">{t("title")}</h1>
            <p>{t("desc")}</p>
          </Stack>
        </Row>
        <Row>
          <Col>
            <Stack gap={4}>
              <h5 className="fw-bold pt-4">{t("subtitle")}</h5>
              <p>{t("langDesc")}</p>
              <Languages />
            </Stack>
          </Col>
          <Col className="col-12 col-md-4">
            <CardDeco percent={80} className="skills-art-card">
              <div className="skills-art-container">
                <img src={clipComputer} alt="clip-art" className="skills-art" />
              </div>
            </CardDeco>
          </Col>
        </Row>
      </Row>
    </Container>
  );
});

Skills.displayName = "Skills";

export default Skills;
