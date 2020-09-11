import React from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

const PhotoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  transform: scale(1.15); 
`;

const Photo = (props) => {
  return (
    <PhotoContainer>
      <PhotoImg alt="profile" src={props.image}></PhotoImg>
    </PhotoContainer>
  );
};

export default Photo;
