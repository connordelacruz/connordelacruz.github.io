import {
  Box,
  Button,
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
import { Description, Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { ExperienceCard } from './components/ExperienceCard.jsx'

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
  // Content
  // ================================================================================

  // Experience section content.
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

  // Experience section components.
  const experienceCards = experienceContent.map((props, i) =>
    <ExperienceCard key={i} {...props}/>
  )

  // ================================================================================
  // Render
  // ================================================================================
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      {/*TODO: app bar */}

      <Container id="page-wrapper" maxWidth="md">

        { /* Hero Banner */}
        <Box
          id="section-about"
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

          <Box>
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

        <Box
          id="section-resume"
          sx={{
            // TODO: make section margins consistent
            mb: 4,
          }}
        >
          <Typography variant="h2">Resume</Typography>

          <Box
            sx={{
              // TODO: wrap these boxes in a stack? that way we don't gotta explicitly define spacing between
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
            <Stack
              spacing={2}
            >
              {experienceCards}
            </Stack>
          </Box>

          {/*TODO: link to resume pdf*/}
          <Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Description/>}
              size="large"
              fullWidth
            >
              View Full Resume
            </Button>
          </Box>
        </Box>

        <Box id="section-projects">
          <Typography variant="h2">Projects</Typography>

          {/*TODO: ProjectCard component*/}
        </Box>
      </Container>

    </ThemeProvider>
  )
}

export default App
