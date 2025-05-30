import { Box, Button, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { GitHub, Launch, MenuBook, Terminal } from '@mui/icons-material'
import { ContentCard, ContentCardActions, ContentCardHeader } from './common/ContentCard.jsx'
import { CtaButton } from './common/CtaButton.jsx'
import { THEME_CONTENT_STACK_SPACING } from './Theme.jsx'
import { SectionContainer } from './common/SectionContainer.jsx'
import { ButtonStack } from './common/ButtonStack.jsx'
import Grid from '@mui/material/Grid2'

// ================================================================================
// Content
// ================================================================================
const projects = [
  {
    // TODO: update social banner then use that as an image here
    title: 'This Site!',
    body: 'Designed and built from the scratch using React and Material UI.',
    skills: 'JavaScript, React, Material UI, Node.js',
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/connordelacruz.github.io',
        startIcon: <GitHub/>
      }
    ],
  },
  {
    title: "Channel ⇄ Shift",
    imgSrc: "images/projects/channel-shift.png",
    body: 'A web app for creating "glitch art" by shifting and swapping an image\'s RGB color channels, developed as a web app with an intuitive UI to make it easily accessible for anyone to use. Built with React, Material UI, and P5.js.',
    skills: 'JavaScript, React, P5.js, Material UI, Node.js',
    bigButtonContent: {
      // TODO: "visit" feels weird? phrasing? (and make counter consistent?)
      text: 'Visit Channel Shift Site',
      link: 'https://cheezwhiz.biz',
      startIcon: <Launch/>
    },
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/react-p5-channel-shift',
        startIcon: <GitHub/>
      },
    ],
    buttonStackProps: {
      // Split to column on sm to avoid text wrapping on big button
      direction: {
        xs: 'column',
        md: 'row'
      },
    },
  },
  {
    title: "React Counter App",
    imgSrc: "images/projects/react-counter.png",
    cardImgHeight: {
      // Scales nicer for vertical screen when displayed as a column
      md: 375,
    },
    body: 'A simple web app for creating counters with highly customizable properties, data persistence, and click-and-drag support. Developed with React and Material UI.',
    skills: 'JavaScript, React, Material UI, Node.js',
    bigButtonContent: {
      text: 'Visit Site',
      link: 'https://connordelacruz.com/react-counter/',
      startIcon: <Launch/>
    },
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/react-counter',
        startIcon: <GitHub/>
      },
    ],
    buttonStackProps: {
      // Split to column on sm to avoid text wrapping on big button
      direction: {
        xs: 'column',
        md: 'row'
      },
    },
    gridSize: 6,
  },
  {
    title: "Channel ⇄ Shift Classic",
    imgSrc: "images/projects/channel-shift-classic.png",
    cardImgHeight: {
      // Doesn't need as much vertical space when full width
      sm: 350,
      // Match counter app when displayed as a column
      md: 375,
    },
    body: 'An older version of the Channel Shift tool created with Processing. Includes some experimental features that haven\'t been ported to the web app yet.',
    skills: 'Java, Processing',
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/ChannelShiftGUI',
        startIcon: <GitHub/>
      }
    ],
    gridSize: 6,
  },
  {
    title: "iTerm2 Tab Color Commands",
    imgSrc: "images/projects/iterm2-tab-color.png",
    body: 'Bash commands for setting the iTerm2 tab/title bar colors. Integrates with base16 shell themes.',
    skills: 'Bash, iTerm 2, Base16 Shell',
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/iterm2-tab-color',
        startIcon: <GitHub/>
      }
    ],
    gridSize: 6,
  },
  {
    title: "Chicago ASCII Art",
    imgSrc: "images/projects/chicago-ascii-art.png",
    body: 'Bash scripts for displaying color ASCII art of Chicago flag/skyline in the terminal.',
    skills: 'Bash',
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/chicago-ascii.sh',
        startIcon: <GitHub/>
      }
    ],
    gridSize: 6,
  },
  {
    title: "Git Workflow Tools",
    body: 'Command line tools to streamline our team\'s Git workflow. Written in Python.',
    skills: 'Python, Git',
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/git-workflow',
        startIcon: <GitHub/>
      },
      {
        text: 'PyPI',
        link: 'https://pypi.org/project/git-workflow/',
        startIcon: <Terminal/>
      }
    ],
    gridSize: 6,
  },
  {
    title: "Python Random User Generator",
    body: 'A Python class for generating random user information using the randomuser.me API.',
    skills: 'Python, randomuser.me',
    smallButtonsContent: [
      {
        text: 'GitHub',
        link: 'https://github.com/connordelacruz/python-randomuser',
        startIcon: <GitHub/>
      },
      {
        text: 'PyPI',
        link: 'https://pypi.org/pypi/randomuser',
        startIcon: <Terminal/>
      },
      {
        text: 'Docs',
        link: 'http://connordelacruz.com/python-randomuser/',
        startIcon: <MenuBook/>
      }
    ],
    gridSize: 6,
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
 * @param cardImgHeight
 * @param skills
 * @param bigButtonContent
 * @param smallButtonsContent
 * @param buttonStackProps
 * @param body
 * @param color
 * @param gridSize
 * @return {JSX.Element}
 * @constructor
 */
const ProjectCard = ({
                       title,
                       imgSrc = null,
                       cardImgHeight = {},
                       skills = null,
                       bigButtonContent = {text: '', link: ''},
                       smallButtonsContent = [],
                       buttonStackProps = {},
                       body,
                       color,
                       gridSize = 12,
                     }) => {
  // Big button component (if applicable)
  const bigButton = bigButtonContent.text ?
    <Button
      variant="contained"
      size="large"
      fullWidth
      color={color}
      href={bigButtonContent.link}
      startIcon={bigButtonContent.startIcon === undefined ? null : bigButtonContent.startIcon}
      target="_blank"
    >
      {bigButtonContent.text}
    </Button>
    : null
  // Small buttons (if applicable)
  const smallButtons = (Array.isArray(smallButtonsContent) && smallButtonsContent.length) ?
    smallButtonsContent.map((smallButtonContent, i) =>
      <Button
        key={i}
        variant="outlined"
        size="large"
        fullWidth
        color={color}
        href={smallButtonContent.link}
        startIcon={smallButtonContent.startIcon === undefined ? null : smallButtonContent.startIcon}
        target="_blank"
      >
        {smallButtonContent.text}
      </Button>
    )
    : null

  return (

    <Grid
      size={{
        xs: 12,
        md: gridSize,
      }}
    >
      <ContentCard
        color={color}
        sx={{
          height: {
            xs: 'auto',
            md: '100%',
          },
        }}
      >
        <ContentCardHeader
          title={title}
          color={color}
          sx={{
            // Remove bottom margin for cards with banners (TODO: just pad card content so margin is not required)
            mb: imgSrc ? 0 : 1,
          }}
        />
        {/*Banner image*/}
        {imgSrc &&
          <CardMedia
            image={imgSrc}
            sx={{
              height: {
                xs: 300,
                sm: 450,
                md: 465 * (gridSize / 12),
                // Overrides from props
                ...cardImgHeight,
              },
              borderBottom: 2,
              borderBottomColor: color + '.main',
            }}
          />
        }
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              px: 1,
              textWrap: 'pretty',
            }}
            gutterBottom={false}
          >
            {body}
          </Typography>
          {/*TODO: make this less messy and re-implement*/}
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
        <ContentCardActions
          color={color}
        >
          <ButtonStack {...buttonStackProps}>
            {bigButton}
            {smallButtons}
          </ButtonStack>
        </ContentCardActions>
      </ContentCard>
    </Grid>
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
    <Grid
      container
      spacing={THEME_CONTENT_STACK_SPACING}
      alignItems="stretch"
    >
      {
        projectCardProps.map((cardProps, i) =>
          <ProjectCard key={i} color={color} {...cardProps}/>
        )
      }
    </Grid>
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
    <SectionContainer
      id="section-projects"
      headerText="Projects"
      color={color}
    >
      <Stack spacing={THEME_CONTENT_STACK_SPACING}>
        <ProjectCards color={color}/>
        {/*View more button*/}
        <Box>
          <CtaButton
            color={color}
            startIcon={<GitHub/>}
            href="https://github.com/connordelacruz"
          >
            View More on GitHub
          </CtaButton>
        </Box>
      </Stack>
    </SectionContainer>
  )
}
