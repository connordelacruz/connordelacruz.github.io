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
    // Component Props
    components: {},
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
            sx={{
              fontWeight: 300,
            }}
          >
            Hi, my name is
          </Typography>
          <Typography
            variant="h1"
            color="primary"
            sx={{fontWeight: 400}}
          >
            Connor de la Cruz.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 300,
            }}
          >
            I'm a software engineer.
          </Typography>

          <Divider sx={{my: 4}}/>

          <Box id="section-about">
            <Typography variant="h5" component="p" mb={2}>
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
            <SocialLink
              label="Email"
              iconComponent={<Email/>}
              color="error"
            />
            <SocialLink
              label="GitHub"
              iconComponent={<GitHub/>}
              color="success"
            />
            <SocialLink
              label="LinkedIn"
              iconComponent={<LinkedIn/>}
              color="info"
            />
            <SocialLink
              label="Instagram"
              iconComponent={<Instagram/>}
              color="warning"
            />
          </Divider>
        </Box>

        {/*TODO: content*/}
      </Container>

    </ThemeProvider>
  )
}

export default App
