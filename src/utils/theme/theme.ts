const breakpoints = ['28em', '40em', '52em', '64em', '76em', '90em'];

const theme = {
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif'
  },
  fontWeights: {
    regular: 400,
    bold: 700
  },
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '3rem',
    '3.75rem'
  ],
  lineHeights: [
    'normal',
    '1.5rem',
    '2rem',
    '3.5rem',
    '4.25rem'
  ],
  letterSpacings: [
    '0.2px',
    '0.5px'
  ],
  mediaQueries: {
    xs: `@media screen and (max-width: ${breakpoints[0]})`,
    sm: `@media screen and (max-width: ${breakpoints[1]})`,
    md: `@media screen and (max-width: ${breakpoints[2]})`,
    lg: `@media screen and (max-width: ${breakpoints[3]})`,
    xlg: `@media screen and (max-width: ${breakpoints[4]})`,
    xxlg: `@media screen and (max-width: ${breakpoints[5]})`
  },
  space: [
    '0.25rem',
    '0.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem'
  ],
  radii: {
    sm: '.25rem',
    md: '.5rem',
    lg: '.75rem'
  },
  borders: {
    sm: '1px solid'
  },
  colors: {
    background: 'white',
    backgroundAccent: '#fafafa',
    backgroundHighlight: '#eaeaea',
    primary: '#875f9a',
    secondary: '#ffbd69',
    tertiary: '',
    text: 'black',
    focus: 'rgba(80, 177, 156, 0.5)',
    grey: [
      '#f6f7fa',
      '#d3d9e6',
      '#939eab'
    ]
  }
};

export default theme;