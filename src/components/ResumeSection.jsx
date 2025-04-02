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
import { SectionHeader } from './SectionHeader.jsx'


/**
 * Card component listing professional skills.
 *
 * @param title
 * @param titleColor
 * @param skills
 * @return {JSX.Element}
 * @constructor
 */
export const SkillCard = ({
                            title,
                            titleColor = 'inherit',
                            skills,
                          }) => {
// TODO: make a nicely formatted list of these, maybe with chips or using the List component

  return (
    <Card
      sx={{
        p: 0,
        height: '100%',
      }}
    >
      <CardHeader
        title={title}
        slotProps={{
          title: {
            variant: 'h6',
            color: titleColor,
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
            <SkillCard titleColor={color} {...props}/>
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


// TODO DOC
export const ResumeSection = ({
                                skillsContent,
                                experienceContent,
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
