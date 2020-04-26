import styled from 'styled-components';
import { space } from '../../../node_modules/@types/styled-system';


const Pre = styled.pre`
    ${({ theme: { radii, colors, space } }) => `
        border-radius: ${radii.md};
        background: ${colors.backgroundAccent};
        padding: ${space[2]};
    `}
`;

export default Pre;