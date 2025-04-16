import { Box, Container, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material'
import { theme, THEME_GRADIENT_TEXT_SX } from './components/Theme.jsx'
import { NavBar } from './components/NavBar.jsx'
import { HeaderSection } from './components/HeaderSection.jsx'
import { ResumeSection } from './components/ResumeSection.jsx'
import { ProjectsSection } from './components/ProjectsSection.jsx'
import { ContactSection } from './components/ContactSection.jsx'
import { ZigZag } from './components/common/ZigZag.jsx'

function App() {
  // ================================================================================
  // Constants
  // ================================================================================
  // Theme
  const COLOR_RESUME = 'brandBlue'
  const COLOR_PROJECTS = 'brandRed'
  const COLOR_CONTACT = 'brandYellow'

  // ================================================================================
  // Render
  // ================================================================================
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      {/*Nav Bar*/}
      <NavBar
        sectionLinks={[
          {
            text: 'Resume',
            hash: 'section-resume',
            color: COLOR_RESUME,
          },
          {
            text: 'Projects',
            hash: 'section-projects',
            color: COLOR_PROJECTS,
          },
          {
            text: 'Contact',
            hash: 'section-contact',
            color: COLOR_CONTACT,
          },
        ]}
      />

      { /* Header */}
      <HeaderSection/>

      {/* Page Content */}
      <Container id="page-wrapper" maxWidth="md">
        <Stack
          id="sections-stack"
          spacing={4}
        >
          {/* Resume */}
          <ResumeSection color={COLOR_RESUME}/>

          {/* Projects */}
          <ProjectsSection color={COLOR_PROJECTS}/>

          {/*Contact*/}
          <ContactSection color={COLOR_CONTACT}/>

        </Stack>

      </Container>

      {/*Footer*/}
      <ZigZag
        sx={{
          mt: 6,
          mb: 0,
        }}
      />
      <Box
        sx={{
          py: 4,
        }}
      >
        <Typography
          variant="body1"
          component="p"
          color="textSecondary"
          sx={{
            textAlign: 'center',
            ...THEME_GRADIENT_TEXT_SX,
          }}
          gutterBottom={false}
        >
          Designed and Developed by Connor de la Cruz © {new Date().getFullYear()}
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default App
