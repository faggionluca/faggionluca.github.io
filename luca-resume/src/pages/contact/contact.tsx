import React, { forwardRef, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Container } from 'react-bootstrap';
import "./contact.scss";

type ContactProps = HTMLAttributes<HTMLDivElement>;

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const { t } = useTranslation("translations", { keyPrefix: "home" });
  return <Container ref={ref}></Container>;
});

Contact.displayName = "Contact"

export default Contact;
