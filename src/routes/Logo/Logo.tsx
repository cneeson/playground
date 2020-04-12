import React from 'react';
import { LogoHeading } from './styled';
import Link from '../Link';

const Logo = () => (
    <Link to='/'>
        <LogoHeading>Playground</LogoHeading>
    </Link>
);

export default Logo;