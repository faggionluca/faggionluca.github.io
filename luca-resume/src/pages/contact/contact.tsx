import React, { forwardRef, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  Container,
  ContainerProps,
  Row,
  Stack,
  StackProps,
} from "react-bootstrap";
import "./contact.scss";
import emailIcon from "@/assets/emailicon.png";
import githubIcon from "@/assets/githubicon.png";
import CardDeco from "@/components/cardDeco/cardDeco";
import clipWaved from "@/assets/clip-man-waves.png";
import UnderlineDeco from "@/components/underlineDeco/underlineDeco";
import { ContactInfo as StaticContactInfo } from "@/info";

type ContactInfoBaseProps = {
  icon: string;
};

type ContactInfoProps = PropsWithChildren<StackProps & ContactInfoBaseProps>;

function ContactInfo(props: ContactInfoProps) {
  const { icon, children, ...rest } = props;

  return (
    <Stack direction="horizontal" {...rest}>
      <img src={icon} alt="info-icon" />
      {children}
    </Stack>
  );
}

type ContactProps = Omit<ContainerProps, "children">;

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const { t } = useTranslation("translations", { keyPrefix: "contact" });

  return (
    <Container {...props} ref={ref}>
      <Row>
        <Col className="col-12 col-lg-8">
          <Row>
            <Stack gap={5}>
              <h1 className="display-5 fw-bold">{t("title")}</h1>
              <ContactInfo icon={emailIcon}>
                <span className="fs-3">
                  <span>e-mail: </span>
                  <a href={`mailto:${StaticContactInfo.email}`}>{StaticContactInfo.email}</a>
                </span>
              </ContactInfo>
              <ContactInfo icon={githubIcon} className="pt-4">
                <span className="fs-3">
                  <span>{t("my")} </span>
                  <a href={StaticContactInfo.github}>{t("github")}</a>
                </span>
              </ContactInfo>
            </Stack>
          </Row>
          <Row className="thanks-row">
            <UnderlineDeco className="justify-content-end">
              <h1 className="display-6 fw-bold">{t("thankyou")}</h1>
            </UnderlineDeco>
          </Row>
        </Col>
        <Col className="d-flex align-items-center col-12 col-lg-auto art-col justify-content-center">
          <CardDeco design="abstract" className="contact-art-card">
            <div className="contact-art-container">
              <img src={clipWaved} alt="clip-art" className="contact-art" />
            </div>
          </CardDeco>
        </Col>
      </Row>
    </Container>
  );
});

Contact.displayName = "Contact";

export default Contact;
