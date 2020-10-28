import React from 'react';
import Sidebar from './sidebar';
import styled from 'styled-components';
import { withAnimated, withAnimatedGroup } from '@darkimage/react-animate-hoc';
import { breakpoints } from './global-components';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css'
import { Container, Row, Col, Button } from 'reactstrap';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 12fr;
	width: 100%;
	height: 100%;
  padding: 1rem 2rem;

  @media only screen and (max-width: ${breakpoints.md}){
    display: block;
  }

  @media only screen and (max-width: ${breakpoints.xl}){
    grid-template-columns: 200px 3fr;
  }
`;

const Prova = withAnimatedGroup(function Prova(props) {
  return <div>{props.children} </div>
}, {
    delay: 1,
    dampingDelay: 0.3,
    dampingDuration: 2,
});

const Prova2 = withAnimated(function Prova2(props) {
  return <div style={props.style} className={props.className}>{props.children}</div>
}, {
    animation: "fadeIn",
});

function App() {
  return (
    <AppContainer className="shadow">
      <Sidebar />
      <div>
      <Button color="default" type="button">
          Default
        </Button>
        <Button color="primary" type="button">
          Primary
        </Button>
        <Button color="secondary" type="button">
          Secondary
        </Button>
        <Button color="info" type="button">
          Info
        </Button>
        <Button color="success" type="button">
          Success
        </Button>
        <Button color="danger" type="button">
          Danger
        </Button>
        <Button color="warning" type="button">
          Warning
        </Button>
      </div>
      <Prova>
        <Prova2>Prova1</Prova2>
        <Prova2>Prova2</Prova2>
        <Prova2>Prova3</Prova2>
        <Prova2>Prova4</Prova2>
      </Prova>
    </AppContainer>
  );
}

export default App;
