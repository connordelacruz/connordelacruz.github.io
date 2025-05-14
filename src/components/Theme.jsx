// ================================================================================
// Theme
// ================================================================================
import { createTheme } from '@mui/material'
// TODO: also import bold?
import FuturaMediumTtf from '../fonts/Futura-Medium.ttf'

// ================================================================================
// Theme Constants
// ================================================================================

// --------------------------------------------------------------------------------
// Colors
// --------------------------------------------------------------------------------
// Base Colors
const COLOR_BLUE = '#668AFF'
const COLOR_PINK = '#FE5C9C'
const COLOR_YELLOW = '#FFB217'
//const COLOR_TEAL = '#05ad98' // TODO: idk if we ditch the gradient maybe we can do this as a 4th color
const COLOR_BLACK = '#101010'

// --------------------------------------------------------------------------------
// Gradients
// --------------------------------------------------------------------------------
// Gradient between the 3 theme colors
export const THEME_GRADIENT = `linear-gradient(140deg, ${COLOR_BLUE}, ${COLOR_PINK}, ${COLOR_YELLOW})`
// Styles to make text color gradient
export const THEME_GRADIENT_TEXT_SX = {
  // Apply gradient
  background: THEME_GRADIENT,
  // Set text to transparent
  WebkitTextFillColor: 'transparent',
  // This is the magic bit that makes the text color gradient
  backgroundClip: 'text',
  // Fallback for browsers that don't support background-clip: text
  color: 'white',
}
// Hack to create gradient borders (https://codyhouse.co/nuggets/css-gradient-borders)
export const THEME_GRADIENT_BORDERS_BG = `linear-gradient(${COLOR_BLACK}, ${COLOR_BLACK}) padding-box, ${THEME_GRADIENT} border-box`
export const THEME_GRADIENT_BORDERS_SX = {
  background: THEME_GRADIENT_BORDERS_BG,
  borderColor: 'transparent',
}

// --------------------------------------------------------------------------------
// Animations and Transitions
// --------------------------------------------------------------------------------
export const THEME_TRANSITION_DURATION = '0.3s'
export const THEME_TRANSITION_TIMING_FUNCTION = 'cubic-bezier(0.4, 0, 0.2, 1)'
export const THEME_TRANSITION_DURATION_AND_TIMING_SX = {
  transitionDuration: THEME_TRANSITION_DURATION,
  transitionTimingFunction: THEME_TRANSITION_TIMING_FUNCTION,
}

// --------------------------------------------------------------------------------
// Spacing
// --------------------------------------------------------------------------------
export const THEME_CONTENT_STACK_SPACING = 3

// ================================================================================
// Utility Methods
// ================================================================================

/**
 * Convert hex color string to rgba().
 *
 * @param hex
 * @param a
 * @return string
 */
export const hex2rgba = (hex, a = 1.0) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

/**
 * convert rgb() color string to rgba().
 *
 * @param rgbString
 * @param a
 * @return string
 */
export const rgb2rgba = (rgbString, a = 1.0) => {
  const expr = /rgb\((?<r>.*),\s*(?<g>.*),\s*(?<b>.*)\)/
  const channels = expr.exec(rgbString).groups
  return `rgba(${channels.r}, ${channels.g}, ${channels.b}, ${a})`
}

// ================================================================================
// Base Theme Overrides
// ================================================================================
const baseTheme = createTheme({
  // --------------------------------------------------------------------------------
  // Palette
  // --------------------------------------------------------------------------------
  palette: {
    mode: 'dark',
  },
  // --------------------------------------------------------------------------------
  // Components / Default Props
  // --------------------------------------------------------------------------------
  components: {
    // Baseline
    MuiCssBaseline: {
      // Futura font face definitions
      styleOverrides: `
        @font-face {
          font-family: 'Futura-Medium';
          font-style: normal;
          font-weight: normal;
          src: local('Futura-Medium'), url(${FuturaMediumTtf}) format('truetype');
        }
      `,
    },
    // Typography
    MuiTypography: {
      defaultProps: {
        // TODO: probably only for headers, see where you have it set to false and adjust accordingly to reduce overrides
        gutterBottom: true,
      },
      styleOverrides: {
        root: {
          variants: [
            // TODO: Futura for body text??
            // Headers
            {
              props: {variant: 'h1'},
              style: {
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
            {
              props: {variant: 'h2'},
              style: {
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
            {
              props: {variant: 'h3'},
              style: {
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
            {
              props: {variant: 'h4'},
              style: {
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
            {
              props: {variant: 'h5'},
              style: {
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
            {
              props: {variant: 'h6'},
              style: {
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
            // Button-style Typography
            {
              props: {variant: 'button'},
              style: {
                // TODO: Adjust nav menu text, it looks a little small with Futura
                fontFamily: 'Futura-Medium',
                fontWeight: 'normal',
              },
            },
          ],
        },
      },
    },

    // Paper
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({theme}) =>
          theme.unstable_sx({
            p: 2,
            borderWidth: 2,
            borderRadius: 4,
          }),
      },
    },

    // Button Component
    MuiButton: {
      defaultProps: {
        // Disable elevation everywhere
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontFamily: 'Futura-Medium',
          fontWeight: 'normal',
          textTransform: 'initial',
          fontSize: '1rem',
          borderRadius: '50rem',
          // Variants
          variants: [
            {
              // Outlined
              props: {variant: 'outlined'},
              style: {
                borderWidth: 2,
              },
            },
            // Set border color for outlined buttons (need to remove alpha)
            {
              props: {variant: 'outlined', color: 'brandBlue'},
              style: {
                borderColor: COLOR_BLUE,
              },
            },
            {
              props: {variant: 'outlined', color: 'brandRed'},
              style: {
                borderColor: COLOR_PINK,
              },
            },
            {
              props: {variant: 'outlined', color: 'brandYellow'},
              style: {
                borderColor: COLOR_YELLOW,
              },
            },
          ],
        },
      },
    },

    // Button Groups
    MuiButtonGroup: {
      defaultProps: {
        // Disable elevation everywhere
        disableElevation: true,
      }
    },

    // Tabs
    MuiTab: {
      styleOverrides: {
        root: {
          // TODO: tweak design, it looks kinda small
          fontFamily: 'Futura-Medium',
          fontWeight: 'normal',
        },
      },
    },
  },
})

// ================================================================================
// Full Theme with Custom Palette
// ================================================================================
export const theme = createTheme(baseTheme, {
  palette: {
    // --------------------------------------------------------------------------------
    // Brand Colors
    // --------------------------------------------------------------------------------
    // Blue
    brandBlue: baseTheme.palette.augmentColor({
      color: {
        main: COLOR_BLUE,
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      name: 'brandBlue',
    }),
    // Red
    brandRed: baseTheme.palette.augmentColor({
      color: {
        main: COLOR_PINK,
      },
      name: 'brandRed',
    }),
    // Yellow
    brandYellow: baseTheme.palette.augmentColor({
      color: {
        main: COLOR_YELLOW,
      },
      name: 'brandYellow',
    }),
    // --------------------------------------------------------------------------------
    // Background
    // --------------------------------------------------------------------------------
    background: {
      default: COLOR_BLACK,
      paper: COLOR_BLACK,
    },
  },
})