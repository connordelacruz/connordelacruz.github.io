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
const COLOR_BLUE = '#4D79FF'
const COLOR_PINK = '#FF5C95'
const COLOR_YELO = '#FFB217'
const COLOR_BLCK = '#11131B'

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
          // TODO: uncomment to make text not all caps, then maybe increase text size?
//          textTransform: 'initial',
//          fontSize: '1rem',
          fontWeight: 'bold',
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
    // TODO: border width for Dividers
    // Baseline styles
    // TODO: can we use defaultProps instead? gotta figure out how to specify for variants
    //    https://mui.com/material-ui/customization/typography/#variants
    // TODO: remove?
//    MuiCssBaseline: {
//      styleOverrides: (themeParam) => `
//        h2 {
//          color: ${themeParam.palette.primary.main};
//        }
//      `,
//    },
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
        // TODO: find a way to ensure these values align with defaults
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