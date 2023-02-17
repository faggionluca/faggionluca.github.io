import React, { useLayoutEffect, useRef, useState, HTMLAttributes, PropsWithChildren, FC, cloneElement } from 'react';
import { ReactElement } from 'react';
import { useMeasure } from 'react-use';
import './underlineDeco.scss';

type UnderlineProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function UnderlineDeco(props: UnderlineProps) {
  const [childRef, { width }] = useMeasure();

  const decoStyle = {
    width: width + 10
  }

  const children = cloneElement(props.children as ReactElement, {ref: childRef})

  return (
    <div className={`deco-container d-flex align-items-start ${props.className || ''}`}>
      {children}
      <div className='deco' style={decoStyle}></div>
    </div> 
  )
}

export default UnderlineDeco;