import styled from 'styled-components';

export const LogoHeading = styled.h1`
    ${({ theme: { colors, fonts } }) => `
        color: ${colors.primary};
        font-family: ${fonts.heading};
        text-decoration: none;
    `}
`;