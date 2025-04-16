// ================================================================================
// Theme
// ================================================================================
import { createTheme } from '@mui/material'

// ================================================================================
// Theme Constants
// ================================================================================

// --------------------------------------------------------------------------------
// Colors
// --------------------------------------------------------------------------------
// Base Colors
const COLOR_BLUE = '#668AFF'
const COLOR_PINK = '#FE5C9C'
const COLOR_YELO = '#FFB217'
const COLOR_BLCK = '#101010'

// --------------------------------------------------------------------------------
// Gradients
// --------------------------------------------------------------------------------
// Gradient between the 3 theme colors
export const THEME_GRADIENT = `linear-gradient(140deg, ${COLOR_BLUE} 11%, ${COLOR_PINK} 50%, ${COLOR_YELO} 89%)`
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
export const THEME_GRADIENT_BORDERS_BG = `linear-gradient(${COLOR_BLCK}, ${COLOR_BLCK}) padding-box, ${THEME_GRADIENT} border-box`
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
    // Typography
    MuiTypography: {
      defaultProps: {
        // TODO: only for headers if you can figure that out:
        gutterBottom: true,
      },
      styleOverrides: {
        root: {
          variants: [
            // h2
            {
              props: {variant: 'h2'},
              style: {
                fontWeight: 400,
              },
            },
            // h5
            {
              props: {variant: 'h5'},
              style: {
                fontWeight: 700,
              },
            },
            // h6
            {
              props: {variant: 'h6'},
              style: {
                fontWeight: 700,
              },
            },
            // button
            {
              props: {variant: 'button'},
              style: {
                fontWeight: 700,
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
          textTransform: 'initial',
          fontSize: '1rem',
          fontWeight: 700,
          borderRadius: '50rem',
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
          fontWeight: 700,
        },
      },
    },

    // TODO: border width for Dividers
    // TODO: can we use defaultProps instead? gotta figure out how to specify for variants
    //    https://mui.com/material-ui/customization/typography/#variants
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
        main: COLOR_YELO,
      },
      name: 'brandYellow',
    }),
    // --------------------------------------------------------------------------------
    // Background
    // --------------------------------------------------------------------------------
    background: {
      default: COLOR_BLCK,
      paper: COLOR_BLCK,
    },
  },
})