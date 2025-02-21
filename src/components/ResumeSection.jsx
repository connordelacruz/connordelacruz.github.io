import { Card, CardContent, CardHeader, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'


// TODO: make a nicely formatted list of these, maybe with chips or using the List component
export const SkillCard = ({
                            title,
                            children
                          }) => {
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
            color: 'primary',
            mb: 0,
          }
        }}
        sx={{
          pb: 0,
        }}
      />
      <CardContent>
        <Typography variant="body1">
          {children}
        </Typography>
      </CardContent>
    </Card>
  )
}


const ExperienceList = ({bullets}) => {
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


export const ExperienceCard = ({
                                 jobTitle,
                                 company,
                                 startDate,
                                 endDate,
                                 bullets,
                               }) => {
  // TODO: chips for languages/frameworks to display at the bottom, see https://brittanychiang.com/#experience

  return (
    <Card
      sx={{
        py: 0,
      }}
    >
      <CardContent>
        <Typography variant="h6" color="primary">{jobTitle}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{company} · {startDate}–{endDate}</Typography>
        <ExperienceList bullets={bullets}/>
      </CardContent>
    </Card>
  )
}
