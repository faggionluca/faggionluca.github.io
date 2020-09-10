import React from 'react';
import logo from './logo.svg';
import './App.css';

function Prova(props) {
  return (
    <a href={props.link}>{props.test}</a>
  );
}

function App() {
  var test = [];
  for (let i = 0; i < 25; i++) {
    test.push(<p>prova - {i}</p>)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prova</h1>
        <Prova test="ciao" link="https://github.com/KyleAMathews/typography.js"></Prova>
        <hr />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {test}
    </div>
  );
}

export default App;
