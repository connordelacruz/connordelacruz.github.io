import { Box, Button, Container, CssBaseline, Paper, Stack, ThemeProvider, Typography } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import { theme } from './components/Theme.jsx'
import { ResumeSection } from './components/ResumeSection.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { SectionHeader } from './components/SectionHeader.jsx'
import { NavBar } from './components/NavBar.jsx'
import { PageHeader } from './components/PageHeader.jsx'
import { ContactSection } from './components/ContactSection.jsx'

function App() {
  // ================================================================================
  // Constants
  // ================================================================================
  // Theme
  const COLOR_HEADER = 'brandBlue'
  const COLOR_RESUME = 'brandYellow'
  const COLOR_PROJECTS = 'brandRed'
  const COLOR_CONTACT = COLOR_HEADER

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
      <PageHeader
        color={COLOR_HEADER}
      />

      {/* Page Content */}
      <Container id="page-wrapper" maxWidth="md">
        <Stack
          id="sections-stack"
          spacing={4}
        >
          {/* Resume */}
          <ResumeSection
            color={COLOR_RESUME}
          />

          {/* Projects */}
          <Box id="section-projects">
            <SectionHeader color={COLOR_PROJECTS}>Projects</SectionHeader>

            <Stack
              id="projects-stack"
              spacing={2}
            >
              <ProjectCard
                title="Channel ⇄ Shift"
                imgSrc="images/projects/channel-shift.png"
                bigButtonContent={{
                  text: 'Visit Channel Shift Site',
                  link: 'https://cheezwhiz.biz'
                }}
              >
                A web app for creating "glitch art" by shifting and swapping an image's RGB color channels, developed as
                a
                web app with an intuitive UI to make it easily accessible for anyone to use. Built with React and P5.js.
                Click the button below to try it out!
              </ProjectCard>
              <ProjectCard
                title="React Counter App"
                imgSrc="images/projects/react-counter.png"
                bigButtonContent={{
                  text: 'Visit React Counter Site',
                  link: 'https://connordelacruz.com/react-counter/'
                }}
              >
                A simple web app for creating customizable counters. Each counter can have a custom name, color,
                increment/decrement value, and reset value. Counters can easily be reordered by clicking and dragging
                them into place. Data is saved locally, so your counters will persist any time you come back to the
                page. Created using React and MUI’s Material UI library.
              </ProjectCard>
              <ProjectCard
                title="Channel ⇄ Shift Classic"
                imgSrc="images/projects/channel-shift-classic.png"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/ChannelShiftGUI'
                  }
                ]}
              >
                {/*TODO: explain project being no longer maintained but also why it's worth using still?*/}
                An older version of the Channel Shift tool created with Processing. Includes some experimental features
                that haven't been ported to the web app yet.
              </ProjectCard>
              <ProjectCard
                title="Chicago ASCII Art"
                imgSrc="images/projects/chicago-ascii-art.png"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/chicago-ascii.sh'
                  }
                ]}
              >
                Bash scripts for displaying color ASCII art of Chicago flag/skyline in the terminal.
              </ProjectCard>
              <ProjectCard
                title="iTerm2 Tab Color Commands"
                imgSrc="images/projects/iterm2-tab-color.png"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/iterm2-tab-color'
                  }
                ]}
              >
                Bash commands for setting the iTerm2 tab/title bar colors. Pairs well with base16 shell themes.
              </ProjectCard>
              <ProjectCard
                title="Git Workflow Tools"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/git-workflow'
                  },
                  {
                    text: 'PyPI',
                    link: 'https://pypi.org/project/git-workflow/'
                  }
                ]}
              >
                Command line tools to streamline our team's Git workflow. Written in Python.
              </ProjectCard>
              <ProjectCard
                title="Python Random User Generator"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/python-randomuser'
                  },
                  {
                    text: 'PyPI',
                    link: 'https://pypi.org/pypi/randomuser'
                  },
                  {
                    text: 'Docs',
                    link: 'http://connordelacruz.com/python-randomuser/'
                  }
                ]}
              >
                A Python class for generating random user information using the randomuser.me API.
              </ProjectCard>
              <ProjectCard
                title="Python Lorem Ipsum Generator"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/py-loremipsum'
                  },
                  {
                    text: 'PyPI',
                    link: 'https://pypi.org/pypi/py-loremipsum'
                  },
                  {
                    text: 'Docs',
                    link: 'http://connordelacruz.com/py-loremipsum/'
                  }
                ]}
              >
                A Python module for generating placeholder text using the loripsum.net API. Includes a command line tool
                to generate text from the terminal and copy it to the clipboard.
              </ProjectCard>

              {/*View more button*/}
              <Box id="github-link">
                {/*TODO: big juicy CTA buttons*/}
                <Button
                  variant="contained"
                  color={COLOR_PROJECTS}
                  startIcon={<GitHub/>}
                  size="large"
                  fullWidth
                  href="https://github.com/connordelacruz"
                  target="_blank"
                >
                  View More on GitHub
                </Button>
              </Box>
            </Stack>
          </Box>

          {/*Contact*/}
          <ContactSection color={COLOR_CONTACT}/>

        </Stack>

      </Container>

      {/*Footer*/}
      <Paper
        sx={{
          mt: 4,
          py: 4,
          borderWidth: '2px 0 0',
        }}
      >
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          sx={{
            textAlign: 'center',
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
