import React, { forwardRef, HTMLAttributes, ReactElement } from "react";
import "./skills.scss";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import clipComputer from "@/assets/clip-computer-repair-2.png";
import CardDeco from "@/components/cardDeco/cardDeco";
import ContainerDeco from "@/components/containerDeco/containerDeco";
import pythonIcon from "@/assets/pythonicon.png";
import jsIcon from "@/assets/jsicon.png";
import djangoIcon from "@/assets/djangoicon.png";
import nodeIcon from "@/assets/nodeicon.png";
import dockerIcon from "@/assets/dockerIcon.png";
import useBreakpoint from "@/utilities/useBreakpoint";

type SkillsProps = HTMLAttributes<HTMLDivElement>;

type SkillsDecoBaseProps = {
  data: Array<{ icon: string; name: ReactElement | string }>;
};

type SkillsDecoProps = Omit<HTMLAttributes<HTMLDivElement>, "children>"> &
  SkillsDecoBaseProps;

function SkillsDecos(props: SkillsDecoProps) {
  const { data, ...rest } = props;

  const breakpoint = useBreakpoint(["lg", "xl", "xxl"]);
  const colClasses = "col-lg-auto col-12 pt-xl-2";

  return (
    <Row {...rest}>
      {data.map((value, index) => (
        <Col
          className={`${colClasses} ${
            breakpoint ? "pt-5" : index !== 0 ? "pt-5" : "pt-2"
          }`}
          key={index}
        >
          <ContainerDeco>
            <ContainerDeco.Icon icon={value.icon} />
            <ContainerDeco.Content className="align-items-center d-flex">
              {value.name}
            </ContainerDeco.Content>
          </ContainerDeco>
        </Col>
      ))}
    </Row>
  );
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  const languages = [
    { icon: pythonIcon, name: "Python" },
    { icon: jsIcon, name: "Javascript" },
  ];

  const frameworks = [
    { icon: djangoIcon, name: "Django" },
    { icon: nodeIcon, name: "Node" },
    { icon: dockerIcon, name: "Docker" },
  ];

  const { t } = useTranslation("translations", { keyPrefix: "skills" });

  return (
    <Container fluid {...props} ref={ref}>
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
              <SkillsDecos data={languages} className="px-5" />
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
        <Row className="pt-5">
          <Stack gap={4}>
            <h1 className="text-end display-5 fw-bold">
              {t("frameworkTitle")}
            </h1>
            <p className="text-end">{t("frameworkDesc")}</p>
            <SkillsDecos
              data={frameworks}
              className="justify-content-end pt-2 px-5"
            />
          </Stack>
        </Row>
      </Row>
    </Container>
  );
});

Skills.displayName = "Skills";

export default Skills;
