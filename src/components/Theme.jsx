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
const COLOR_TEAL = '#00CC8B' // TODO: remove?
const COLOR_BLCK = '#11131B'

// TODO: decide if you even wanna do anything with material you, delete what u don't use
// Material You Variants (https://material-foundation.github.io/material-theme-builder/)
const COLORS_MATERIAL_YOU = {
  // Blue
  brandBlue: {
    main: COLOR_BLUE,
    surface: '#B6C4FF',
    onSurface: '#00287D',
    container: '#668AFF',
    onContainer: '#00154C',
    fixed: '#DCE1FF',
    onFixed: '#00164F',
    fixedDim: '#B6C4FF',
    onFixedVariant: '#003BAF',
  },
  // Pink
  brandPink: {
    main: COLOR_PINK,
    surface: '#FFB1C8',
    onSurface: '#650033',
    container: '#FE5C9C',
    onContainer: '#640032',
    fixed: '#FFD9E2',
    onFixed: '#3E001D',
    fixedDim: '#FFB1C8',
    onFixedVariant: '#8E004A',
  },
  // Yellow
  brandYellow: {
    main: COLOR_YELO,
    surface: '#FFD79C',
    onSurface: '#432C00',
    container: '#FFB217',
    onContainer: '#6B4800',
    fixed: '#FFDDAF',
    onFixed: '#281800',
    fixedDim: '#FFBA42',
    onFixedVariant: '#614000',
  },
  // TODO: figure out what to do with below (if anything)
  // Background
  background: '#11131B',
  onBackground: '#E2E1ED',
  // Surface
  surface: '#11131B',
  onSurface: '#E2E1ED',
  surfaceVariant: '#434654',
  onSurfaceVariant: '#C3C5D7',
  inverseSurface: '#E2E1ED',
  inverseOnSurface: '#2E3039',
  surfaceDim: '#11131B',
  surfaceBright: '#373941',
  surfaceContainerLowest: '#0C0E15',
  surfaceContainerLow: '#191B23',
  surfaceContainer: '#1D1F27',
  surfaceContainerHigh: '#282A32',
  surfaceContainerHighest: '#33343D',
  // Outline
  outline: '#8D90A0',
  outlineVariant: '#434654',
  // Idk lol
  shadow: '#000000',
  scrim: '#000000',
}

// --------------------------------------------------------------------------------
// Gradients
// --------------------------------------------------------------------------------
// Gradient between the 3 theme colors
export const THEME_GRADIENT = `linear-gradient(140deg, ${COLOR_BLUE} 11%, ${COLOR_PINK} 50%, ${COLOR_YELO} 89%)`
// Styles to make text color gradient
export const THEME_GRADIENT_TEXT_SX = {
  background: THEME_GRADIENT,
  backgroundClip: 'text',
  color: 'rgba(0,0,0,0)',
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
        ...COLORS_MATERIAL_YOU.brandBlue,
        // TODO: find a way to ensure these values align with defaults
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      name: 'brandBlue',
    }),
    // Red
    brandRed: baseTheme.palette.augmentColor({
      color: {
        ...COLORS_MATERIAL_YOU.brandPink,
      },
      name: 'brandRed',
    }),
    // Yellow
    brandYellow: baseTheme.palette.augmentColor({
      color: {
        ...COLORS_MATERIAL_YOU.brandYellow,
      },
      name: 'brandYellow',
    }),
    // Green TODO: remove?
    brandGreen: baseTheme.palette.augmentColor({
      color: {
        main: COLOR_TEAL,
      },
      name: 'brandGreen',
    }),
    // --------------------------------------------------------------------------------
    // Background
    // --------------------------------------------------------------------------------
    // TODO: update for mat you?
    background: {
      default: COLOR_BLCK,
      paper: COLOR_BLCK,
    },
  },
})