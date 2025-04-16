import { Box, CardContent, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { Description, PlayArrow } from '@mui/icons-material'
import Grid from '@mui/material/Grid2'
import { SectionHeader } from './common/SectionHeader.jsx'
import { SkillChips } from './common/SkillChips.jsx'
import { ContentCard, ContentCardHeader } from './common/ContentCard.jsx'
import { CtaButton } from './common/CtaButton.jsx'
import { THEME_CONTENT_STACK_SPACING } from './Theme.jsx'

// ================================================================================
// Content
// ================================================================================

// Skills
// TODO: update to include anything that you put in experience/project sections that haven't been included
const skills = [
  {
    title: 'Programming',
    skills: 'Python, PHP, JavaScript, CSS, Sass, HTML, Java, Bash, Groovy',
  },
  {
    title: 'Libraries & Frameworks',
    skills: 'React, Material UI, P5.js, Processing, Django, Cypress, Selenium',
  },
  {
    title: 'Tools & Software',
    skills: 'Git, GitHub, MySQL, Docker, Jenkins, Node.js, JetBrains, vim',
  },
]

// Experience
// TODO: update resume then update these
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
    skills: 'PHP, MySQL, Jenkins, Groovy, Python, Docker, Cypress, GitHub, Jira',
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
    skills: 'JavaScript, Python, Sass, CSS, MySQL, Selenium, Django, BitBucket, AEM',
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
    skills: 'Python, Bash, SaltStack, CentOS, GitHub',
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
    skills: 'PHP, MySQL, JavaScript, CSS, GitHub',
  },
  {
    jobTitle: 'IT Developer & Software Deployment Engineer',
    company: 'Wheaton College AIT',
    startDate: 'May 2015',
    endDate: 'August 2017',
    bullets: [
      'Built a dashboard web app for the service desk to display important information for technicians.',
      'Developed scripts to automate support procedures and streamline service desk workflows.',
      'Packaged and deployed software for automated installation on campus computers.',
    ],
    skills: 'PHP, MySQL, JavaScript, CSS, Microsoft SCCM, VBScript, Batch',
  },
  {
    // TODO: remove? or figure out skills / way to spin this as beneficial for software dev
    jobTitle: 'Service Desk Supervisor',
    company: 'Wheaton College AIT',
    startDate: 'October 2014',
    endDate: 'August 2017',
    bullets: [
      'Provided tech support to students and staff for hardware, software, and network issues.',
      'Trained, supervised, and assisted service desk technicians.',
    ],
    skills: 'Hardware / Software Troubleshooting, Customer Service, Windows, macOS',
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
  // TODO: are we married to skill chips?
  return (
    <ContentCard
      color={color}
      sx={{
        height: '100%',
      }}
    >
      <ContentCardHeader
        title={title}
        color={color}
      />
      <CardContent>
        <SkillChips
          color={color}
          skills={skills.split(', ')}
        />
      </CardContent>
    </ContentCard>
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
  return (
    <Box>
      <Typography variant="h3" color={color}>Skills</Typography>
      <Grid
        container
        spacing={{xs: THEME_CONTENT_STACK_SPACING, md: 2}}
        direction={{xs: 'column', md: 'row'}}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        {skillCardProps.map((props, i) =>
          <Grid key={i} size={{xs: 12, md: 4}}>
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
          sx={{
            pt: 0,
            '&:last-child': {
              pb: 0,
            },
          }}
        >
          <ListItemIcon
            sx={{
              // Disable aggressive min width, use a margin for spacing instead
              minWidth: 0,
              mr: 2,
            }}
          >
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
 * @param skills
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
                                 skills,
                                 color,
                               }) => {
  // TODO: make sure skill chips look ok on different viewports
  return (
    <ContentCard
      color={color}
    >
      <ContentCardHeader
        title={jobTitle}
        subheader={<span><b>{company}</b><br/>{startDate} - {endDate}</span>}
        color={color}
      />
      <CardContent>
        <ExperienceList bullets={bullets} color={color}/>
        {skills &&
          <Box
            sx={{
              mt: 2,
            }}
          >
            {<SkillChips skills={skills.split(', ')} color={color}/>}
          </Box>
        }
      </CardContent>
    </ContentCard>
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
        spacing={THEME_CONTENT_STACK_SPACING}
      >
        {/*Skills*/}
        <SkillCards skillCardProps={skillsContent} color={color}/>

        <Box id="resume-experience">
          <Typography variant="h3" color={color}>Experience</Typography>
          <Stack spacing={THEME_CONTENT_STACK_SPACING}>
            {experienceContent.map((props, i) =>
              <ExperienceCard key={i} color={color} {...props}/>
            )}
          </Stack>
        </Box>

        <CtaButton
          href="files/Connor de la Cruz Resume.pdf"
          color={color}
          startIcon={<Description/>}
          download
        >
          View Full Resume
        </CtaButton>

      </Stack>
    </Box>
  )
}
