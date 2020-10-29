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
  padding: 20vh 20vw;

  @media only screen and (max-width: ${breakpoints.md}){
    padding: 10vh 15vw;
  }

  @media only screen and (max-width: ${breakpoints.xl}){
    padding: 15vh 10vw;
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
  background-position: center center;
  clip-path: polygon(0 0, 100% 0, 100% 47%, 0 69%);
`

const AppContainer = styled(Container)`
  background-color: #fff;
`

const TopSideContainer = function(props) {
  return <Col xs="12" className={`d-flex pt-3 justify-content-center ${props.className}`}><Button>prova</Button></Col>
}

const Avatar = function () {
  const AvatarImg = styled.div`
    min-width: 256px;
  `
  const AvatarContainer = styled(Col)`
    @media only screen and (max-width: ${breakpoints.md}){
      min-height: 10rem;
    }
  `
  
  return <AvatarContainer className="justify-content-center d-flex order-1 order-sm-1 order-lg-2" md="12" sm="12" lg="auto">
    <AvatarImg className="card-profile-image">
      <img className="m-0 rounded-circle" src={photo}></img>
    </AvatarImg>
  </AvatarContainer>
}

const TopBar = function() {
  return <Container fluid>
    <Row className="justify-content-center">
      <TopSideContainer className="order-2 order-sm-2 col-sm-6 order-lg-1 col-lg-3"/>
      <Avatar/>
      <TopSideContainer className="order-3 order-md-3 col-sm-6 order-lg-3 col-lg-3"/>
    </Row>
  </Container>
}

function App() {
  return (
    <>
    <AppContainerWrapper className="profile-page">
      <AppContainer className="card card-profile shadow mt-0" fluid>
        <TopBar/>
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
