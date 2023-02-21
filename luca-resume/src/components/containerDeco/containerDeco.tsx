import React, { ComponentType, forwardRef, ForwardRefExoticComponent, HTMLAttributes, isValidElement, PropsWithChildren, ReactElement, ReactNode } from 'react';
import './containerDeco.scss';
import useSubComponents from '@/utilities/useSubComponents';
import { ContainerDecoIcon } from './containerDecoIcon'
import { ContainerDecoContent } from './containerDecoContent'
import { Col, Container, ContainerProps, Row, Stack } from 'react-bootstrap';

type ContainerDecoSubComponents = {
  Icon?: ReactNode | null
  Content?: ReactNode | null
} | null;

type ContainerDecoProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & ContainerProps
>;

const ContainerDecoWithRef = forwardRef<HTMLDivElement, ContainerDecoProps>((props, ref) => {
  const { children, className, ...rest } = props

  const subComponents: ContainerDecoSubComponents = useSubComponents(children, ["Icon", "Content"])
  const containerClassNames = `container-deco py-2 pe-4 ${className}`

  return (
    <Container ref={ref} className={containerClassNames} {...rest}>
      <Row>
        {subComponents?.Icon && (<Col className='col-auto'>{subComponents?.Icon}</Col>)}
        {subComponents?.Content}
      </Row>
    </Container>
  )
})

const ContainerDeco = Object.assign(ContainerDecoWithRef, {
  Icon: ContainerDecoIcon,
  Content: ContainerDecoContent
})

ContainerDeco.displayName = "ContainerDeco"

export default ContainerDeco;