import React from 'react';
// import Sidebar from './sidebar';
import styled from 'styled-components';
// import { withAnimated, withAnimatedGroup } from '@darkimage/react-animate-hoc';
import { breakpoints } from './global-components';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css'
import { Button, Container,Row ,Col} from 'reactstrap';
import bg from './assets/images/bg.svg';
import photo from './assets/images/photo.jpg';
import data from './assets/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://stackoverflow.com/a/21984136/6791579
function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

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
  return <Col xs="12" className={`d-flex pt-3 justify-content-center align-items-center ${props.className}`}>{props.children}</Col>
}

const Avatar = function () {
  const AvatarContainer = styled(Col)`
    @media only screen and (max-width: ${breakpoints.md}){
      min-height: 10rem;
    }
  `

  return <AvatarContainer className="justify-content-center d-flex order-1 order-sm-1 order-lg-2 p-0" md="12" sm="12" lg="auto">
    <div className="card-profile-image">
      <img className="m-0 rounded-circle" src={photo}></img>
    </div>
  </AvatarContainer>
}


const SocialIcon = function (props) {
  const LinkIcon = styled.a`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.8rem;
    }
  `

  return <div {...props} className="pl-4">
    <LinkIcon href={props.icon.link}>
      <FontAwesomeIcon size="3x" icon={props.icon.icon} />
      <span>{props.icon.name}</span>
    </LinkIcon>
  </div>
}

const SocialIcons = function (props) {
  const icons = data.social.map((icon, index) => <SocialIcon key={index} icon={icon}/>)
  return <Row className="justify-content-center" fluid>{icons}</Row>
}

const TopBar = function() {
  return <Row className="justify-content-center" fluid>
      <TopSideContainer className="order-2 order-sm-2 col-sm-6 order-lg-1 col-lg-6">
        <SocialIcons/>
      </TopSideContainer>
      <Avatar/>
      <TopSideContainer className="order-3 order-md-3 col-sm-6 order-lg-3 col-lg-6" >
      <a href={`mailto:${data.contact_email}`}><Button color="primary">Contact Me</Button></a>
      </TopSideContainer>
    </Row>
}

const PersonalDetails = function () {
  const DetailsContainer = styled(Col)`min-width: 256px;`;

  return <Row fluid className="justify-content-center d-flex mt-5">
    <DetailsContainer lg='auto' className="justify-content-center text-center">
      <h3>
        {`${data.details.name} ${data.details.surname}`}
        <span className="font-weight-light">
          {`, ${_calculateAge(new Date(data.details.birthdate))}`}
        </span>
      </h3>
      <div className="h6 font-weight-300">
        {data.details.city}, {data.details.state}
      </div>
    </DetailsContainer>
  </Row>
}

function App() {
  return (
    <>
    <AppContainerWrapper className="profile-page">
      <AppContainer className="card card-profile shadow mt-0" fluid>
        <TopBar />
        <PersonalDetails/>
      </AppContainer>
      </AppContainerWrapper>
      <BgStatic/>
    </>
  );
}

export default App;
