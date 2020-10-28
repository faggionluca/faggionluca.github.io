import React from 'react';
// import Sidebar from './sidebar';
import styled from 'styled-components';
// import { withAnimated, withAnimatedGroup } from '@darkimage/react-animate-hoc';
import { breakpoints } from './global-components';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css'
import { Button, Container } from 'reactstrap';


const AppContainerWrapper = styled.div`
  display: grid;
	width: 100%;
	height: 100%;
  padding: 20vh 5vw;

  @media only screen and (max-width: ${breakpoints.md}){
    padding: 10vh 3vw;
  }

  @media only screen and (max-width: ${breakpoints.xl}){
    padding: 15vh 4vw;
  }
`;

function App() {
  return (
    <AppContainerWrapper>
      <Container className="shadow" fluid>
        <Button>Prova</Button>
      </Container>
    </AppContainerWrapper>
  );
}

export default App;
