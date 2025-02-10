import { Card, CardContent, CardHeader, Typography } from '@mui/material'


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


export const ExperienceCard = ({
                                 jobTitle,
                                 company,
                                 startDate,
                                 endDate,
                                 bullets,
                               }) => {
  const listElements = bullets.map((text, i) =>
    <li key={i}>{text}</li>
  )

  // TODO: chips for languages/frameworks to display at the bottom, see https://brittanychiang.com/#experience

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="primary">{jobTitle}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{company} · {startDate}–{endDate}</Typography>
        <Typography variant="body1" component="div">
          <ul>
            {listElements}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )
}
