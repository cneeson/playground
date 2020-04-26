import styled from 'styled-components';
import { space, layout, color, typography, SpaceProps, LayoutProps, ColorProps, TypographyProps } from 'styled-system';

type FontSize = 'small' | 'regular' | 'large';

export interface TextProps extends
    SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps {
    size?: FontSize;
};

const fontSizeMappings = {
    small: 0,
    regular: 1,
    large: 2
};

export default styled.p<TextProps>`
    ${({ theme: { colors, fonts, fontSizes }, size = 'regular' }) => `
        color: ${colors.text};
        font-family: ${fonts.body};
        font-size: ${fontSizes[fontSizeMappings[size]]};
    `}

    ${space}
    ${layout}
    ${color}
    ${typography}
`;