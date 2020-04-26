import styled from 'styled-components';
import { space, layout, color, typography, border, flexbox, shadow, borderRadius,  SpaceProps, LayoutProps, ColorProps, TypographyProps, BorderProps, FlexboxProps, ShadowProps, BorderRadiusProps } from 'styled-system';

export interface BoxProps extends 
    SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    FlexboxProps,
    ShadowProps,
    BorderRadiusProps {
        cursor?: string;
        color?: string;
        children?: any;
        whiteSpace?: string;
    };

const Box = styled.div<BoxProps>`
    ${({ cursor, whiteSpace }) => `
        ${whiteSpace ? `white-space: ${whiteSpace};` : ''}
        ${cursor ? `cursor: ${cursor};` : ''}
    `}
    ${space}
    ${layout}
    ${color}
    ${typography}
    ${border}
    ${flexbox}
    ${shadow}
    ${borderRadius}
`;

export default Box;