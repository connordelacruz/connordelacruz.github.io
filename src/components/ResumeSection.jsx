import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'
import { Description, PlayArrow } from '@mui/icons-material'
import Grid from '@mui/material/Grid2'
import { SectionHeader } from './common/SectionHeader.jsx'

// ================================================================================
// Content
// ================================================================================

// Skills
const skills = [
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
const experience = [
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
// Components
// ================================================================================

/**
 * Card component listing professional skills.
 *
 * @param title
 * @param color
 * @param skills
 * @return {JSX.Element}
 * @constructor
 */
export const SkillCard = ({
                            title,
                            color = 'inherit',
                            skills,
                          }) => {
// TODO: make a nicely formatted list of these, maybe with chips or using the List component

  return (
    <Card
      sx={{
        p: 0,
        height: '100%',
        borderColor: color + '.main',
      }}
    >
      <CardHeader
        title={title}
        slotProps={{
          title: {
            variant: 'h6',
            color: color,
            mb: 0,
          }
        }}
        sx={{
          pb: 0,
        }}
      />
      <CardContent>
        <Typography variant="body1">
          {skills}
        </Typography>
      </CardContent>
    </Card>
  )
}

/**
 * Card with list of skills.
 *
 * @param skillCardProps
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
export const SkillCards = ({
                             skillCardProps,
                             color,
                           }) => {
  // TODO: format skills nicely, maybe List?
  return (
    <Box>
      <Typography variant="h3">Skills</Typography>
      <Grid
        container
        spacing={2}
        direction={{xs: 'column', sm: 'row'}}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        {skillCardProps.map((props, i) =>
          <Grid key={i} size={{xs: 12, sm: 4}}>
            <SkillCard color={color} {...props}/>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}


/**
 * Bullets for experience cards.
 *
 * @param bullets
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
const ExperienceList = ({
                          bullets,
                          color,
                        }) => {
  return (
    <List
      disablePadding
    >
      {bullets.map((bullet, i) =>
        <ListItem
          key={i}
          disableGutters
        >
          <ListItemIcon>
            <PlayArrow
              fontSize="small"
              color={color}
            />
          </ListItemIcon>
          <ListItemText
            primary={bullet}
            slotProps={{
              primary: {
                gutterBottom: false,
              },
            }}
          />
        </ListItem>
      )}
    </List>
  )
}


/**
 * Card component listing a previous job + experience bullets.
 *
 * @param jobTitle
 * @param company
 * @param startDate
 * @param endDate
 * @param bullets
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
export const ExperienceCard = ({
                                 jobTitle,
                                 company,
                                 startDate,
                                 endDate,
                                 bullets,
                                 color,
                               }) => {
  // TODO: chips for languages/frameworks to display at the bottom, see https://brittanychiang.com/#experience

  return (
    <Card
      sx={{
        py: 0,
        borderColor: color + '.main',
      }}
    >
      <CardContent>
        <Typography variant="h6" color={color}>{jobTitle}</Typography>
        {/*TODO: below md, line break instead of dot*/}
        <Typography variant="subtitle1" color="text.secondary">{company} · {startDate}–{endDate}</Typography>
        <ExperienceList bullets={bullets} color={color}/>
      </CardContent>
    </Card>
  )
}


/**
 * Resume section component.
 *
 * @param skillsContent
 * @param experienceContent
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
export const ResumeSection = ({
                                skillsContent = skills,
                                experienceContent = experience,
                                color,
                              }) => {
  return (
    <Box id="section-resume">
      <SectionHeader color={color}>Resume</SectionHeader>

      <Stack
        id="resume-stack"
        spacing={2}
      >
        {/*Skills*/}
        <SkillCards skillCardProps={skillsContent} color={color}/>

        <Box id="resume-experience">
          <Typography variant="h3">Experience</Typography>
          <Stack spacing={2}>
            {experienceContent.map((props, i) =>
              <ExperienceCard key={i} color={color} {...props}/>
            )}
          </Stack>
        </Box>

        <Box id="resume-pdf">
          {/*TODO: big juicy CTA buttons*/}
          <Button
            href="files/Connor de la Cruz Resume.pdf"
            variant="contained"
            color={color}
            startIcon={<Description/>}
            size="large"
            fullWidth
            download
          >
            View Full Resume
          </Button>
        </Box>

      </Stack>
    </Box>
  )
}
