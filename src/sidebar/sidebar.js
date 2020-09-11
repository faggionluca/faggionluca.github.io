import React from 'react';
import Photo from '../photo';
import profilePhoto from '../assets/images/photo.jpg';
import styled from 'styled-components';
import {Hr} from '../global-components';

const SidebarContainer = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 20px;
  padding: 1rem;
`;

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <Photo image={profilePhoto} />
      <Hr/>
    </SidebarContainer>);
};

export default Sidebar;
