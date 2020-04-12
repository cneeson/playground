import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Strikethrough = styled.span`
  text-decoration: line-through;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the <Strikethrough>Jungle</Strikethrough> playground.
        </p>
        <a
          className="App-link"
          href="https://craigneeson.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          craigneeson.com
        </a>
      </header>
    </div>
  );
}

export default App;
