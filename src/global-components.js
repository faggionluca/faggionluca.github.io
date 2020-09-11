import styled from 'styled-components';
import React from 'react';

export function withAnimated(StyledComponent, animateClass) {
  const classes = [];
  for (const key in animateClass) {
    if (animateClass.hasOwnProperty(key)) {
      const value = animateClass[key];
      if (key !== 'animation') {
        classes.push(`animate__${key}-${value}`)
      } else {
        classes.push(`animate__${value}`)
      }
    }
  }
  return (props) => {
    return (<StyledComponent {...props} className={`${ (classes.length !== 0) ? "animate__animated" : ""} ${classes.join(" ")}`}/>)
  };
}

export const theme = {
	primary: '#dedede'
}

export const Hr = styled.hr`
	width: 100%
`;
