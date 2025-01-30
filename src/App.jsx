import { Box, Container, createTheme, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material'
import { SocialLink } from './components/SocialLink.jsx'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'

function App() {

  // ================================================================================
  // Theme
  // ================================================================================
  const theme = createTheme({
    // Colors
    palette: {
      mode: 'dark',
    },
    // Components
    components: {
      MuiTypography: {
        gutterBottom: true,
      },
      // Baseline style overrides
      MuiCssBaseline: {
        styleOverrides: (themeParam) => `
        h2 {
          color: ${themeParam.palette.primary.main};
        }
      `,
      },
    },
  })

  // ================================================================================
  // Render
  // ================================================================================
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      {/*TODO: app bar */}

      <Container id="section-top" maxWidth="md">

        { /* Hero Banner */}
        <Box
          sx={{
            mt: 16,
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{fontWeight: 300}}
          >
            Hi, my name is
          </Typography>
          {/*TODO: make sure name scales nicely, breaks well on narrow views (damn this 3 word last name)*/}
          <Typography
            variant="h1"
            color="primary"
            sx={{fontWeight: 400}}
          >
            Connor de la Cruz.
          </Typography>

          <Divider sx={{my: 4}}/>

          <Box id="section-about">
            <Typography variant="h5" component="p">
              I'm a software engineer based in Chicago.
              TODO: put some cool stuff in here about how great I am at learning new things, writing elegant code,
              collaborating, and mooore
            </Typography>
            <Typography variant="h5" component="p">
              When I'm not crankin' out dope ass code, I enjoy exploring creative outlets, tinkering with old tech
              (iPods,
              Gameboys, VHS tapes, and moooore), and chillin' tf out with my badass dog Kiwi.
            </Typography>
          </Box>

          <Divider sx={{mt: 2}}>
            {/*TODO: urls*/}
            <SocialLink
              label="Email"
              iconComponent={<Email/>}
            />
            <SocialLink
              label="GitHub"
              iconComponent={<GitHub/>}
            />
            <SocialLink
              label="LinkedIn"
              iconComponent={<LinkedIn/>}
            />
            <SocialLink
              label="Instagram"
              iconComponent={<Instagram/>}
            />
          </Divider>
        </Box>

        {/*TODO: content*/}
        <Box>
          <Typography variant="h2">Resume</Typography>
          <Typography variant="h3">Skills</Typography>
          <Typography variant="h3">Experience</Typography>
        </Box>
      </Container>

    </ThemeProvider>
  )
}

export default App
