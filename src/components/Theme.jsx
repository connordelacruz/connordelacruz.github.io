// ================================================================================
// Theme
// ================================================================================
import { createTheme } from '@mui/material'

export const theme = createTheme({
  // Colors
  palette: {
    mode: 'dark',
  },
  // Components / Default Props
  components: {
    // Typography
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
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
          }),
      },
    },
    // Slightly Less Based Button Component
    MuiButton: {
      defaultProps: {
        // Disable elevation everywhere
        disableElevation: true,
      }
    },
    // Button Groups
    MuiButtonGroup: {
      defaultProps: {
        // Disable elevation everywhere
        disableElevation: true,
      }
    },
    // Baseline styles
    // TODO: can we use defaultProps instead? gotta figure out how to specify for variants
    //    https://mui.com/material-ui/customization/typography/#variants
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        h2 {
          color: ${themeParam.palette.primary.main};
        }
      `,
    },
  },
})
