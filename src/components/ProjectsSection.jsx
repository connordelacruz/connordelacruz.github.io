import { Box, Button, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { SectionHeader } from './common/SectionHeader.jsx'
import { GitHub } from '@mui/icons-material'
import { ContentCard, ContentCardHeader } from './common/ContentCard.jsx'

// ================================================================================
// Content
// ================================================================================
// TODO: spot check content
const projects = [
  {
    title: "Channel ⇄ Shift",
    imgSrc: "images/projects/channel-shift.png",
    imgIsPortrait: true,
    skills: 'React, P5.js, Material UI, Node.js',
    bigButtonContent: {
      text: 'Visit Channel Shift Site',
      link: 'https://cheezwhiz.biz',
    },
    body: 'A web app for creating "glitch art" by shifting and swapping an image\'s RGB color channels, developed as a web app with an intuitive UI to make it easily accessible for anyone to use. Built with React and P5.js. Click the button below to try it out!',
  },
  {
    title: "React Counter App",
    imgSrc: "images/projects/react-counter.png",
    imgIsPortrait: true,
    bigButtonContent: {
      text: 'Visit React Counter Site',
      link: 'https://connordelacruz.com/react-counter/'
    },
    body: 'A simple web app for creating customizable counters. Each counter can have a custom name, color, increment/decrement value, and reset value. Counters can easily be reordered by clicking and dragging them into place. Data is saved locally, so your counters will persist any time you come back to the page. Created using React and the Material UI library.',
  },
  {
    title: "Channel ⇄ Shift Classic",
    imgSrc: "images/projects/channel-shift-classic.png",
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/ChannelShiftGUI'
      }
    ],
    body: 'An older version of the Channel Shift tool created with Processing. Includes some experimental features that haven\'t been ported to the web app yet.',
  },
  {
    title: "Chicago ASCII Art",
    imgSrc: "images/projects/chicago-ascii-art.png",
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/chicago-ascii.sh'
      }
    ],
    body: 'Bash scripts for displaying color ASCII art of Chicago flag/skyline in the terminal.',
  },
  {
    title: "iTerm2 Tab Color Commands",
    imgSrc: "images/projects/iterm2-tab-color.png",
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/iterm2-tab-color'
      }
    ],
    body: 'Bash commands for setting the iTerm2 tab/title bar colors. Integrates with base16 shell themes.',
  },
  {
    title: "Git Workflow Tools",
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/git-workflow'
      },
      {
        text: 'PyPI',
        link: 'https://pypi.org/project/git-workflow/'
      }
    ],
    body: 'Command line tools to streamline our team\'s Git workflow. Written in Python.',
  },
  {
    title: "Python Random User Generator",
    smallButtonsContent: [
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
    ],
    body: 'A Python class for generating random user information using the randomuser.me API.',
  },
  {
    title: "Python Lorem Ipsum Generator",
    smallButtonsContent: [
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
    ],
    body: 'A Python module for generating placeholder text using the loripsum.net API. Includes a command line tool to generate text from the terminal and copy it to the clipboard.',
  },
]

// ================================================================================
// Components
// ================================================================================

/**
 * Image component for a project card.
 *
 * @param src
 * @param alt
 * @param imgIsPortrait
 * @return {JSX.Element}
 * @constructor
 */
const ProjectImage = ({
                        src,
                        alt,
                        imgIsPortrait = false
                      }) => {
  return (
    <Box
      sx={{
        mb: 4,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`project-image ${imgIsPortrait ? 'portrait' : ''}`}
      />
    </Box>
  )
}

/**
 * Card component to showcase a project.
 *
 * @param title
 * @param imgSrc
 * @param imgIsPortrait
 * @param skills
 * @param bigButtonContent
 * @param smallButtonsContent
 * @param body
 * @param children
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
const ProjectCard = ({
                       title,
                       imgSrc = null,
                       imgIsPortrait = false,
                       skills = null,
                       bigButtonContent = {text: '', link: ''},
                       smallButtonsContent = [],
                       // TODO: cleanup whichever one of these isn't getting used
                       body = null,
                       children = null,
                       color,
                     }) => {
  // Big button component (if applicable)
  const bigButton = bigButtonContent.text ?
    <Button
      variant="contained"
      color={color}
      size="large"
      fullWidth
      href={bigButtonContent.link}
      target="_blank"
    >
      {bigButtonContent.text}
    </Button>
    : null
  // Small buttons (if applicable)
  const smallButtons = smallButtonsContent.map((smallButtonContent, i) =>
    <Button
      key={i}
      variant="contained"
      color={color}
      href={smallButtonContent.link}
      target="_blank"
    >
      {smallButtonContent.text}
    </Button>
  )

  return (
    <ContentCard
      color={color}
    >
      <ContentCardHeader
        title={title}
        color={color}
      />
      <CardContent>
        {imgSrc && <ProjectImage src={imgSrc} imgIsPortrait={imgIsPortrait}/>}
        <Typography
          variant="body1"
        >
          {children ? children : body}
        </Typography>
        {/*TODO: implement?*/}
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
      <CardActions
        sx={{
          p: 2,
          borderTop: 2,
          borderColor: color + '.main',
        }}
      >
        {smallButtons}
        {bigButton}
      </CardActions>
    </ContentCard>
  )
}

/**
 * List of ProjectCard components.
 *
 * @param projectCardProps
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
const ProjectCards = ({
                        projectCardProps = projects,
                        color,
                      }) => {
  return (
    <>
      {
        projectCardProps.map((cardProps, i) =>
          <ProjectCard key={i} color={color} {...cardProps}/>
        )
      }
    </>
  )
}

/**
 * Projects section component.
 *
 * @param color
 * @return {JSX.Element}
 * @constructor
 */
export const ProjectsSection = ({color}) => {
  return (
    <Box id="section-projects">
      <SectionHeader color={color}>Projects</SectionHeader>
      <Stack spacing={2}>
        <ProjectCards color={color}/>
        {/*View more button*/}
        <Box id="github-link">
          {/*TODO: big juicy CTA buttons*/}
          <Button
            variant="contained"
            color={color}
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
  )
}
