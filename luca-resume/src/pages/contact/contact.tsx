import React, { forwardRef, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import "./contact.scss";

type ContactProps = HTMLAttributes<HTMLDivElement>;

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const { t } = useTranslation("translations", { keyPrefix: "home" });
  return <></>;
});

export default Contact;
