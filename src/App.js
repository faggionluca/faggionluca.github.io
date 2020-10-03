import React from 'react';
import Sidebar from './sidebar';
import styled from 'styled-components';
import { withAnimated, withAnimatedGroup } from '@darkimage/react-animate-hoc';
import { Head } from './typography-inject';
import { breakpoints } from './global-components';

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
    <AppContainer>
      <Head/>
      <Sidebar />
      <div>
        
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
