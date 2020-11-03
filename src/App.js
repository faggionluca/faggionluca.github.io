import React, { useState } from 'react';
// import { withAnimated, withAnimatedGroup } from '@darkimage/react-animate-hoc';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css'
import { Button ,Row ,Col} from 'reactstrap';
import photo from './assets/images/photo.jpg';
import data from './assets/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';
import * as comp from './styled';
import { Octokit } from '@octokit/rest';

const ocktokit = new Octokit();
ocktokit.repos.get({
  owner: "darkimage",
  repo: "darkimage.github.io"
}).then(value => console.log(value));

  // https://stackoverflow.com/a/21984136/6791579
  function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const TopSideContainer = function(props) {
  return <Col xs="12" className={`d-flex pt-1 pt-md-3 justify-content-center align-items-center ${props.className}`}>{props.children}</Col>
}

const Avatar = function () {
  return <comp.AvatarContainer className="justify-content-center d-flex order-1 order-sm-1 order-lg-2 p-0" md="12" sm="12" lg="auto">
    <div className="card-profile-image">
      <img alt="" className="m-0 rounded-circle" src={photo}></img>
    </div>
  </comp.AvatarContainer>
}

const IconWithDesc = function (props) {
  if (props.icon.hasOwnProperty("link")) {
    return <comp.IconContainer {...props}>
      <a href={props.icon.link}>
        <FontAwesomeIcon size={props.iconSize ? props.iconSize : "2x"} icon={props.icon.icon} />
      </a>
      <a href={props.icon.link}><span>{props.icon.name}</span></a>
    </comp.IconContainer>
  } else {
    return <comp.IconContainer {...props}>
      <FontAwesomeIcon size={props.iconSize ? props.iconSize : "2x"} icon={props.icon.icon} />
      <span>{props.icon.name}</span>
    </comp.IconContainer>
  }
}

const SocialIcons = function (props) {
  const icons = data.social.map((icon, index) => {
    if (index !== data.social.length-1) {
      return <IconWithDesc key={index} icon={icon} className="pr-4" />
    } else {
      return <IconWithDesc key={index} icon={icon} />
    }
  })
  return <Row className="justify-content-center">{icons}</Row>
}

const TopBar = function() {
  return <Row className="justify-content-center">
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
  const schoolsData = data.details.school.map((school, index) => <div key={index} className="h6 mt-2">
    <span className="font-weight-lighter">{school.type}</span> @ <span>{school.name}</span>
  </div>)
  const languages = data.details.programming.map((value, index) => <Col key={index} xs="auto"><IconWithDesc icon={value} /></Col>)
  return <Row className="justify-content-center d-flex mt-4 mt-md-7">
    <Col style={{minWidth: "256px"}} lg='auto' className="justify-content-center text-center">
      <h3>
        {`${data.details.name} ${data.details.surname}`}
        <span className="font-weight-light">
          {`, ${_calculateAge(new Date(data.details.birthdate))}`}
        </span>
      </h3>
      <div className="h6 font-weight-300">
        {data.details.city}, {data.details.state}
      </div>
      {schoolsData}
      <div className="mt-2">{data.details.hobbies}</div>
      <Row className="mt-5 justify-content-center">{languages}</Row>
    </Col>
  </Row>
}

const OtherContacts = function () {

  const DropDownContacts = function (props) {
    const [opened, setOpened] = useState(false);

    const toggleDropDown = () => {
      if (opened === false) {
        setOpened(true);
      } else {
        setOpened(false); 
      }
    }
    
    return <CSSTransition in={opened} timeout={400} classNames="dropDownSectionWrapper">
      <comp.RowSection {...props} className={`${props.className} dropDownSection`}>
      <CSSTransition in={opened} timeout={400} classNames="dropDownChevron">
        <div onClick={toggleDropDown} className="d-flex w-100 justify-content-center">
          <comp.MoreChevron className="mt--2 rounded-circle shadow-sm" style={{color: "var(--light)"}} icon={faChevronCircleDown} />
        </div>
      </CSSTransition>
      <CSSTransition in={opened} timeout={400}  classNames="dropDownSection">
        <comp.MoreContainer xs="12" className=" justify-content-center">
          {props.children}
        </comp.MoreContainer>
      </CSSTransition>
      </comp.RowSection> 
    </CSSTransition>
  }

  const dataDesc = Object.keys(data.details.more).map((data, index) => <Row key={`desc-${index}`} className="text-right d-block font-weight-bold">{data}</Row>)
  const dataSep = Object.keys(data.details.more).map((_ , index) => <Row key={`sep-${index}`}>:</Row>)
  const dataValues = []
  for (const key in data.details.more) {
    if (data.details.more.hasOwnProperty(key)) {
      dataValues.push(<Row key={`val-${key}`}>{data.details.more[key]}</Row>);
    }
  }

  return <DropDownContacts>
    <Col xs="auto">{dataDesc}</Col>
    <Col xs="auto">{dataSep}</Col>
    <Col xs="auto">{dataValues}</Col>
  </DropDownContacts>
}

const WhoAmI = function (props) {
  return <comp.RowSection border="false">
      <Col xs="auto">
        <Row className="justify-content-center" ><h2 className="text-weight-bold text-center">Who am I?</h2></Row>
        <Row className="justify-content-center text-center">{data.whoiam}</Row>
      </Col>
    </comp.RowSection>
}

const ProgettiUni = function (props) {
  return <comp.RowSection>
    <h2 className="mt-5">
      Progetti Universitari
    </h2>
  </comp.RowSection>
}

function App() {
  return (
    <>
      <comp.AppWrapper className="profile-page">
        <comp.AppContainer className="card card-profile shadow mt-0" fluid>
          <TopBar />
          <PersonalDetails/>
          <OtherContacts />
          <WhoAmI />
          <ProgettiUni/>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
          <Row>PROVA</Row>
        </comp.AppContainer>
      </comp.AppWrapper>
    <comp.BgStatic/>
  </>);
}

export default App;
