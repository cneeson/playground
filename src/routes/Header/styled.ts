import styled from 'styled-components';

export const Nav = styled.nav`
    ${({ theme: { colors } }) => `
        display: flex;
        background-color: ${colors.backgroundAccent};
        padding: .5rem 2rem;
    `}
`;
