import styled from 'styled-components';
import { flexbox, space, layout, color, typography } from 'styled-system';
import Box, { BoxProps } from './Box';

interface FlexProps extends BoxProps { };

const Flex = styled(Box)<FlexProps>`
    display: flex;
    ${flexbox}
    ${space}
    ${layout}
    ${color}
    ${typography}
`;

export default Flex;