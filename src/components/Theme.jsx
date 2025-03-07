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
const COLOR_BLUE = '#4D79FF'
const COLOR_TEAL = '#00CC8B'
const COLOR_PINK = '#FF5C95'
const COLOR_YELO = '#FFB217'
const COLOR_BACK = '#000014'

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
    // Green
    brandGreen: baseTheme.palette.augmentColor({
      color: {
        main: COLOR_TEAL,
      },
      name: 'brandGreen',
    }),
    // --------------------------------------------------------------------------------
    // Background
    // --------------------------------------------------------------------------------
    background: {
      default: COLOR_BACK,
      paper: COLOR_BACK,
    },
  },
})