import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

const ProjectImage = ({src, alt}) => {
  return (
    <Box
      sx={{
        mb: 4,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="project-image"
      />
    </Box>
  )
}

export const ProjectCard = ({
                              title,
                              imgSrc = null,
                              bigButtonContent = {text: '', link: ''},
                              smallButtonsContent = [],
                              children,
                            }) => {
  // Big button component (if applicable)
  const bigButton = bigButtonContent.text ?
    <Button
      variant="contained"
      color="primary"
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
      color="primary"
      href={smallButtonContent.link}
      target="_blank"
    >
      {smallButtonContent.text}
    </Button>
  )

  return (
    <Card>
      <CardHeader
        title={title}
        slotProps={{
          title: {
            variant: 'h4',
            color: 'primary',
          }
        }}
      />
      <CardContent>
        {imgSrc && <ProjectImage src={imgSrc}/>}
        <Typography variant="body1">
          {children}
        </Typography>
      </CardContent>
      <CardActions>
        {smallButtons}
        {bigButton}
      </CardActions>
    </Card>
  )
}