import styled from 'styled-components';
import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function withAnimated(StyledComponent, animateClass) {
	const withAnimated = (props) => {
		const classes = [];
		const cssKeyClasses = ['animation', 'delay', 'speed'];
		animateClass = {...animateClass, ...props.animateCss}
		for (const key of cssKeyClasses) {
			if (animateClass.hasOwnProperty(key)) {
				const value = animateClass[key];
				if (key !== 'animation') {
					classes.push(`animate__${key}-${value}`)
				} else {
					classes.push(`animate__${value}`)
				}
			}
		}
		const { className, style, ...rest } = props;
		const { animation, delay, speed, ...animateStyle } = animateClass;
		const styleElem = { ...style, ...animateStyle };
		return (<StyledComponent {...rest} style={styleElem} className={`${className} ${ (classes.length !== 0) ? "animate__animated" : ""} ${classes.join(" ")}`}/>)
	};
	withAnimated.displayName = `WithAnimated(${getDisplayName(StyledComponent)})`;
	return withAnimated;
}

export function withAnimatedChildren(StyledComponent, animateOptions) {
	const computeTime = (offset, damping, startOffset) => {
		const sec = offset*damping + (startOffset ? startOffset : 0);
		return sec ? `${sec}s` : undefined;
	}

	const constructAnimCss = (offset) => {
		const css = {
			animationDelay: computeTime(offset, animateOptions.dampingDelay, animateOptions.delay),
			animationDuration: computeTime(offset, animateOptions.dampingDuration, animateOptions.startOffset)
		};
		Object.keys(css).forEach(key => css[key] === undefined && delete css[key])
		return css
	}
	const withAnimatedChildren = (props) => {
		const children = React.Children.map(props.children, (Child, i) => {
			return React.cloneElement(Child, {
				animateCss: constructAnimCss(i)
				})
			}
		);
		return <StyledComponent {...props}>{children}</StyledComponent>
	};
	withAnimatedChildren.displayName = `withAnimatedChildren(${getDisplayName(StyledComponent)})`;
	return withAnimatedChildren;
}

export const theme = {
	primary: '#f5f5f5',
	boxShadows: `0 4.8px 6.3px rgba(0, 0, 0, 0.12), 0 38px 50px rgba(0, 0, 0, 0.14)`,
	borderColor: '#999999'
}

export const Hr = styled.hr`
	width: 100%;
	background: hsla(0,0%,0%,0.1);
`;
