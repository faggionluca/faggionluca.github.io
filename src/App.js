import React from 'react';
import Sidebar from './sidebar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
	grid-template-columns: 1fr 8fr;
	width: 100%;
	height: 100%;
  padding: 1rem;
  
  @media only screen and (max-width: 425px){
    display: block;
  }

  @media only screen and (max-width: 768px){
    grid-template-columns: 1fr 3fr;
  }

  @media only screen and (min-width: 1440px){
    grid-template-columns: 1fr 12fr;
  }
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <div>
        
      </div>
    </AppContainer>
  );
}

export default App;
