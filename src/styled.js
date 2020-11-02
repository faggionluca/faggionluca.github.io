import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import { breakpoints } from './global-components';
import bg from './assets/images/bg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const AppWrapper = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	padding: 20vh 20vw;

	@media only screen and (max-width: ${breakpoints.md}){
		padding: 10vh 15vw;
	}

	@media only screen and (max-width: ${breakpoints.xl}){
		padding: 15vh 10vw;
	}

	@media print {
		padding: 15vh 5vw;
	}
`;

export const BgStatic = styled.div`
	position: absolute;
	z-index: -1;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-image: url(${bg});
	background-size: cover;
	background-position: center center;
	clip-path: polygon(0 0, 100% 0, 100% 40%, 0 48%);
`

export const AppContainer = styled(Container)`
	background-color: #fff;
`

export const AvatarContainer = styled(Col)`
	@media only screen and (max-width: ${breakpoints.md}){
		min-height: 10rem;
	}
`

export const IconContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	p {
		font-size: 0.8rem;
	}
`

export const MoreContainer = styled(Row)`
	overflow: hidden;
	box-sizing: border-box;
	padding-top: 0;
	max-height: 0;
	height: 100%;
	width: 100%;
	transition: all 0.3s ease-out;
`

export const MoreChevron = styled(FontAwesomeIcon)`
	position: absolute;
	background-color: #fff;
`

export const RowSection = function (props) {
	let border = "border-top"
	if (props.border === false) {
		border = ""
	}
	return <Row {...props} className={`${border} mt-5 mx-4 px-5 justify-content-center ${props.className}`}>{props.children}</Row>
}