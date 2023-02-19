import React, { forwardRef, HTMLAttributes } from "react";
import { Container, Row, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Timeline, { TimelineBaseProps } from '@/components/timeline/timeline';
import "./about.scss";

type AboutProps = HTMLAttributes<HTMLDivElement>;

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {

  const { t } = useTranslation('translations', { keyPrefix: 'about' })
  const timelineData: TimelineBaseProps['data'] = [
    {
      date: '2023',
      desc: <><span>"Laurea in Ingegneria Informatica, Elettronica e Telecomunicazioni" presso </span><span className="emphasis fw-bold">Universita di Parma</span></>
    },
    {
      date: '2018',
      desc: <><span>"Diploma Costruzioni Ambiente Territorio" presso </span><span className="emphasis fw-bold">IIS Camillo Rondani</span></>
    }
  ]

  return (
    <Container fluid {...props} ref={ref} className="pt-5 pt-lg-2">
      <Stack gap={4}>
        <h1 className="display-5 fw-bold">{t('title')}</h1>
        <p>{t('desc')}</p>
        <h5 className="fw-bold pt-4">{t('historyTitle')}</h5>
        <Timeline data={timelineData} />
      </Stack>
    </Container>
  );
});

About.displayName = "About";

export default About;
