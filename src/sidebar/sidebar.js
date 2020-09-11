import React from 'react';
import Photo from '../photo';
import profilePhoto from '../assets/images/photo.jpg';
import styled from 'styled-components';
import {Hr} from '../global-components';

const PaddedHr = styled(Hr)`
  margin-top: 0.5rem;
`;

const SidebarContainer = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 20px;
  padding: 1rem;
`;

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <Photo image={profilePhoto} />
      <PaddedHr/>
    </SidebarContainer>);
};

export default Sidebar;
