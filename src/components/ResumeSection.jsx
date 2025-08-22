import { Box, CardContent, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { Description, PlayArrow } from '@mui/icons-material'
import Grid from '@mui/material/Grid2'
import { SkillChips } from './common/SkillChips.jsx'
import { ContentCard, ContentCardHeader } from './common/ContentCard.jsx'
import { CtaButton } from './common/CtaButton.jsx'
import { THEME_CONTENT_STACK_SPACING } from './Theme.jsx'
import { SectionContainer } from './common/SectionContainer.jsx'

// ================================================================================
// Content
// ================================================================================

// Skills
const skills = [
  {
    title: 'Languages',
    skills: 'Python, PHP, JavaScript, MySQL, CSS, HTML, Java, Bash, Groovy, Lua',
  },
  {
    title: 'Tools & Frameworks',
    skills: 'React, Sass, Jenkins, Django, Cypress, Selenium, Docker, Node.js, Material UI',
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
      'Developed and maintained back-end features for the flagship enterprise web application using PHP and MySQL.',
      'Created CI/CD pipelines to improve deployment efficiency, including an automated maintenance message scheduler that reduced the time to release to 300+ client sites from 2+ hours down to just 20–30 minutes.',
      'Took initiative to build internal CLI tooling in Python to automate repetitive engineering tasks, streamlining git workflows and improving developer productivity across the team.',
      'Authored extensive internal documentation to support engineering best practices, streamline onboarding, and preserve institutional knowledge.',
      'Setup SAML integrations and worked with clients directly to troubleshoot any issues.',
    ],
    skills: 'PHP, MySQL, Jenkins, Groovy, Python, Docker, Cypress, GitHub, Jira',
  },
  {
    jobTitle: 'Full-Stack Developer',
    company: 'Schafer Condon Carter',
    startDate: 'January 2018',
    endDate: 'November 2019',
    bullets: [
      'Spearheaded the development of an in-house CMS and site-building framework using Django, Sass, and JavaScript, enabling rapid, reusable, and customizable site creation for agency clients.',
      'Built a cross-browser front-end testing suite using Selenium WebDriver and Python, integrating with BrowserStack to fully automate regression testing and eliminate hours of manual QA effort.',
      'Delivered and maintained client-facing websites—ranging from marketing pages to full-featured eCommerce platforms—adapting to varying client requirements across modern web technologies.',
    ],
    skills: 'JavaScript, Python, Sass, CSS, MySQL, Selenium, Django, BitBucket, AEM',
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
]

// ================================================================================
// Constants
// ================================================================================

// Common styles for Resume sub-headers
const RESUME_SUBHEADER_SX = {
  textTransform: 'uppercase',
  mb: 3,
}

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
      <CardContent
        sx={{
          p: {
            xs: 2,
            md: 1,
          },
        }}
      >
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
      <Typography
        variant="h3"
        color={color}
        sx={{
          ...RESUME_SUBHEADER_SX,
        }}
      >
        Skills
      </Typography>
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
          <Grid key={i} size={{xs: 12, md: 12 / skillCardProps.length}}>
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
            // Use bottom padding for spacing
            pt: 0,
            '&:last-child': {
              // Remove bottom padding from last item
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
                fontWeight: 500,
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
        {/*TODO: make this less messy and re-implement:*/}
        {/*{skills &&*/}
        {/*  <Box*/}
        {/*    sx={{*/}
        {/*      mt: 2,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {<SkillChips skills={skills.split(', ')} color={color}/>}*/}
        {/*  </Box>*/}
        {/*}*/}
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
    <SectionContainer
      id="section-resume"
      headerText="Resume"
      color={color}
    >
      <Stack
        id="resume-stack"
        spacing={THEME_CONTENT_STACK_SPACING}
      >
        {/*Skills*/}
        <SkillCards skillCardProps={skillsContent} color={color}/>

        <Box>
          <Typography
            variant="h3"
            color={color}
            sx={{
              ...RESUME_SUBHEADER_SX,
              // Little extra margin on top to separate it from skills section
              mt: 2,
            }}
          >
            Experience
          </Typography>
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
    </SectionContainer>
  )
}
