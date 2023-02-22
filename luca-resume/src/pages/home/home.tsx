import React, { forwardRef } from "react";
import { Col, Container, ContainerProps, Row } from "react-bootstrap";
import UnderlineDeco from "@/components/underlineDeco/underlineDeco";
import CardDeco from "@/components/cardDeco/cardDeco";
import photo from "@/assets/photo.png";
import "./home.scss";
import useBreakpoint from "@/utilities/useBreakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';

function HomeLinkBar() {
  const { t } = useTranslation("translations", { keyPrefix: "home" });

  return (
    <div className="home-link-bar d-flex flex-column align-items-md-center align-items-lg-end py-3 px-5">
      <a href="#CV">{t("downloadcv")}</a>
    </div>
  );
}

function ReadMore() {
  const { t } = useTranslation("translations", { keyPrefix: "home" });
  const show = useBreakpoint(["lg", "xl", "xxl"]);
  const underlineStyle = {
    backgroundColor: "rgba(136, 221, 255, 0.29)",
  };

  return (
    (show && (
      <Row>
        <Col className="home-readmore fw-bold">
          <Row>
            <UnderlineDeco
              style={underlineStyle}
              className="align-items-center flex-column"
            >
              <span className="cursor-pointer">
                <Link to="about" offset={-50}>{t("readmore")}</Link>
              </span>
            </UnderlineDeco>
          </Row>
          <Row>
            <FontAwesomeIcon
              icon={faArrowDown}
              size="2x"
              className="home-readmore-icon"
            />
          </Row>
        </Col>
      </Row>
    )) ||
    null
  );
}

type HomeProps = Omit<ContainerProps, "children">;

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
  const { t } = useTranslation("translations", { keyPrefix: "home" });

  return (
    <Container ref={ref} fluid className="home-container" {...props}>
      <Row>
        <Col md={12} lg={8} className="home-title pe-lg-5">
          <Row>
            <h4>{t("hi")}</h4>
          </Row>
          <Row className="flex-nowrap align-items-start">
            <h1 className="display-5 fw-bold flex-shrink-1 pe-0">{t("im")}</h1>
            <UnderlineDeco className="me-auto">
              <h1 className="display-5 fw-bold">Luca Faggion.</h1>
            </UnderlineDeco>
          </Row>
          <Row>
            <h1 className="display-6 fw-bold">{t("titleDesc")}</h1>
          </Row>
          <Row>
            <p className="pt-3">{t("titleSubText")}</p>
          </Row>
          <Row className="w-100 justify-content-end">
            <HomeLinkBar />
          </Row>
        </Col>
        <Col md={12} lg={4}>
          <CardDeco percent={80}>
            <div className="home-photo-container">
              <img src={photo} className="home-photo" alt="resume" />
            </div>
          </CardDeco>
        </Col>
      </Row>
      <ReadMore />
    </Container>
  );
});

Home.displayName = "Home";

export default Home;
