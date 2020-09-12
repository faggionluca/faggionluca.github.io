import React from 'react';
import Photo from '../photo';
import profilePhoto from '../assets/images/photo.jpg';
import styled from 'styled-components';
import {Hr, withAnimated} from '../global-components';

const PaddedHr = withAnimated(styled(Hr)`
  margin-top: 0.5rem;
`, {
  inject: true,
  animationName: "fadeIn",
  animationDuration: "2s",
  animationDelay: "0.5s"
});

const SidebarContainer = withAnimated(styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 20px;
  border-style: solid;
  border: none;
  border-bottom: 0.1rem solid;
  border-color: ${props => props.theme.borderColor};
  padding: 1rem;
  min-width: 20%;
  box-shadow: ${props => props.theme.boxShadows};
  @media print {
    padding: 0.4rem;
    border-radius: 10px;
  }
`, {
  animation: "fadeInLeft"
});

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <Photo image={profilePhoto} />
      <PaddedHr/>
    </SidebarContainer>);
};

export default Sidebar;
