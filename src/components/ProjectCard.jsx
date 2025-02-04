import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

const ProjectImage = ({src, alt}) => {
  return (
    <Box
      sx={{
        mb: 2,
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
  // TODO: smaller button list?
  // TODO: figure out image styling...
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
      {bigButtonContent.text &&
        <CardActions>
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
        </CardActions>
      }
    </Card>
  )
}