import React, { forwardRef } from "react";
import { Col, Container, ContainerProps, Row, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Timeline, { TimelineBaseProps } from "@/components/timeline/timeline";
import "./about.scss";
import CardDeco from "@/components/cardDeco/cardDeco";
import clip1468 from "@/assets/clip-1468.png";

type AboutProps = Omit<ContainerProps, "children">;

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  const { t } = useTranslation("translations", { keyPrefix: "about" });
  const timelineData: TimelineBaseProps["data"] = [
    {
      date: "2023",
      desc: (
        <>
          <span>
            &quot;Laurea in Ingegneria Informatica, Elettronica e
            Telecomunicazioni&quot; presso{" "}
          </span>
          <span className="emphasis fw-bold">Universita di Parma</span>
        </>
      ),
    },
    {
      date: "2018",
      desc: (
        <>
          <span>
            &quot;Diploma Costruzioni Ambiente Territorio&quot; presso{" "}
          </span>
          <span className="emphasis fw-bold">IIS Camillo Rondani</span>
        </>
      ),
    },
  ];

  return (
    <Container fluid ref={ref} {...props}>
      <Stack gap={4}>
        <h1 className="display-5 fw-bold">{t("title")}</h1>
        <p>{t("desc")}</p>
        <h5 className="fw-bold pt-4">{t("historyTitle")}</h5>
        <Row>
          <Col className="col-lg-8 col-12">
            <Timeline data={timelineData} className="p-0" />
          </Col>
          <Col className="col-lg-4 col-12 position-relative">
            <CardDeco percent={80} className="about-art-card">
              <div className="about-art-container">
                <img src={clip1468} alt="clip-art" className="about-art" />
              </div>
            </CardDeco>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
});

About.displayName = "About";

export default About;
