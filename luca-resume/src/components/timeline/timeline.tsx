import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './timeline.scss';

export type TimelineBaseProps = {
  data: Array<{ date: string, desc: ReactElement | string }>;
};

export type TimelineProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & TimelineBaseProps
>;

function Timeline(props: TimelineProps) {
  const { data } = props

  return (
    <Container fluid>
      {data.map((timeDesc, index) =>
        <Row>
          <Col className='col-3 col-sm-2 col-lg-1 py-5 d-flex align-items-center'>
            {timeDesc.date}
          </Col>
          <Col className={` ${index == 0 && "first"} ${index == data.length - 1 && "last"} timeline-gutter py-5 ps-5 align-middle d-inline-block`}>
            {timeDesc.desc}
          </Col>
        </Row>
      )}

    </Container>
  )
}

export default Timeline;