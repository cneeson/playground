import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Flex from '../layout/Flex';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Flex justifyContent='center'>
        <Logo />
      </Flex>
      <Flex
        margin='0 auto'
        maxWidth='400px'
        bg='backgroundAccent'
        justifyContent='center'
      >
        {/* {routes.map(({ to, label }) => (
          <Link to={to}>{label}</Link>
        ))} */}
        <h2>Coming Soon ;)</h2>
      </Flex>
    </div>
  );
}

export default Home;
