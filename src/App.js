import React from 'react';
// import Sidebar from './sidebar';
import styled from 'styled-components';
// import { withAnimated, withAnimatedGroup } from '@darkimage/react-animate-hoc';
import { breakpoints } from './global-components';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css'
import { Button, Container,Row ,Col} from 'reactstrap';
import bg from './assets/images/bg.svg';
import photo from './assets/images/photo.jpg';

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

const BgStatic = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 47%, 0 69%);
`

const AppContainer = styled(Container)`
  background-color: #fff;
`

const ProfilePic = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
`

function App() {
  return (
    <>
    <AppContainerWrapper>
      <AppContainer className="card card-profile shadow" fluid>
        <Container fluid>
          <Row>
              <Col xs="3">prova</Col>
              <Col className="justify-content-center position-relative d-flex mt--5">
                <ProfilePic className="avatar card-profile shadow">
                  <img className="m-0" src={photo}></img>
                </ProfilePic>
              </Col>
              <Col xs="3">prova</Col>
            </Row>
          </Container>
          <Container fluid>
            <Row className="w-100">
              <Col className="h-100">prova</Col>
            </Row>
          </Container>
      </AppContainer>
      </AppContainerWrapper>
      <BgStatic/>
    </>
  );
}

export default App;
