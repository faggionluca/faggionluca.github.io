import React, { ImgHTMLAttributes } from "react";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import './containerDecoContent.scss';
import { Col, ColProps, Stack, StackProps } from 'react-bootstrap';

type ContainerDecoIconProps = PropsWithChildren<HTMLAttributes<HTMLDivElement> & ColProps>

export const ContainerDecoContent = forwardRef<HTMLDivElement, ContainerDecoIconProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <Col ref={ref} {...rest}>
      {children}
    </Col>
  )
});

ContainerDecoContent.displayName = "Content";
