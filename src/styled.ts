import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme: { colors } }) => `
        background-color: ${colors.background};
        min-height: 100vh;
    `}
`