import React from 'react';
import Logo from '../Logo';
import Flex from '../layout/Flex';
import routes from '../../routes';
import Link from '../Link';
import Text from '../Text';
import Card from '../Card';

function Home() {
  return (
    <>
      <Flex justifyContent='center'>
        <Logo />
      </Flex>
      <Text textAlign='center' m={4} size='large'>
        A collection of code sandboxes to test out new ideas.
      </Text>
      <Flex
        margin='0 auto'
        maxWidth='400px'
        minHeight='500px'
        justifyContent='center'
      >
        {routes.map(({ to, label, description }) => (
          <Card height='100px' px={4}>
            <Link to={to}>
              <Text size='large' mb={0} color='primary'>
                {label}
              </Text>
              <Text mt={1}>
                {description}
              </Text>
            </Link>
          </Card>
        ))}
      </Flex>
    </>
  );
}

export default Home;
