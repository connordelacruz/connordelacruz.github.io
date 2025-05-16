import { Container, CssBaseline, Paper, Stack, ThemeProvider, Typography } from '@mui/material'
import { theme, THEME_GRADIENT_BORDERS_SX, THEME_GRADIENT_TEXT_SX } from './components/Theme.jsx'
import { NavBar } from './components/NavBar.jsx'
import { HeaderSection } from './components/HeaderSection.jsx'
import { ResumeSection } from './components/ResumeSection.jsx'
import { ProjectsSection } from './components/ProjectsSection.jsx'
import { ContactSection } from './components/ContactSection.jsx'

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
            text: 'Projects',
            hash: 'section-projects',
            color: COLOR_PROJECTS,
          },
          {
            text: 'Resume',
            hash: 'section-resume',
            color: COLOR_RESUME,
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
          {/* Projects */}
          <ProjectsSection color={COLOR_PROJECTS}/>

          {/* Resume */}
          <ResumeSection color={COLOR_RESUME}/>

          {/*Contact*/}
          <ContactSection color={COLOR_CONTACT}/>

        </Stack>

      </Container>

      {/*Footer*/}
      <Paper
        sx={{
          mt: 4,
          py: 3,
          borderWidth: 0,
          borderTopWidth: 2,
          borderRadius: 0,
          ...THEME_GRADIENT_BORDERS_SX
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
      </Paper>
    </ThemeProvider>
  )
}

export default App
