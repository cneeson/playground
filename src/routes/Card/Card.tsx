import React from 'react';
import Box, { BoxProps } from '../layout/Box';
import styled from 'styled-components';

interface CardProps extends BoxProps { };

const StyledBox = styled(Box)`
    ${({ theme: { colors } }) => `
        cursor: pointer;
        transition: all .15s ease;

        &:hover {
            background: ${colors.backgroundHighlight};
            outline: none;
        }

        &:focus {
            box-shadow: ${colors.focus};
        }
    `}
`;

const Card = (props: CardProps) => {

    return (
        <StyledBox
            bg='backgroundAccent'
            width='100%'
            borderRadius='md'
            {...props}
        />
    );
};

export default Card;