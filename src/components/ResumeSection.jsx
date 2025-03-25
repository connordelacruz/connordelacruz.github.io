import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import Grid from '@mui/material/Grid2'


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

// TODO DOC:
export const SkillCards = ({
                             skillCardProps,
                             color,
                           }) => {
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


// TODO DOC
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
          diablePadding
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

// TODO: finish extracting section into components
