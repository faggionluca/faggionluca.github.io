import React from 'react';
import styled from 'styled-components';
import { withAnimated } from '../global-components';

const PhotoContainer = styled.div`
  position: relative;
  padding-top: 100%;
`;

const PhotoWrapper = withAnimated(styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  border-style: solid;
  border: none;
  border-bottom: 0.1rem solid;
  border-color: ${props => props.theme.borderColor};
;

`, {
  inject: true,
  animationName: "bounceIn",
  animationDuration: "1s",
  animationDelay: "0.5s"
});

const PhotoImg = styled.img`
  transform: scale(1.15);
`;

const Photo = (props) => {
  return (
    <PhotoContainer>
      <PhotoWrapper>
        <PhotoImg alt="profile" src={props.image}></PhotoImg>
      </PhotoWrapper>
    </PhotoContainer>
  );
};

export default Photo;
