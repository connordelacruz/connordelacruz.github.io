import { Box, Button, Container, CssBaseline, Paper, Stack, ThemeProvider, Typography } from '@mui/material'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
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
  // Content
  // ================================================================================
  // TODO: move these to their respective components to clean up this file?

  // --------------------------------------------------------------------------------
  // Socials
  // --------------------------------------------------------------------------------
  const socialLinkProps = [
    {
      label: 'Email',
      iconComponent: <Email/>,
      href: 'mailto:connor.c.delacruz@gmail.com',
    },
    {
      label: 'GitHub',
      iconComponent: <GitHub/>,
      href: 'https://github.com/connordelacruz',
    },
    {
      label: 'LinkedIn',
      iconComponent: <LinkedIn/>,
      href: 'http://www.linkedin.com/in/connordelacruz',
    },
    {
      label: 'Instagram',
      iconComponent: <Instagram/>,
      href: 'https://www.instagram.com/delachrome',
    },
  ]

  // --------------------------------------------------------------------------------
  // Resume
  // --------------------------------------------------------------------------------
  // Skills
  const skillsContent = [
    {
      title: 'Programming',
      skills: 'Python, PHP, JavaScript (ES2015+), CSS, Sass, HTML, Java, Bash, Groovy',
    },
    {
      title: 'Libraries & Frameworks',
      skills: 'React, Material UI, P5.js, Processing, Django, Cypress, Selenium',
    },
    {
      title: 'Tools & Software',
      skills: 'Git, GitHub, MySQL, Docker, Jenkins, Node.js, JetBrains IDEs, vim',
    },
  ]

  // Experience
  const experienceContent = [
    {
      jobTitle: 'Software Engineer',
      company: 'Wellspring',
      startDate: 'June 2020',
      endDate: 'Present',
      bullets: [
        'Developed client-focused software solutions in PHP, collaborating with project managers and the QA team to ensure quality and timely delivery.',
        'Streamlined development workflows by creating Jenkins jobs and command line tools with Python.',
        'Authored extensive documentation and engaged in peer programming to enhance team collaboration and knowledge sharing.',
      ],
    },
    {
      jobTitle: 'Full-Stack Developer',
      company: 'Schafer Condon Carter',
      startDate: 'January 2018',
      endDate: 'November 2019',
      bullets: [
        'Created a framework and CMS system for building websites using Sass, JavaScript, and Python.',
        'Developed a cross-browser automated testing system to streamline QA using Python and Selenium.',
        'Built and managed client websites using Django, Wagtail, and Adobe Experience Manager.',
      ],
    },
    {
      jobTitle: 'CS Lab Configuration Management Intern',
      company: 'Wheaton College Computer Science',
      startDate: 'May 2017',
      endDate: 'November 2017',
      bullets: [
        'Collaborated with the CS lab system admin to implement the Salt configuration management system.',
        'Contributed to the Salt open source project with bug fixes and feature implementations.',
      ],
    },
    {
      jobTitle: 'Web Application Developer',
      company: 'Buswell Memorial Library',
      startDate: 'August 2016',
      endDate: 'January 2018',
      bullets: [
        'Built bespoke, responsive web apps to streamline workflows for various departments.',
        'Developed features, fixed bugs, and created unit tests for the Coral open source project.',
      ],
    },
    {
      jobTitle: 'IT Developer & Software Deployment Engineer',
      company: 'Wheaton College Academic & Institutional Technology',
      startDate: 'May 2015',
      endDate: 'August 2017',
      bullets: [
        'Built a dashboard web app for the service desk to display important information for technicians.',
        'Developed scripts to automate support procedures and streamline service desk workflows.',
        'Packaged and deployed software for automated installation on campus computers.',
      ],
    },
    {
      jobTitle: 'Service Desk Supervisor',
      company: 'Wheaton College Academic & Institutional Technology',
      startDate: 'October 2014',
      endDate: 'August 2017',
      bullets: [
        'Provided tech support to students and staff for hardware, software, and network issues.',
        'Trained, supervised, and assisted service desk technicians.',
      ],
    },
  ]

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
        socialLinkProps={socialLinkProps}
      />

      {/* Page Content */}
      <Container id="page-wrapper" maxWidth="md">
        <Stack
          id="sections-stack"
          spacing={4}
        >
          {/* Resume */}
          <ResumeSection
            skillsContent={skillsContent}
            experienceContent={experienceContent}
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
