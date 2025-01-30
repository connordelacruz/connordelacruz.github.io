import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Paper,
  Stack,
  ThemeProvider,
  Typography
} from '@mui/material'
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
      // Baseline styles
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

        <Box>
          <Typography variant="h2">Resume</Typography>

          <Box
            sx={{
              // TODO: turn this into a stack? that way we don't gotta explicitly define spacing between
              mb: 4,
            }}
          >
            <Typography variant="h3">Skills</Typography>
            <Stack
              direction={{xs: 'column', sm: 'row'}}
              spacing={2}
              // TODO: dividers? justifyContent? account for breakpoints
            >
              <Paper>
                <Typography variant="h6">Programming</Typography>
                <Typography variant="body1">
                  Python, PHP, JavaScript (ES2015+), CSS, Sass, HTML, Java, Bash, Groovy
                </Typography>
              </Paper>
              <Paper>
                <Typography variant="h6">Libraries & Frameworks</Typography>
                <Typography variant="body1">
                  React, Material UI, P5.js, Processing, Django, Cypress, Selenium
                </Typography>
              </Paper>
              <Paper>
                <Typography variant="h6">Tools & Software</Typography>
                <Typography variant="body1">
                  Git, GitHub, MySQL, Docker, Jenkins, Node.js, JetBrains IDEs, vim
                </Typography>
              </Paper>
            </Stack>
          </Box>

          <Box
            sx={{
              mb: 4,
            }}
          >
            <Typography variant="h3">Experience</Typography>
          </Box>
        </Box>
      </Container>

    </ThemeProvider>
  )
}

export default App
