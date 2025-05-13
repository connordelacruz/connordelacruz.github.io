import { Card, CardActions, CardHeader } from '@mui/material'

/**
 * Card component with some common customizations used in various sections.
 *
 * @param color
 * @param children
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const ContentCard = ({
                              color,
                              children,
                              sx = {},
                              ...props
                            }) => {
  return (
    <Card
      sx={{
        p: 0,
        borderColor: color + '.main',
        ...sx
      }}
      {...props}
    >
      {children}
    </Card>
  )
}

/**
 * CardHeader component with some common customizations used in various sections.
 *
 * @param color
 * @param title
 * @param slotProps
 * @param sx
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const ContentCardHeader = ({
                                    color,
                                    title,
                                    slotProps = {},
                                    sx = {},
                                    ...props
                                  }) => {
  return (
    <CardHeader
      title={title}
      slotProps={{
        title: {
          variant: 'h6',
          color: color,
          gutterBottom: false,
        },
        ...slotProps
      }}
      sx={{
        py: 1,
        mb: 1,
        borderBottom: 2,
        borderColor: color + '.main',
        ...sx
      }}
      {...props}
    />
  )
}

/**
 * CardActions component with some common customizations used in various sections.
 *
 * @param color
 * @param sx
 * @param children
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const ContentCardActions = ({
                                     color,
                                     sx = {},
                                     children,
                                     ...props
                                   }) => {
  return (
    <CardActions
      sx={{
        pb: 2,
        px: 2,
        ...sx
      }}
      {...props}
    >
      {children}
    </CardActions>
  )
}